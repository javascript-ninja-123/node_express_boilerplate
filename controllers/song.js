const { Pool } = require('pg');
const {DATABASE_CONFIG} =require('../config/secret');

const pool = new Pool(DATABASE_CONFIG);



const postSong = (req,res,next) => {
  try{
    const {rapper,title, createdAt} = req.body;
    pool.query('INSERT INTO song(rapper,title, createdAt)  VALUES($1, $2, $3)',
    [rapper,title, createdAt]
  )
  .then(() => res.send(req.body))
  .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}

const getSongs = (req,res,next) => {
  try{
    pool.query("SELECT * FROM song")
    .then(({rows}) => res.send(rows))
    .catch(err => next(err));
  }
  catch(err){
    next(err)
  }
};

const getSong = (req,res,next) => {
  try{
      const {id} = req.params;
      pool.query(`SELECT * FROM member WHERE id = $1`,[id])
      .then(({rows}) => res.send(rows[0]))
      .catch(err => next(err))
  }
  catch(err){
    next(err)
  }
}


module.exports = {
  postSong,
  getSongs,
  getSong
}
