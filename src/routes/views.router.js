const { Router } = require("express");
const ProductManager = require("../dao/dbManagers/ProductManager.js");

const productManager = new ProductManager();

const router = Router();

router.get("/", async (req, res) => {
  const products = await productManager.getProducts();
  res.render("home", { products });
});

router.get("/realtimeproducts", async (req, res) => {
  const products = await productManager.getProducts();
  res.render("realtimeproducts", { products });
});

router.get("/chat", (req, res) => {
  res.render("chat", {});
});

module.exports = router;
