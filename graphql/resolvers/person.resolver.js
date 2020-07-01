const { personFactory } = require('../../services/person.service')

const getPerson = async (parent, {filter}, ctx) => {
    const person = personFactory()
    person.setModel(ctx.db.Persons)
    person.setFilter(filter)
    return await person.getByFilter()
}

const getPersons = async (parent, args, ctx) => {
    const person = personFactory()
    person.setModel(ctx.db.Persons)
    return await person.getAll()
}

const createPerson = async (parent, {data}, ctx) => {
    const person = personFactory()
    person.setModel(ctx.db.Persons)
    return await person.create(data)
}

const updatePerson = async (parent, {code, data}, ctx) => {
    const person = personFactory()
    person.setModel(ctx.db.Persons)
    return await person.update(code, data)
}

const removePerson = async (parent, {code}, ctx) => {
    const person = personFactory()
    person.setModel(ctx.db.Persons)
    return await person.remove(code)
}



module.exports = { 
    Queries: {
        getPerson,
        getPersons
    },
    Mutations: {
        createPerson,
        updatePerson,
        removePerson,
    }
}