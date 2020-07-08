const { trainingFactory } = require('../../services/training.service')



const getTraining = async (parent, {filter}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    training.setFilter(filter)
    return await training.getByFilter()
}

const getTrainingsByCode = async (parent, {trainingCodes}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    training.setFilter(trainingCodes)
    return await training.getByCodes(trainingCodes)
}

const getTrainings = async (parent, args, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
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

const updateLessonTraining = async (parent, {lessonCode, data}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    return await training.updateLesson(lessonCode, data)
}

const removeLessonTraining = async (parent, {code, lessonCode, data}, ctx) => {
    const training = trainingFactory()
    training.setModel(ctx.db.Trainings)
    return await training.removeLesson(code, lessonCode, data)
}





module.exports = { 
    Queries: {
        getTraining,
        getTrainings,
        getTrainingsByCode
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