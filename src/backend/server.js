const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require('./generated/prisma-client')

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

// 3
const server = new GraphQLServer({
  typeDefs: './src/backend/schema.graphql',
  resolvers,
  context: {prisma}
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
