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
      expiryDate: 20/05/2020,
    },
    { 
      userID: '5ebe5eb65b26c1cd703802d0',
      label: "Kohlrabi Radish Okra Azuki",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: 18/05/2020
    },
    {
      email: 'Alex@ya.ru',
      label: "Lotus Root Water Spinach",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: 20/05/2020
    },
    {
      email: 'Alex@ya.ru',
      label: "Bean Swiss Chard Seakale",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: 27/05/2020
    },
    {
      email: 'Alex@ya.ru',
      label: "Magis Kohlrabi Welsh Onion",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: 21/05/2020
    },
    {
      email: 'Alex@ya.ru',
      label: "Parsley Shallot Courgette Tatsoi",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: 21/05/2020
    },
    {
      email: 'Alex@ya.ru',
      label: "Bean Mustard Tigernut",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: 23/05/2020
    },
    {
      email: 'Alex@ya.ru',
      label: "Aubergine Spring Onion",
      category: "Vegetable",
      quantity: '100g',
      shoppingList: false,
      dateBought: new Date(), 
      expiryDate: 27/05/2020
    },
    {
      email: 'Alex@ya.ru',
      label: "Chicory Celtuce Parsley",
      category: "Vegetable",
      quantity: '1000g',
      shoppingList: true,
      dateBought: new Date(), 
      expiryDate: 25/05/2020
    },
    {
      email: 'Alex@ya.ru',
      label: "Coriander Yarrow Sweet Pepper",
      category: "Vegetable",
      quantity: '5',
      shoppingList: true,
      dateBought: new Date(), 
      expiryDate: 21/05/2020
    }
  ];
  
  
  fridgeitems.insertMany(entries).then(() => {
    mongoose.connection.close();
  });