const company = require('./company.resolver')
const person = require('./person.resolver')
const user = require('./user.resolver')
const trainingClass = require('./class.resolver')
const training = require('./training.resolver')
const ticket = require('./ticket.resolver')

module.exports = {
    Query: {
        hello: () => 'hello world',
        ...company.Queries,
        ...person.Queries,
        ...user.Queries,
        ...trainingClass.Queries,
        ...training.Queries,
        ...ticket.Queries,
    }, 
    Mutation: {
        ...company.Mutations,
        ...person.Mutations,
        ...user.Mutations,
        ...trainingClass.Mutations,
        ...training.Mutations,
        ...ticket.Mutations,
    }
}