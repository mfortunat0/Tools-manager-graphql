const { gql } = require("apollo-server-express");
const typeDefs = gql(`
    type Tools{
        id: ID!
        title: String
        link: String
        description: String
        tags: [String]
    }

    input inputTools{
        title: String
        link: String
        description: String
        tags: [String]
    }

    type Query{
        findAll:[Tools]
        findById(id:ID!):Tools
    }

    type Mutation{
        create(tools:inputTools):String
        updateOne(id:ID,tools:inputTools):String
        deleteOne(id:ID):String
    }
`);

module.exports = typeDefs;
