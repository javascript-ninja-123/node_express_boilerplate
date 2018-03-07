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
const songType = require('../songType');



const songMutation ={
  addSong:{
    type:songType,
    args:{
      title:{type:GraphQLString},
      rapper:{type:GraphQLString},
      createdAt:{type:GraphQLInt}
    },
    resolve(parentValue,args){
      return axios({
        method:'post',
        url:'http://localhost:4000/song',
        data:args
      })
      .then(({data}) => data)
    }
  }
};


module.exports = songMutation;
