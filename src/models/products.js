const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  desc: {
    type: String,
  },
});

const ProductsModel = mongoose.model("products", productScheme);

module.exports = ProductsModel;
