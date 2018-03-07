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



const memberType = new GraphQLObjectType({
  name:"Member",
  fields:() => (
    {
      id:{type:GraphQLString},
      name:{type:GraphQLString},
      nickname:{type:GraphQLString},
      joined:{type:GraphQLInt},
      crew:{type:GraphQLString},
      salary:{type: GraphQLInt},
      song:{
        type:new GraphQLList(require('./songType')),
        resolve(parentValue,args){
          return axios.get('http://localhost:4000/song')
          .then(({data}) => {
            return data.reduce((acc,val) => {
              if(val.rapper === parentValue.nickname){
                acc.push(val);
                return acc;
              }
              return acc;
            },[])
          })
        }
      }
    }
  )
})

module.exports = memberType
