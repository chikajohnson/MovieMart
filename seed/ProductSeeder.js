var Product = require("../models/product");
var mongoose = require("mongoose");
var productList = require('../seed/product.json');

mongoose.connect('mongodb://localhost/nollymart',(err) => {
  if (err) {
    console.log("Error occured while connecting to mongodb");
  }
  else{
    console.log("Connecting to mongodb")
  }
});

Product.insertMany(productList)
    .then(function (docs) {
        console.log(docs);
    })
    .catch(function (err) {
        console.log(err);
    });

mongoose.disconnect();


