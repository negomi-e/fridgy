const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/fridgy', { useNewUrlParser: true });

const fridgeitems = require('../models/products');

const entries = [
    {
      userID: '5ebe5eb65b26c1cd703802d0',
      label: "Salsify Taro Catsear Garlic",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-15")
    },
    { 
      userID: '5ebe5eb65b26c1cd703802d0',
      label: "Kohlrabi Radish Okra Azuki",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-20")
    },
    {
      userID: '5ebe5eb65b26c1cd703802d0',
      label: "Lotus Root Water Spinach",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-30")
    },
    {
      userID: '5ebe5eb65b26c1cd703802d0',
      label: "Bean Swiss Chard Seakale",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-21")
    },
    {
      userID: '5ebe5eb65b26c1cd703802d0',
      label: "Magis Kohlrabi Welsh Onion",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: new Date("2020-06-15")
    },
    {
      userID: '5ebe5eb65b26c1cd703802d0',
      label: "Parsley Shallot Courgette Tatsoi",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-15")
    },
    {
      userID: '5ebe5eb65b26c1cd703802d0',
      label: "Bean Mustard Tigernut",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-19")
    },
    {
      userID: '5ebe7c2db733dce104514873',
      label: "Aubergine Spring Onion",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-18")
    },
    {
      userID: '5ebe7c2db733dce104514873',
      label: "Chicory Celtuce Parsley",
      category: "Vegetable",
      quantity: '1000g',
      shoppingList: true,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-28")
    },
    {
      userID: '5ebe7c2db733dce104514873',
      label: "Coriander Yarrow Sweet Pepper",
      category: "Vegetable",
      quantity: '5',
      shoppingList: true,
      dateBought: new Date(), 
      expiryDate: new Date("2020-05-16")
    }
  ];
  
  
  fridgeitems.insertMany(entries).then(() => {
    mongoose.connection.close();
  });