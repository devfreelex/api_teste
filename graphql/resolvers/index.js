const company = require('./company.resolver')
const person = require('./person.resolver')
const user = require('./user.resolver')
const trainingClass = require('./class.resolver')
const training = require('./training.resolver')

module.exports = {
    Query: {
        hello: () => 'hello world',
        ...company.Queries,
        ...person.Queries,
        ...user.Queries,
        ...trainingClass.Queries,
        ...training.Queries,
    }, 
    Mutation: {
        ...company.Mutations,
        ...person.Mutations,
        ...user.Mutations,
        ...trainingClass.Mutations,
        ...training.Mutations,
    }
}