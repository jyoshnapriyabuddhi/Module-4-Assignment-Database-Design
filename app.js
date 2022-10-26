const express = require('express');
const morgan = require('morgan');

const loanRouter = require('./routes/loanRoutes');
const customerRouter = require('./routes/customerRoutes')
const loanledgerRouter = require('./routes/loanledgerRoutes')

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


app.use('/api/v1/loan', loanRouter);
app.use('/api/v1/customer', customerRouter)
app.use('/api/v1/loanledger', loanledgerRouter)

module.exports = app;
