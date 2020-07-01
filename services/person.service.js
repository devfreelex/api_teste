const { uniqueID } = require('../services/uniqueId.server')

const personFactory = () => {
    let personModel = null
    let filter = {}

    const getModel = () => personModel

    const setModel = (person) => personModel = person

    const setFilter = (filters) => filter = { ...filters }

    const getByFilter = async () => {

        if (!('rg' in filter) && !('cpf' in filter)) {
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

    }

    const getAll = async () => {
        return await personModel.find()
    }

    const create = async (data) => {
        const now = new Date().getTime().toString()
      return await personModel.insert({
          code: uniqueID(),
          personalData: { ...data },
          createAt: now,
          updateAt: now,
      })
    }

    const remove = async (code) => {
        return await personModel.findOneAndDelete({code})
    }

    const update = async (code, data) => { 
        
        const values = {
            personalData: { ...data },
            updateAt: new Date().getTime().toString()
        }

        return  await personModel.findOneAndUpdate(
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