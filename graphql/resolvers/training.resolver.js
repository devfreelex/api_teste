const { trainingFactory } = require('../../services/training.service')



const getTraining = async (parent, {filter}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.training)
    training.setFilter(filter)
    return await training.getByFilter()
}

const getTrainings = async (parent, args, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.training)
    return await training.getAll()
}


const createTraining = async (parent, {data}, ctx) => {
    console.log(ctx.db)
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    return await training.create(data)
}

const updateTraining = async (parent, {code, data}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    return await training.update(code, data)
}

const removeTraining = async (parent, {code}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    return await training.remove(code)
}

const addLessonTraining = async (parent, {code, data}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    return await training.cteateLesson(code, data)
}

const updateLessonTraining = async (parent, {code, lessonCode, data}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    return await training.updateLesson(code, lessonCode, data)
}

const removeLessonTraining = async (parent, {code, lessonCode, data}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    return await training.removeLesson(code, lessonCode, data)
}





module.exports = { 
    Queries: {
        getTraining,
        getTrainings
    },
    Mutations: {
        createTraining,
        updateTraining,
        removeTraining,
        addLessonTraining,
        updateLessonTraining,
        removeLessonTraining,
    }
}