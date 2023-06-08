require("dotenv").config();
const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs } = require("./Graphql/typeDefs");
const { resolvers } = require("./Graphql/resolvers");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const { applyMiddleware } = require("graphql-middleware");
const { connect } = require("./DB/db");
const permissions = require("./Graphql/permissions");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  cors: true,
});

const schemaWithMiddleware = applyMiddleware(schema, permissions);

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({ req }) => {
    const token = req.headers.authorization;
    return {
      token
    };
  },
});

const port = process.env.PORT || 4000;
async function startServer() {
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port }, () => {
    connect();
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
}

startServer().catch((err) => console.error(err));
