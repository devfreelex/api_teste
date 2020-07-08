const { gql } = require('apollo-server')

module.exports = gql`
    type TrainingClass {
        code: Int!
        companyCode: Int!
        trainingCode:Int!
        tutorCode:Int!
        title: String!
        description: String!
        createAt:String!
        updateAt:String!
    }

    input TrainingClassInput {
        companyCode:Int!
        trainingCode:Int!
        tutorCode:Int!
        title: String!
        description: String!
    }

    input TrainingClassInputFilter {
        code: Int
        tutorCode:Int
    }

`