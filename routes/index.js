var express = require('express');
var router = express.Router();
var Product = require("../models/product");
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find((err,docs) => {
    res.render('shop/index', { title: 'Shopping Cart', products: docs });
  });
  
});

/* GET SignUp page. */
router.get('/user/signup', csrfProtection,function(req, res, next) {
 res.render('user/signup', {csrfToken: req.csrfToken()})
});

/* POST SignUp page. */
router.post('/user/signup', csrfProtection,function(req, res, next) {
  res.redirect('/');
 });

module.exports = router;
