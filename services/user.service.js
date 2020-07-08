const { uniqueID } = require('../services/uniqueId.server')
const { permissionFactory } = require('./permission.service')

const userFactory = () => {
    let userModel = null
    let filter = {}

    const getModel = () => userModel

    const setModel = (user) => userModel = user

    const setFilter = (filters) => filter = { ...filters }

    const getByFilter = async () => {

        if (!('code' in filter) && !('personCode' in filter) && !('login' in filter)) {
            throw new Error('O filtro de usuários é inválido.')
        }

        if('code' in filter && filter.code) {
            return await userModel.findOne(
                {code:filter.code}
            )
        }

        if('personCode' in filter && filter.personCode) {
            return await userModel.findOne(
                { personCode: filter.personCode }
            )
        }

        if('login' in filter && filter.login) {
            return await userModel.findOne(
                { login: filter.login }
            )
        }

    }

    const getUserByLogin = async ({login, password}) => {
        return await userModel.findOne(
            { login, password }
        )
    }

    const getAll = async () => {
        return await userModel.find()
    }

    const getUserPermissions = (permissionTypes) => {
        const permissionStore = permissionFactory()
        const userPermissions = []
        permissionTypes.forEach((type) => {
            if(permissionStore.isValid(type)) {
                const permission = permissionStore.getByType(type)
                userPermissions.push(permission)
            }
        })
        return userPermissions
    }

    const create = async (data) => {
        const now = new Date().getTime().toString()
        const userPermissions = getUserPermissions(data.permissions)
        data.permissions = [...userPermissions]

        return await userModel.insert({
            code: uniqueID(),
            ...data,
            createAt: now,
            updateAt: now,
        })
    }

    const remove = async (code) => {
        return await userModel.findOneAndDelete({code})
    }

    const update = async (code, data) => { 
        
        const updateAt = new Date().getTime().toString()
        const userPermissions = getUserPermissions(data.permissions)
        data.permissions = [...userPermissions]        

        return  await userModel.findOneAndUpdate(
            {code},
            { $set: { ...data, updateAt } },
            {new: true},
        )
    }

    return {
        getModel,
        setModel,
        setFilter,
        getByFilter,
        getUserByLogin,
        getAll,
        create,
        remove,
        update
    }
}

module.exports = {
    userFactory
}