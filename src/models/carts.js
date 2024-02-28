const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        product: String,
        quantity: Number,
      },
    ],
    default: [],
  }
});

const CartsModel = mongoose.model("carts", cartSchema);

module.exports = CartsModel;
