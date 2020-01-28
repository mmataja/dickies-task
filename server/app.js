const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');

const { routes } = require('./api');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes());

http.createServer(app).listen(PORT, () => {
  console.log(`Api listening on port ${PORT}`);
})
