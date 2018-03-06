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

const monsterType = new GraphQLObjectType({
  name:'Monster',
  fields:() => ({
    id:{type:GraphQLString},
    name:{type:GraphQLString},
    personality:{type:GraphQLString},
    habitat:{
      type:habitatType,
      resolve(parentValue,args){
        return axios.get('http://localhost:4000/lives/habitat')
        .then(({data}) => {
          const filtered =  data.filter(value => value.monster === parentValue.name)
          return filtered[0]
        })
      }
    }
  })
})


module.exports = monsterType
