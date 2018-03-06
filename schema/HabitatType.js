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


const HabitatType = new GraphQLObjectType({
  name:'Habitat',
  fields:() => ({
    id:{type:GraphQLString},
    name:{type:GraphQLString},
    climate:{type:GraphQLString},
    temperature:{type:GraphQLInt},
    monsters:{
      type:new GraphQLList(require('./monsterType')),
      resolve(parentValue,args){
        return axios.get(`http://localhost:4000/lives/monster`)
        .then(({data}) => {
          return data.filter(value => value.habitat === parentValue.name)
        })
      }
    }
  })
})


module.exports = HabitatType
