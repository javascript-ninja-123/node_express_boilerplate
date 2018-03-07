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
const memberType = require('./memberType');
const songType = require('./songType');

const RootQuery = new GraphQLObjectType({
  name:'RootQueryType',
  fields:() => ({
    members:{
      type: new GraphQLList(require('./memberType')),
      resolve(parentValue,args){
        return axios.get('http://localhost:4000/member')
        .then(({data}) => data)
      }
    },
    songs:{
      type:new GraphQLList(require('./songType')),
      resolve(parentValue,args){
        return axios.get('http://localhost:4000/song')
        .then(({data}) => data)
      }
    },
    member:{
      type:memberType,
      args:{
        id:{type:new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue,{id}){
        return axios.get(`http://localhost:4000/member/${id}`)
        .then(({data}) => data)
      }
    },
    song:{
      type:songType,
      args:{
        id:{type:new GraphQLNonNull(GraphQLString)}
      },
      resolve(parentValue,{id}){
        return axios.get(`http://localhost:4000/member/${id}`)
        .then(({data}) => data)
      }
    }
  })
});

module.exports = RootQuery
