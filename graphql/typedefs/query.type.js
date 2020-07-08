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
        getUserLogin(filter:UserLoginInputFilter):User
        getClass(filter:TrainingClassInputFilter):TrainingClass
        getClasses:[TrainingClass]!
        getClassesByCode(classesCode:[Int!]!):[TrainingClass]!
        getTraining(filter:TrainingInputFilter):TrainingType
        getTrainingsByCode(trainingCodes:[Int!]!):[TrainingType]!
        getTrainings:[TrainingType]!
        getTicketsByEmitter(code:Int!):[TicketType]!
    }
`