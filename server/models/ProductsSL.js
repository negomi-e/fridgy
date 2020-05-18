const mongoose = require("mongoose")

const product_sl_Schema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  label: String,
  status: Boolean,
  quantity: Number,
});

let productModelSL = mongoose.model("products_sl", product_sl_Schema);

module.exports = productModelSL;
