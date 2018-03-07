const express = require('express');
const app = express();



//middleware
require('./config/middleware')(app);



//route
app.use('/member', require('./route/member'));
app.use('/song', require('./route/song'));


//router error handling
app.use((err,req,res,next) => {
  if(err) return res.status(422).send({err:err.message})
});


//listening to the server
app.listen(4000,() => {
  console.log('booted up')
})
