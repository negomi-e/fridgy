const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://user:8905321Ex@@fridge-nis7g.mongodb.net/fridgy?retryWrites=true&w=majority', { useNewUrlParser: true });

const fridgeitems = require('../models/products');

const entries = [
  {
    userID: '5ebee26fa42059e9d04be62e',
    label: 'Banana',
    expiryDate: Date.now(),
    category: 'Fruit',
  },
  {
    userID: '5ebee26fa42059e9d04be62e',
    label: 'Apple',
    expiryDate: Date.now(),
    category: 'Fruit',
  },
  {
    userID: '5ebee26fa42059e9d04be62e',
    label: 'Orange',
    expiryDate: Date.now(),
    category: 'Fruit',
  },
  {
    userID: '5ebee26fa42059e9d04be62e',
    label: 'Chicken',
    expiryDate: Date.now(),
    category: 'Meat',
  },
  {
    userID: '5ebee26fa42059e9d04be62e',
    label: 'Beef',
    expiryDate: Date.now(),
    category: 'Meat',
  },
];


fridgeitems.insertMany(entries).then(() => {
  mongoose.connection.close();
});
