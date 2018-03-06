const { Pool } = require('pg');
const {DATABASE_CONFIG} =require('../config/secret');

const pool = new Pool(DATABASE_CONFIG);



const postHabitat = (req,res,next) => {
  try{
    const {name,climate,temperature} = req.body;
    pool.query(
      'INSERT INTO habitats(name, climate, temperature) VALUES($1, $2, $3)',
       [name,climate,temperature]
    )
    .then(() => res.send({message:'posted'}))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}

const getHabitats = (req,res,next) => {
  try{
    pool.query('SELECT * FROM habitats ORDER BY id ASC')
    .then(({rows}) => res.send(rows))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}

const getHabitat = (req,res,next) => {
  try{
    const {id} = req.params;
    pool.query(
      'SELECT * FROM habitats WHERE id = $1',
      [id]
    )
    .then(({rows}) => res.send(rows[0]))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}

const updateHabitat = (req,res,next) => {
  try{
    const {id} = req.params;
    Object.keys(req.body).forEach(value => {
      pool.query(
        `UPDATE habitats SET ${value}=($1) WHERE id=($2)`,
        [req.body[value],id]
      )
      .then(() => res.send({message:'updated'}))
      .catch(err => next(err))
    })
  }
  catch(err){
    next(err);
  }
}


const deleteHabitat = (req,res,next) => {
  try{
    const {id} = req.params;
    pool.query('DELETE FROM habitats WHERE id=($1)',[id])
    .then(() => res.send({message:"deleted"}))
    .catch(err => next(err))
  }
  catch(err){
    next(err);
  }
}


module.exports = {
  postHabitat,
  getHabitats,
  getHabitat,
  updateHabitat,
  deleteHabitat
}
