const graphql = require('graphql');
const {
  GraphQLSchema
} = require('graphql');



module.exports = new GraphQLSchema({
  query:require('./root'),
  mutation:require('./mutation')
});
