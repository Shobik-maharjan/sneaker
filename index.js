bars.addEventListener("click", function () {
  document.getElementById("bars").classList.toggle("change");
  document.querySelector("#menus").classList.toggle("menus");
  document.querySelector("#cart").classList.remove("cart-show");
});

function cart() {
  document.getElementById("cart").classList.toggle("cart-show");
}

function buttonPlus() {
  let quantity = document.querySelector("#quantity").value;
  quantity++;
  document.querySelector("#quantity").value = quantity;
}

function buttonMinus() {
  let quantity = document.querySelector("#quantity").value;
  if (quantity <= 0) {
    return;
  } else {
    quantity--;
    document.querySelector("#quantity").value = quantity;
  }
}

let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("product-image");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
