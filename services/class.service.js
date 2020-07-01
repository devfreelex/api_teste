const { uniqueID } = require('../services/uniqueId.server')

const trainingClassFactory = () => {
    let trainingClassModel = null
    let filter = {}

    const getModel = () => trainingClassModel

    const setModel = (trainingClass) => trainingClassModel = trainingClass

    const setFilter = (filters) => filter = { ...filters }

    const getByFilter = async () => {

        if (!('code' in filter) && !('tutorCode' in filter)) {
            throw new Error('O filtro de classes é inválido.')
        }

        if('code' in filter && filter.code) {
            return await trainingClassModel.findOne(
                {code:filter.code}
            )
        }

        if('tutorCode' in filter && filter.tutorCode) {
            return await trainingClassModel.findOne(
                { tutorCode: filter.tutorCode }
            )
        }

    }

    const getAll = async () => {
        return await trainingClassModel.find()
    }

    const create = async (data) => {
        const now = new Date().getTime().toString()
        return await trainingClassModel.insert({
            code: uniqueID(),
            ...data,
            createAt: now,
            updateAt: now,
        })
    }

    const remove = async (code) => {
        return await trainingClassModel.findOneAndDelete({code})
    }

    const update = async (code, data) => { 
        
        const updateAt = new Date().getTime().toString()

        return  await trainingClassModel.findOneAndUpdate(
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
        getAll,
        create,
        remove,
        update
    }
}

module.exports = {
    trainingClassFactory
}