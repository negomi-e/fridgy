const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://user:8905321Ex@@fridge-nis7g.mongodb.net/fridgy?retryWrites=true&w=majority', { useNewUrlParser: true });

const fridgeitems = require('../models/products');

const entries = [
  {
    userID: '5ec05dc02da5354202d0e0c9',
    label: 'Pineapple',
    expiryDate: new Date(Date.now() + 7* 60 * 60 * 1000),
    category: 'Fruit',
    dayRemaining: 5,
  },
  {
    userID: '5ec05dc02da5354202d0e0c9',
    label: 'Raspberries',
    expiryDate: new Date(Date.now() + 3* 60 * 60 * 1000),
    category: 'Fruit',
    dayRemaining: 5,
  },
  {
    userID: '5ec05dc02da5354202d0e0c9',
    label: 'Lemon',
    expiryDate: new Date(Date.now() + 1* 60 * 60 * 1000),
    category: 'Fruit',
    dayRemaining: 5,
  },
  {
    userID: '5ec05dc02da5354202d0e0c9',
    label: 'Chicken',
    expiryDate: new Date(Date.now() + 4* 60 * 60 * 1000),
    category: 'Meat',
    dayRemaining: 5,
  },
  {
    userID: '5ec05dc02da5354202d0e0c9',
    label: 'Beef',
    expiryDate: new Date(Date.now() + 5* 60 * 60 * 1000),
    category: 'Meat',
    dayRemaining: 5,
  },
  {
    userID: '5ec05dc02da5354202d0e0c9',
    label: 'Milk',
    expiryDate: new Date(Date.now() + 6* 60 * 60 * 1000),
    category: 'Dairy',
    dayRemaining: 5,
  },
  {
    userID: '5ec05dc02da5354202d0e0c9',
    label: 'Yoghurt',
    expiryDate: new Date(Date.now() + 7* 60 * 60 * 1000),
    category: 'Dairy',
    dayRemaining: 5,
  },
];


fridgeitems.insertMany(entries).then(() => {
  mongoose.connection.close();
});
