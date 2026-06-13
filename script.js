let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  alert(name + " added!");
}

function openCart() {
  document.getElementById("cart").style.display = "block";
  displayCart();
}

function displayCart() {
  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - ₹" + item.price;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function checkout() {
  document.getElementById("payment").style.display = "block";
  document.getElementById("pay-total").innerText = total;
}

function confirmOrder() {
  alert("✅ Order Placed Successfully!");
}

function scrollToProducts(){
  document.getElementById("products").scrollIntoView();
}