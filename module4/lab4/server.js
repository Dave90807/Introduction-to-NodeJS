let express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    errorhandler = require('errorhandler');

// Load the accounts methods
let account = require('./routes/accounts');

let app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());


app.get('/accounts', account.get);
app.post('/accounts', account.post);
app.put('/accounts/:id', account.put);
app.delete('/accounts/:id', account.delete);

let server = app.listen(8080, () => {
  let port = server.address().port;
  console.log('Server listening on port %s', port);
});

console.log('End');

/*
curl "http://localhost:8080/accounts"
curl -H "Content-Type: application/json" -X POST -d '{"balance": "1000", "name": "savings"}' "http://localhost:8080/accounts"
curl -H "Content-Type: application/json" -X PUT -d '{"balance": "1500"}' "http://localhost:8080/accounts/5a66026f8b6e111799c75d87"
curl -X DELETE "http://localhost:8080/accounts/5a66017b681c5a176a444a03"
*/