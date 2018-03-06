const router = require('express').Router();




router.get('/', (req,res) => {
  res.send({message:'yes'})
})




module.exports = router;
