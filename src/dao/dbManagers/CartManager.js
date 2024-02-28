const CartsModel = require("../../models/carts");

class CartManager {
  async getCarts() {
    const carts = await CartsModel.find().lean();
    return carts;
  }

  async getCartById(id) {
    const cart = await CartsModel.find({ _id: id }).lean();
    return cart[0];
  }

  async createCart() {
    const cart = {products: []};
    await CartsModel.create(cart);
  }

  async updateCart(cartId, productId) {
    const cart = await this.getCartById(cartId);

    const index = cart.products.findIndex((p) => p.product == productId);
    if (index >= 0) {
      cart.products[index].quantity += 1;
    } else {
      cart.products.push({ product: productId, quantity: 1 });
    }

    await CartsModel.updateOne({ _id: cartId }, cart);
  }
}

module.exports = CartManager;
