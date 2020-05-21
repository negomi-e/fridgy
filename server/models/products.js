const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  label: String,
  expiryDate: Date,
  category: String,
  dayRemaining: Number,
  // shoppingList: Boolean,
  // UPC: Number,
});

module.exports = mongoose.model("products", productSchema);
