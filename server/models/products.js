const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    userID: [{type: Schema.Types.ObjectId, ref: 'Restorans'  }],
    // userID: String,
    label: String,
    dateBought: Date,
    expiryDate: Date,
    UPC: Number,
    category: String,
    quantity: String,
    shoppingList: Boolean,

});

let productModel = mongoose.model("product", productSchema);

module.exports = productModel;