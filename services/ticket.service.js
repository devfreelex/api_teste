const { uniqueID } = require('../services/uniqueId.server')

const ticketFactory = () => {
    let ticketModel = null
    let filter = {}

    const getModel = () => ticketModel

    const setModel = (training) => ticketModel = training

    const setFilter = (filters) => filter = { ...filters }

    const getByFilter = async () => {

        if (!('code' in filter)) {
            throw new Error('O filtro de Treinamentos é inválido.')
        }

        if ('code' in filter && filter.code) {
            return await ticketModel.findOne(
                { code: filter.code }
            )
        }

    }


    const getAll = async () => {
        return await ticketModel.find()
    }

    const getByEmitter = async (emitterCode) => {
        return await ticketModel.find({emitterCode: emitterCode})
    }

    const create = async (data) => {
        const now = new Date().getTime().toString()

        const {
            emitterCode,
            receiverCode,
            trainingCode,
            classCode,
            lessonCode,
            message            
        } = data

        const content = message
        
        return await ticketModel.insert({
            code: uniqueID(),
            emitterCode,
            receiverCode,
            trainingCode,
            classCode,
            lessonCode,
            messages:[{
                code: uniqueID(), 
                emitterCode, 
                content, 
                createAt: now,
            }],
            status:1,
            createAt: now,
            updateAt: now,
        })
    }


    const update = async (code, data) => {
        const now = new Date().getTime().toString()

        if (data.status && !data.message) {
            console.log('aqui... 1')
            return await ticketModel.findOneAndUpdate(
                { code },
                { $set: {status: data.status, updateAt: now} }
            )
        }

        if(data.message && data.emitterCode && !data.status) { 
            console.log('aqui... 2')
            return await ticketModel.findOneAndUpdate(
                { code },
                {
                    $set:{ updateAt: now },
                    $push: {
                        messages: {
                            code: uniqueID(),
                            emitterCode: data.emitterCode,
                            content: data.message,
                            createAt: now,                            
                        }
                    } 
                }
            )            
        }

        if(data.status && data.message && data.emitterCode) {
            console.log('aqui... 3')
            return await ticketModel.findOneAndUpdate(
                { code },
                {
                    $set: { status: data.status, updateAt: now },
                    $push: {
                        messages: {
                            code: uniqueID(),
                            emitterCode: data.emitterCode,
                            content: data.message,
                            createAt: now,
                        }
                    }
                }
            )              
        }

        if(data.message && !data.emitterCode) throw new Error('Não é possível localizar o código do emissor do ticket/mensagem.')

    }

    return {
        getAll,
        create,
        update,
        getModel,
        setModel,
        setFilter,
        getByFilter,
        getByEmitter        
    }
}

module.exports = {
    ticketFactory
}