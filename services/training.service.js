const { uniqueID } = require('../services/uniqueId.server')

const trainingFactory = () => {
    let trainingModel = null
    let filter = {}

    const getModel = () => trainingModel

    const setModel = (training) => trainingModel = training

    const setFilter = (filters) => filter = { ...filters }

    const getByFilter = async () => {

        if (!('code' in filter)) {
            throw new Error('O filtro de Treinamentos é inválido.')
        }

        if ('code' in filter && filter.code) {
            return await trainingModel.findOne(
                { code: filter.code }
            )
        }

    }

    const getByCodes = async (trainingCodes) => {
       return await trainingModel.find({
            code: { $in: trainingCodes }
        })
    }

    const getAll = async () => {
        return await trainingModel.find()
    }

    const create = async (data) => {
        const now = new Date().getTime().toString()
        return await trainingModel.insert({
            code: uniqueID(),
            ...data,
            createAt: now,
            updateAt: now,
        })
    }

    const remove = async (code) => {
        return await trainingModel.findOneAndDelete({ code })
    }

    const update = async (code, data) => {

        const updateAt = new Date().getTime().toString()

        return await trainingModel.findOneAndUpdate(
            { code },
            { $set: { ...data, updateAt } },
            { new: true },
        )
    }

    const cteateLesson = async (code, data) => {
        const now = new Date().getTime().toString()
        data.code = uniqueID()
        data.status = false
        
        if(data.content && data.content.length) {
            data.content.forEach( content => {
                content.code = uniqueID()
            })
        }

        return await trainingModel.findOneAndUpdate(
            { code },
            {
                $set: { updateAt: now },
                $push: {
                    lessons: {
                        code: uniqueID(),
                        createAt: now,
                        updateAt: now,
                        ...data,
                    }
                },
            },
            { new: true },
        )
    }

    const updateLesson = async (lessonCode, data) => {console.log(data)
        const updateAt = new Date().getTime().toString()

        if (data.content && data.content.length) {
            data.content.forEach(content => {
                content.code = uniqueID()
            })
        }        

        const result = await trainingModel.findOneAndUpdate(
            { "lessons.code": lessonCode }, 
            {
                '$set': {
                    updateAt,
                    'lessons.$.code': lessonCode,
                    'lessons.$.status': +data.status,
                    'lessons.$.duration': data.duration,
                    'lessons.$.title': data.title,
                    'lessons.$.description': data.description,
                    'lessons.$.content': data.content,
                    'lessons.$.materials': data.materials,
                    'lessons.$.updateAt': updateAt,
                }
            }
        )
        console.log(result)
        return result
    }

    const removeLesson = async (code) => {
        const updateAt = new Date().getTime().toString()

        return trainingModel.findOneAndUpdate(
            { 'lessons.code': code },
            {
                $pull: { 
                    'lessons': { code }  
                } 
                // '$set': {
                //     updateAt,
                //     'lessons.$.code': lessonCode,
                //     'lessons.$.duration': data.duration,
                //     'lessons.$.title': data.title,
                //     'lessons.$.description': data.description,
                //     'lessons.$.content': data.content,
                //     'lessons.$.materials': data.materials,
                //     'lessons.$.updateAt': updateAt,
                // }
            }
        )
    }   

    return {
        getModel,
        setModel,
        setFilter,
        getByFilter,
        getByCodes,
        getAll,
        create,
        remove,
        update,
        cteateLesson,
        updateLesson,
        removeLesson,
    }
}

module.exports = {
    trainingFactory
}