const socket = io();

const productlist = document.getElementById("productList");
const productdesc = document.getElementById("productdesc");
const createProductbtn = document.getElementById("createproductbtn");

createProductbtn.addEventListener("click", () => {
  socket.emit("newProduct", { desc: productdesc.value });
  productdesc.value = "";
});

socket.on("listUpdated", ({ products }) => {
  productlist.innerHTML = "";
  products.forEach((product) => {
    productlist.innerHTML += `
        <div>
        <h3>${product._id} - ${product.desc}</h3>
        <button onclick="deleteProduct('${product._id}')">delete</button>
    </div>
        `;
  });
});

function deleteProduct(id) {
  socket.emit("deleteProduct", { id: id });
}
