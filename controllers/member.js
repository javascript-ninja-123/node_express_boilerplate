const { Pool } = require('pg');
const {DATABASE_CONFIG} =require('../config/secret');

const pool = new Pool(DATABASE_CONFIG);



const addMember = (req,res,next) => {
  try{
    const {name,nickname, joined, crew, salary} = req.body;
    pool.query('INSERT INTO member(name,nickname, joined, crew, salary)  VALUES($1, $2, $3, $4, $5)',
    [name,nickname,joined,crew,salary]
    )
    .then(() => res.send(req.body))
    .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
};


const getMembers = (req,res,next) => {
  try{
    pool.query('SELECT * FROM member ORDER BY id ASC')
    .then(({rows})=> res.send(rows))
    .catch(err => next(err))
  }
  catch(err){
    next(err);
  }
}

const getMember = (req,res,next) => {
  try{
    const {id} = req.params;
    pool.query(`SELECT * FROM member WHERE id = $1`,[id])
    .then(({rows}) => res.send(rows[0]))
    .catch(err => next(err))
  }
  catch(err){
    next(err);
  }
}

const deleteMember = (req,res,next) => {
  try{
    const {id} = req.params;
    pool.query('DELETE FROM member WHERE id = $1', [id])
    .then(() => res.send({message:'deleted'}))
    .catch(err => next(err));
  }
  catch(err){
    next(err)
  }
}

const updateMember = (req,res,next) => {
  try{
    const {id} = req.params;
    Object.keys(req.body).forEach(value => {
        pool.query(
          `UPDATE member SET ${value}=($1) WHERE id=($2)`,
          [req.body[value],id]
        )
        .then(() => res.send(req.body))
        .catch(err => next(err))
    })
  }
  catch(err){
    next(err);
  }
}





module.exports = {
  addMember,
  getMembers,
  getMember,
  deleteMember,
  updateMember
}
