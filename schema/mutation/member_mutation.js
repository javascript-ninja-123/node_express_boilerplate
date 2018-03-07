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
const memberType = require('../memberType');



const memberMutation = {
  addMember:{
    type:memberType,
    args:{
      name:{type:GraphQLString},
      nickname:{type:GraphQLString},
      joined:{type:GraphQLInt},
      crew:{type:GraphQLString},
      salary:{type:GraphQLString}
    },
    resolve(parentValue,args){
      return axios({
        method:'post',
        url:'http://localhost:4000/member',
        data:args
      })
    }
  },
  deleteMember:{
    type:memberType,
    args:{
      id:{type:new GraphQLNonNull(GraphQLString)}
    },
    resolve(parentValue,{id}){
      return axios({
        method:'delete',
        url:`http://localhost:4000/member/${id}`
      })
    }
  },
  updateMember:{
    type:memberType,
    args:{
        id:{type:new GraphQLNonNull(GraphQLString)},
        name:{type:GraphQLString},
        nickname:{type:GraphQLString},
        joined:{type:GraphQLInt},
        crew:{type:GraphQLString},
        salary:{type:GraphQLInt}
    },
    resolve(parentValue,args){

      const newArgs = Object.keys(args).reduce((acc,val) => {
        if(val !== 'id'){
          acc[val] = args[val]
          return acc;
        }
        return acc;
      },{});
      return axios(
        {
          method:'patch',
          url:`http://localhost:4000/member/${args.id}`,
          data:newArgs
        }
      )
    }
  }
}


module.exports = memberMutation;
