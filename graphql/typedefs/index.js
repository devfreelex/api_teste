const { gql } = require('apollo-server')
const QueryType = require('./query.type')
const MutationType = require('./mutation.type')
const CompanyType = require('./company.type')
const PersonType = require('./person.type')
const UserType = require('./user.type')
const ClassType = require('./class.type')
const TrainingType = require('./training.type')

module.exports = gql`
    ${QueryType}
    ${MutationType}
    ${CompanyType}
    ${PersonType}
    ${UserType}
    ${ClassType}
    ${TrainingType}
`