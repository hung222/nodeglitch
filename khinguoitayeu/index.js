const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
  res.render('template');
});

app.listen(8080, function() {
  console.log('Server listening on port 8080');
});