const { trainingClassFactory } = require('../../services/class.service')



const getClass = async (parent, {filter}, ctx) => {
    const trainingClass = trainingClassFactory()
    trainingClass.setModel(ctx.db.trainingClass)
    trainingClass.setFilter(filter)
    return await trainingClass.getByFilter()
}

const getClasses = async (parent, args, ctx) => {
    const trainingClass = trainingClassFactory()
    trainingClass.setModel(ctx.db.trainingClass)
    return await trainingClass.getAll()
}

const getClassesByCode = async (parent, {classesCode}, ctx) => {
    const trainingClass = trainingClassFactory()
    trainingClass.setModel(ctx.db.trainingClass)
    return await trainingClass.getByCodes(classesCode)
}


const createClass = async (parent, {data}, ctx) => {
    const trainingClass = trainingClassFactory()
    trainingClass.setModel(ctx.db.trainingClass)
    return await trainingClass.create(data)
}

const updateClass = async (parent, {code, data}, ctx) => {
    const trainingClass = trainingClassFactory()
    trainingClass.setModel(ctx.db.trainingClass)
    return await trainingClass.update(code, data)
}

const removeClass = async (parent, {code}, ctx) => {
    const trainingClass = trainingClassFactory()
    trainingClass.setModel(ctx.db.trainingClass)
    return await trainingClass.remove(code)
}




module.exports = { 
    Queries: {
        getClass,
        getClasses,
        getClassesByCode
    },
    Mutations: {
        createClass,
        updateClass,
        removeClass
    }
}