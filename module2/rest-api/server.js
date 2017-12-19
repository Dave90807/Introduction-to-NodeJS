const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

const port = 3000;

let store = {};
store.accounts = [];

let app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

app.get('/accounts', (req, res) => {
  res.status(200).send(store.accounts);
});

app.post('/accounts', (req, res) => {
  console.log(req.body);
  let newAccount = req.body;
  let id = store.accounts.length;
  store.accounts.push(newAccount);
  console.log({id: id});
  res.status(201).send({id: id});
});

app.put('/accounts/:id', (req, res) => {
  console.log(`req.params.id: ${req.params.id}`);
  store.accounts[req.params.id] = req.body;
  res.status(200).send(store.accounts[req.params.id]);
});

app.listen(port);
console.log(`Server running in port ${port}`);
/*

*/