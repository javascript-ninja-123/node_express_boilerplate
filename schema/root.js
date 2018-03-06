const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;
const axios = require('axios');
const habitatType = require('./HabitatType');
const monsterType = require('./monsterType');

const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields:() => ({
    habitat:{
      type:habitatType,
      args:{id:{type:new GraphQLNonNull(GraphQLString)}},
      resolve(parentValue,args){
        return axios.get(`http://localhost:4000/habitats/${args.id}`)
        .then(({data}) => data)
      }
    },
    monster:{
      type:monsterType,
      args:{id:{type:new GraphQLNonNull(GraphQLString)}},
      resolve(parentValue,args){
        return axios.get(`http://localhost:4000/monsters/${args.id}`)
        .then(({data}) => data)
      }
    },
    monsters:{
      type:new GraphQLList(require('./monsterType')),
      resolve(parentValue,{id}){
        return axios.get(`http://localhost:4000/monsters`)
        .then(({data}) => data)
      }
    },
    habitats:{
      type:new GraphQLList(require('./HabitatType')),
      resolve(parentValue,args){
        return axios.get('http://localhost:4000/habitats')
        .then(({data}) => data)
      }
    }
  })
});

module.exports = RootQuery
