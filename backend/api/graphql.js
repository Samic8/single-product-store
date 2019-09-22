import { ApolloServer } from 'apollo-server-lambda';
import { resolvers } from '../resolvers';
import typeDefs from '../schema.graphql';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // TODO hook these up to env variables, We want them to be false for production.
  playground: true,
  introspection: true,
});

const handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
  },
})

export { handler }
