require('dotenv').config();

var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = 3000;
mongoose.connect(process.env.MONGO_URL);

app.set('view engine', 'ejs');
app.set('views', './views');

var homeRoute = require('./routes/home.route')

app.use(express.static('public'));

app.get('/', homeRoute);

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});