const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    default: "N/A",
  },
  stock: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
});

const ProductsModel = mongoose.model("products", productScheme);

module.exports = ProductsModel;
