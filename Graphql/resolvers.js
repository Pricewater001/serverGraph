const { Car } = require("../models/cars");
const { User } = require("../models/users");

const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.find();
      return users;
    },
    getCars: async () => {
      const users = await Car.find();
      return users;
    },
  },
};

module.exports = { resolvers };
