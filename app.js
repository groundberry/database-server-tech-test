var express = require('express');
var app = express();

var cache = {};

app.post('/set', function(req, res) {
  var query = req.query;
  Object.keys(query).forEach(function(key) {
    cache[key] = query[key];
  });
  res.status(200).end();
});

app.get('/get', function(req, res) {
  res.send(cache[req.query.key]);
});

app.listen(4000, function () {
  console.log('App listening on port 4000!');
});

module.exports = app;
