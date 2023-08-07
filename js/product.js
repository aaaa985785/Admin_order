const add = document.querySelector(".add");
const addNewProducts = document.querySelector(".addNewProducts");
const addNewProduct = document.querySelector(".addNewProduct");
const close = document.querySelector(".addNewProduct .hand svg");

add.addEventListener("click", function () {
  addNewProducts.style.display = "block";
  addNewProduct.style.display = "block";
});

close.addEventListener("click", function () {
  addNewProducts.style.display = "none";
  addNewProduct.style.display = "none";
});
