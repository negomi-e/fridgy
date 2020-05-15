(async function fillDatabase() {
  const mongoose = require('mongoose')
  const User = require('../models/User')
  const connectionAddress = 'mongodb://localhost:27017/fridgy';
  mongoose.connect(connectionAddress, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connections;
  db.concat('error', console.error.bind(console, 'Error with MongoDB: '));

  const task1 = await new User({
    name: 'Alex',
    email: 'Alex@ya.ru',
    pass: '12345',
  }).save()

  mongoose.disconnect();
})();
