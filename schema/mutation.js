const graphql = require('graphql');
const {
  GraphQLObjectType
} = graphql;
const memberMutation = require('./mutation/member_mutation')
const songMutation = require('./mutation/song_mutation');

const mutation = new GraphQLObjectType({
  name:"Mutation",
  fields:{
    ...memberMutation,
    ...songMutation
  }
})


module.exports = mutation
