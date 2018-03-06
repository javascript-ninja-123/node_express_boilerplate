const { Pool } = require('pg');
const {DATABASE_CONFIG} =require('../config/secret');

const pool = new Pool(DATABASE_CONFIG);


const getMonsters = (req,res,next) => {
  try{
    pool.query('SELECT * FROM monsters ORDER BY id ASC')
    .then(({rows}) => res.send(rows))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}

const getMonsterById = (req,res,next) => {
  try{
    const {id} = req.params;
    pool.query('SELECT * FROM monsters WHERE id = $1', [id])
    .then(({rows}) => res.send(rows[0]))
    .catch((err) => next(err))
  }
  catch(err){
    next(err);
  }
}

const postMonster = (req,res,next) => {
  try{
    const {name,personality} = req.body;
    pool.query(
    'INSERT INTO monsters(name, personality) VALUES($1, $2)',
    [name,personality]
    )
    .then(() => res.send({message:"success"}))
    .catch(err => next(err))
  }
  catch(err){
    next(err);
  }
}

const updateMonster = (req,res,next) => {
  try{
    const {id} = req.params;
    const {name,personality} = req.body;
    Object.keys(req.body).forEach(value => {
        pool.query(
          `UPDATE monsters SET ${value}=($1) WHERE id=($2)`,
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

const deleteMonster = (req,res,next) => {
  try{
    const {id} = req.params;
    pool.query('DELETE FROM monsters WHERE id=($1)',[1])
    .then(() => res.send({message:'deleted'}))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}


module.exports = {
  getMonsters,
  getMonsterById,
  postMonster,
  updateMonster,
  deleteMonster
}
