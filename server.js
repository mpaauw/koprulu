var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Planet = require('./src/api/models/planet'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/koprulu');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./src/api/routes/planetsRoutes');
routes(app);

app.listen(port);

console.log('Koprulu API started on port: ' + port);