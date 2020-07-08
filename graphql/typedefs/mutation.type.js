const { gql } = require('apollo-server')

module.exports = gql`
    type Mutation {
     createCompany(data: CompanyRegisterInput!): Company
     updateCompany(code:Int!, data:CompanyUpdateInput!): Company
     removeCompany(code:Int!): Company,
     createPerson(data: PersonInput!): Person!,
     updatePerson(code:Int!, data:PersonInput!): Person!,
     removePerson(code:Int!): Person,
     createUser(data:UserInput):User,
     updateUser(code:Int!, data:UserInput):User,
     removeUser(code:Int!):User,
     createClass(data:TrainingClassInput):TrainingClass,
     updateClass(code:Int!, data:TrainingClassInput):TrainingClass,
     removeClass(code:Int!):TrainingClass,
     createTraining(data:TrainingInput):TrainingType,
     updateTraining(code:Int!, data:TrainingInput):TrainingType,
     removeTraining(code:Int!):TrainingType,
     addLessonTraining(code:Int!, data:LessonInputType):TrainingType
     updateLessonTraining(lessonCode:Int!, data:LessonInputType):TrainingType
     removeLessonTraining(code:Int!):TrainingType,
     createTicket(data:TicketInputType):TicketType,
     updateTicket(code:Int!, data:UpdateInputType):TicketType,
    }
`