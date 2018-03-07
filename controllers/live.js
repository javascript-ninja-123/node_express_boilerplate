const { Pool } = require('pg');
const {DATABASE_CONFIG} =require('../config/secret');

const pool = new Pool(DATABASE_CONFIG);




const getLives = (req,res,next) => {
  try{
    pool.query('SELECT * FROM lives')
    .then(({rows}) => res.send(rows))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}


const JoinTablesForLives = (req,res,next) => {
  try{
    pool.query('SELECT * FROM lives JOIN habitats ON habitats.name = lives.habitat')
    .then(({rows}) => res.send(rows))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}

const JoinTablesForMonsters = (req,res,next) => {
  try{
    pool.query(
      'SELECT * FROM lives JOIN monsters ON monsters.name = lives.monster'
    )
    .then(({rows}) => res.send(rows))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}





module.exports ={
  getLives,
  JoinTablesForLives,
  JoinTablesForMonsters
}
