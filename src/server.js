const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

module.exports = app;
