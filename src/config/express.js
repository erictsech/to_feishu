const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
//const passport = require('passport');
//const routes = require('../api/routes/v1');
const { logs } = require('./vars');
//const strategies = require('./passport');
const error = require('../api/middlewares/error');
//const {mysqltest} = require('../mysql.js');

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(logs));

// parse body params and attache them to req.body
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use("/sqlconn",mysqltest);
app.get("/a2p", (req, res) => {
    //const {username,password} = req.body
    res.send(JSON.stringify("abc"))
    console.log(req.body)
  });


// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
