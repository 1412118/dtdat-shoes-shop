require('dotenv').config();

var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = 5000;
mongoose.connect(process.env.MONGO_URL);

app.set('view engine', 'ejs');
app.set('views', './views');

var homeRoute = require('./routes/home.route');
var productRoute = require('./routes/product.route')

app.use(express.static('public'));

app.use('/', homeRoute);
app.use('/products', productRoute);

app.listen(port, function(){
	console.log('Server listening on port ' + port);
});