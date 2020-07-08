const { gql } = require('apollo-server')

module.exports = gql`
    type Company {
        code: Int!
        company: String!
        trade:String!,
        cnpj:String!,
        matrix: Int
    }

    input CompanyFilterInput {
        code: Int
        cnpj: String
        matrixCode:Int
    }


    input CompanyUpdateInput {
        company: String
        trade:String,
        matrix: Int
    }

    input CompanyRegisterInput {
        company: String!
        trade:String!,
        cnpj:String!,
        matrix: Int
    }

`