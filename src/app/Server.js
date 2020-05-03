const createError = require('http-errors');
const express = require('express');
const rTracer = require('cls-rtracer');
const logger = require('./config/Logger');
const loginController = require('./controller/UserController');

var app = express();

app.use(rTracer.expressMiddleware())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api',loginController)

app.use(function(req, res, next) {
  logger.error(`Invalid url ${req.url}`)
  next(createError(404));
});

app.use(function(err, req, res, next) {
  logger.error(`Global error handler `,err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send();
});

module.exports = app;
