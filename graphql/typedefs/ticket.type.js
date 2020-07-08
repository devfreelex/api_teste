const { gql } = require('apollo-server')

module.exports = gql`
    type TicketType {
        code:Int!
        emitterCode:Int!
        receiverCode:Int!
        trainingCode:Int!
        classCode:Int!
        lessonCode:Int!
        status:Int!
        messages:[MessageType]
    }

    type MessageType {
        code:Int!
        emitterCode:Int!
        content:String!
        createAt:String!
    }

    input TicketInputType {
        emitterCode:Int!
        receiverCode:Int!
        trainingCode:Int!
        classCode:Int!
        lessonCode:Int!
        message:String!        
    }

    input UpdateInputType {
        status:Int
        message:String
        emitterCode:Int  
    }
   

`