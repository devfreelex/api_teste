const { uniqueID } = require('../services/uniqueId.server')

const companyFactory = () => {
    let companiesModel = null
    let filter = {}

    const getModel = () => companiesModel

    const setModel = (companies) => companiesModel = companies

    const setFilter = (filters) => filter = { ...filters }

    const searchByFilter = async () => {
        if('cnpj' in filter && filter.cnpj) {
            return await companiesModel.find({ cnpj: filter.cnpj })
        }

        if('code' in filter && filter.code) {
            return await companiesModel.find({code: filter.code})
        }
        
        if('matrixCode' in filter && filter.matrixCode) {
            return await companiesModel.find({ matrix: filter.matrixCode })
        }


        throw new Error('Filtragem inválida.')
    }

    const getMatrix = async () => {
        return await companiesModel.findOne({ cnpj: '54834568436241' })
    }  

    const createNew = async (data) => {
        data.code = uniqueID()
      return await companiesModel.insert(data)
    }

    const remove = async (code) => {
        return await companiesModel.findOneAndDelete(code)
    }

    const update = async (code, data) => { 
        return await companiesModel.findOneAndUpdate(
            {code}, 
            {$set: data},
            {new: true}
         )
    }

    return {
        getModel,
        setModel,
        setFilter,
        searchByFilter,
        getMatrix,
        createNew,
        remove,
        update
    }
}

module.exports = {
    companyFactory
}