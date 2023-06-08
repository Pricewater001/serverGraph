const { rule, shield, allow } = require('graphql-shield');

const isAuthenticated = rule()((parent, args, { token }) => {
       return token ==1234 ? true : false
});

const permissions = shield({
  Query: {
    getCars: isAuthenticated,
  },
});

module.exports = permissions;
