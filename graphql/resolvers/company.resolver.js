const { companyFactory } = require('../../services/company.service')

const getCompany = async (parent, args, ctx) => {
    const company = companyFactory()
    company.setModel(ctx.db.Companies)
    return await company.getMatrix()
}

const getCompanies = async (parent, { filter }, ctx) => {
    const company = companyFactory()
    company.setFilter(filter)
    company.setModel(ctx.db.Companies)
    return await company.searchByFilter()
}

const createCompany = async (parent, { newCompany }, ctx) => {
    const company = companyFactory()
    company.setModel(ctx.db.Companies)
    return await company.createNew(newCompany)
}

const removeCompany = async (parent, {code}, ctx) => {
    const company = companyFactory()
    company.setModel(ctx.db.Companies)
    return await company.remove({code})    
}

const updateCompany = async (parent, {code, data}, ctx) => {
    const company = companyFactory()
    company.setModel(ctx.db.Companies)
    return await company.update(code, data)    
}

module.exports = { 
    Queries: { 
        getCompany,
        getCompanies 
    },
    Mutations: {
        createCompany,
        removeCompany,
        updateCompany,
    }
}