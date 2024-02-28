const ProductsModel = require("../../models/products");

class ProductManager {
  async getProducts() {
    const products = await ProductsModel.find().lean();
    return products;
  }

  async getProductById(id) {
    const product = await ProductsModel.find({ _id: id }).lean();
    return product[0];
  }

  async addProduct(product) {
    await ProductsModel.create(product);
  }

  async updateProduct(id, updatedProduct) {
    await ProductsModel.updateOne({ _id: id }, updatedProduct);
  }

  async deleteProduct(id) {
    await ProductsModel.deleteOne({ _id: id });
  }
}

module.exports = ProductManager