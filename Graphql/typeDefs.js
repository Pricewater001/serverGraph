const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getUsers: [User]
    getCars: [Car]
  }

  type User {
    age: Int
    id: Int
  }

  type Car {
    date: Int
    name: String
  }
`;

module.exports = { typeDefs };
