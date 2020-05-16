(async function fillDatabase() {
  const mongoose = require('mongoose')
  const User = require('../models/User')
  const connectionAddress = "mongodb+srv://user:8905321Ex@@fridge-nis7g.mongodb.net/fridgy?retryWrites=true&w=majority";
  mongoose.connect(connectionAddress, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connections;
  db.concat('error', console.error.bind(console, 'Error with MongoDB: '));

  const task1 = await new User({
    firstName: 'Alex',
    lastName: 'Ivanov',
    pass: '12345',
    email: 'alex@ya.ru',
  }).save()

  mongoose.disconnect();
})();
