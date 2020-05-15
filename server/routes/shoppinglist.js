const express = require('express')
const route = express.Router()
// const Product = require('.././products')

//SHOPPINGLIST PAGE

//1. render shopping list
//2. edit shopping list
//3. add product to shopping list

route.get('/', function (req, res, next) {
    res.json();
  });
  

module.exports = route