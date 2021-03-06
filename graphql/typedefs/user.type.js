const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        code:Int!
        companyCode:Int!
        personCode:Int!
        picture:String
        login:String!
        password:String!
        permissions:[PermissionType!]!
        responsible:Int
        status:Boolean!
        classCode:[Int]!
        updateAt:String!
        createAt:String!

    }

    type PermissionType {
        code: Int!
        type: String!
        label: String!
        level: Int!       
    }

    input UserInput {
        companyCode:Int!
        personCode:Int!
        classCode:[Int!]!    
        picture:String
        login:String!
        password:String!
        permissions:[String!]!
        responsible:Int
        status:Boolean!
    }

    input PermissionInput {
        type: String!          
    }

    input UserInputFilter {
        code: Int
        personCode: Int
        login: String
    }

    input UserLoginInputFilter {
        login:String!
        password:String!
    }
`