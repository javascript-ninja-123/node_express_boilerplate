const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = graphql;
const axios = require('axios');
const memberType = require('./memberType');



const songType = new GraphQLObjectType({
  name:"Song",
  description:"A ele of song",
  fields:() => ({
    title:{type:GraphQLString },
    rapper:{type: GraphQLString},
    createdAt:{type: GraphQLInt},
    member:{
      type:memberType,
      resolve(){
        return axios.get('http://localhost:4000/member')
        .then(({data}) => {
          return data.reduce((acc,val) => {
            if(val.nickname === parentValue.rapper){
              acc = val;
              return acc
            }
            return acc;
          },{})
        })
      }
    }
  })
})

module.exports = songType
