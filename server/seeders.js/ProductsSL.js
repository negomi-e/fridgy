(async function fillDatabase() {
  const mongoose = require('mongoose')
  const ProductSL = require('../models/ProductsSL')
  const connectionAddress = "mongodb+srv://user:8905321Ex@@fridge-nis7g.mongodb.net/fridgy?retryWrites=true&w=majority";
  mongoose.connect(connectionAddress, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connections;
  db.concat('error', console.error.bind(console, 'Error with MongoDB: '));

  const task1 = await new ProductSL({
    label: 'Ogurec',
    status: false,
    quantity: 5,
  }).save()

  mongoose.disconnect();
})();
