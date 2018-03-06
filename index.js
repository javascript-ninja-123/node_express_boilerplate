const express = require('express');
const app = express();



//middleware
require('./config/middleware')(app);



//route
app.use(require('./route/main'))

app.listen(4000,() => {
  console.log('booted up')
})
