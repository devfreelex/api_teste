const { gql } = require('apollo-server')

module.exports = gql`
    type Pupil {
        codigo: Int 
        codigoempresafilial: String 
        descricao: String 
        datanascimento: String 
        sexo: String 
        estadocivil: String 
        datacadastro: String 
        rg: String 
        orgaoemissor: String 
        naturalidade: String 
        nacionalidade: String 
        profissao: String 
        obs: String 
        foto: String 
        suspendercobrancaate: String 
        codigoalunosituacao: String 
        codigopessoa: String    
    }
`