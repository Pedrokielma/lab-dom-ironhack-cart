// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const price = product.querySelector(".price span");

  const quantity = product.querySelector(".quantity input");

  let subTotal = Number(quantity.value) * Number(price.innerHTML);

  product.querySelector(".subtotal span").innerHTML = subTotal;

  return subTotal;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const products = document.querySelectorAll(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += updateSubtotal(products[i]);
  }

  document.querySelector("#total-value span").innerHTML = total;

  // ITERATION 3
  //... your code goes here
}
let trTag = document.querySelector("tr")
console.log(trTag);
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here

  let parent = document.querySelector("tbody");
  let trTag = document.querySelector("tr")
  parent.removeChild(trTag);


}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  let btnRemove = document.querySelectorAll(".btn-remove");

  for (let i = 0; i < btnRemove.length; i++) {
    btnRemove[i].addEventListener("click", removeProduct);
    // btnRemove[i].onclick = function (event) {
    //   target.removeChild(paragraph)
  }

  //... your code goes here
});
