const { userFactory } = require('../../services/user.service')



const getUser = async (parent, {filter}, ctx) => {
    const user = userFactory()
    user.setModel(ctx.db.Users)
    user.setFilter(filter)
    return await user.getByFilter()
}

const getUsers = async (parent, args, ctx) => {
    const user = userFactory()
    user.setModel(ctx.db.Users)
    return await user.getAll()
}


const createUser = async (parent, {data}, ctx) => {
    const user = userFactory()
    user.setModel(ctx.db.Users)
    return await user.create(data)
}

const updateUser = async (parent, {code, data}, ctx) => {
    const user = userFactory()
    user.setModel(ctx.db.Users)
    return await user.update(code, data)
}

const removeUser = async (parent, {code}, ctx) => {
    const user = userFactory()
    user.setModel(ctx.db.Users)
    return await user.remove(code)
}




module.exports = { 
    Queries: {
        getUser,
        getUsers
    },
    Mutations: {
        createUser,
        updateUser,
        removeUser
    }
}