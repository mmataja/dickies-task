const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');

const { routes } = require('./api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes());

http.createServer(app).listen(3000, () => {
  console.log('Api listening on port 3000');
})
