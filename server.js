// EXTERNAL MODULES //
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var Organization = require('./server/controllers/Organization');
// EXPRESS //
var app = express();

app.use(express.static(__dirname + '/public', { redirect: false }));
app.use(bodyParser.json());
app.use(cors());


app.post(       '/add',       Organization.create);
app.get( '/current', Organization.read);


// CONNECTIONS //
var mongoURI = 'mongodb://localhost:27017/tumble'
// var mongoURI = process.env.MONGOLAB_URI;
var port = process.env.PORT || 9999;


mongoose.set('debug', true);
mongoose.connect(mongoURI);
mongoose.connection.once('open', function() {
  console.log('Connected to Mongo DB at', mongoURI);
});

app.listen(port, function() {
  console.log('Listening on port '+ port);
});
