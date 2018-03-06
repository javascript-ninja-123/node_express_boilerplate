const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql');
const schema = require('../schema/schema');

module.exports = app => {
    app.use(morgan('dev'));
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/graphql', expressGraphQL({
      schema,
      graphiql: true
    }));
}
