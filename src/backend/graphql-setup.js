const { GraphQLServerLambda } = require("graphql-yoga");
const { prisma } = require('../generated/prisma-client')

console.log('hello')

const resolvers = {
  Query: {
    users: (root, args, context, info) => {
      return context.prisma.users()
    },
  },
  Mutation: {
    addUser: (root, args, context) => {
      return context.prisma.createUser({
        name: args.name,
        email: args.email,
      })
    },
  },
};

const lambdaServer = new GraphQLServerLambda({
  typeDefs: './src/backend/schema.graphql',
  resolvers,
  context: {prisma}
});

exports.handler = lambdaServer.graphqlHandler;
  // return lambbaServer.playgroundHandler(event, context, callback);
