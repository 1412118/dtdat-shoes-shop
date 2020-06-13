var express = require('express');
var router = express.Router();

var controller = require('../controllers/product.controller');

router.get('/:cat_id', controller.index);
router.get('/:cat_id/:prod_id')

module.exports = router;