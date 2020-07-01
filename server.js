require('dotenv').config()
const { ApolloServer } = require('apollo-server')

const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers')
const db = require('./database/models')

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: ({req}) => {
        return {
            req, db
        }
    }
});

server.listen({ port: 5200 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});