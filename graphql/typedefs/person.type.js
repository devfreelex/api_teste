const { gql } = require('apollo-server')


module.exports = gql`
type Person { 
    code: Int!
    personalData: PersonalData!
    createAt:String!
    updateAt:String!  
    address: Address!  
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
        address: AddressInput!
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
    note:String    
}

input PersonInputFilter {
    cpf: String
    rg: String  
}
`