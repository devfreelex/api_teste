const { gql } = require('apollo-server')

module.exports = gql`
    type Query {
        hello:String
        getCompany: Company!
        getCompanies(filter: CompanyFilterInput!):[Company]!
        getPersons: [Person]!
        getPerson(filter:PersonInputFilter): Person        
        getUsers:[User]!
        getUser(filter:UserInputFilter!):User
        getClass(filter:TrainingClassInputFilter):TrainingClass
        getClasses:[TrainingClass]!
        getTraining(filter:TrainingInputFilter):TrainingType
        getTrainings:[TrainingType]!
    }
`