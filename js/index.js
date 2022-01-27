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

  // ITERATION 3
  //... your code goes here

  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here

  let rowToRemove = target.parentNode.parentNode;
  let  parent = rowToRemove.parentNode;
  parent.removeChild(rowToRemove);
}

// ITERATION 5

function createProduct() {

  console.log("epa")
  //... your code goes here
  let newName = document.querySelector(".create-product input")
  let newPrice = document.querySelector('.create-product input[type = "number"')
  let fixedPrice = Number(newPrice.value).toFixed(2)
  let newRow = document.createElement("tr")
  newRow.innerHTML = 
  ` <td class="name">
    <span>${newName.value}</span>
  </td>
  <td class="price">$<span>25.00</span></td>
  <td class="quantity">
    <input type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>${fixedPrice}</span></td>
  <td class="action">
    <button class="btn btn-remove">Remove</button>
  </td>`
  newRow.setAtribute("class", "product")
  let parent = document.querySelector("tbody")
  parent.appendChild(newRow)


  // reset value
  let newName = "";
  let newPrice= 0;

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

  const createButton =  document.getElementById("create")
  createButton.addEventListener("click", createProduct)

  //... your code goes here
});
