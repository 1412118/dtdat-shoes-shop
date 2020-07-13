var Product = require('../models/product.model');

module.exports.index = async function(req, res){
	var cat_id = req.params.cat_id;
	var products = await Product.find({
		cat_id: cat_id
	});
	res.render('products/index', {
		products: products
	});
}