const { gql } = require('apollo-server')


module.exports = gql`
type Person { 
    code: Int!
    personalData: PersonalData!
    createAt:String!
    updateAt:String!  
    addresses: [Address!]!  
    contacts: [Contact!]!     
 
}

type Contact {
    phone: String!
    email: String!
    principal: Boolean!
}

type Address {
	uf:String!
	city:String!
	street:String!
	number:String!
	zipcode:String!
    principal:Boolean!
    note:String
}

type PersonalData {
        name:String!
        cpf: String!
        rg: String !
        birth:String! 
        gender: String! 
        civilStatus: String! 
        emittingOrgan: String! 
        naturalness: String! 
        nationality: String! 
        ocupation: String!  
}

input PersonInput {
        name:String!
        cpf: String!
        rg: String !
        birth:String! 
        gender: String! 
        civilStatus: String! 
        emittingOrgan: String! 
        naturalness: String! 
        nationality: String! 
        ocupation: String!  
        addresses: [AddressInput!]!
        contacts: [ContactInput!]!
}

input ContactInput {
    phone: String!
    email: String!
    principal: Boolean!
}

input AddressInput {
	uf:String!
	city:String!
	street:String!
	number:String!
	zipcode:String!
    principal:Boolean!
    note:String    
}

input PersonInputFilter {
    code:Int
    cpf: String
    rg: String  
}
`