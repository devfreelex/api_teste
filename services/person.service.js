const { uniqueID } = require('../services/uniqueId.server')

const personFactory = () => {
    let personModel = null
    let filter = {}

    const getModel = () => personModel

    const setModel = (person) => personModel = person

    const setFilter = (filters) => filter = { ...filters }

    const getByFilter = async () => {

        if (!('rg' in filter) && !('cpf' in filter) && !('code' in filter)) {
            throw new Error('O filtro de pessoas é inválido.')
        }

        if('rg' in filter && filter.rg) {
            return await personModel.findOne(
                {"personalData.rg": filter.rg}
            )
        }

        if('cpf' in filter && filter.cpf) {
            return await personModel.findOne(
                { "personalData.cpf": filter.cpf }
            )
        }

        if('code' in filter && filter.code) {
            return await personModel.findOne(
                { "code": filter.code }
            )
        }

    }

    const getAll = async () => {
        return await personModel.find()
    }

    const create = async (data) => {
        const now = new Date().getTime().toString()
        const {addresses, contacts} = Object.assign({}, data)
        delete data.addresses
        delete data.contacts

      return await personModel.insert({
          code: uniqueID(),
          personalData: { ...data },
          addresses, contacts,
          createAt: now,
          updateAt: now,
      })
    }

    const remove = async (code) => {
        return await personModel.findOneAndDelete({code})
    }

    const update = async (code, data) => { 
        const { addresses, contacts } = Object.assign({}, data) 

        delete data.addresses
        delete data.contacts

        const values = {
            personalData: { ...data },
            addresses, contacts,
            updateAt: new Date().getTime().toString()
        }

        return await personModel.findOneAndUpdate(
            {code},
            { $set: { ...values } },
            {new: true},
        )
    }

    return {
        getModel,
        setModel,
        setFilter,
        getByFilter,
        getAll,
        create,
        remove,
        update
    }
}

module.exports = {
    personFactory
}