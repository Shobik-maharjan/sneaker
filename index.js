menuToggle.addEventListener("click", function () {
  document.getElementById("bars").classList.toggle("change");
  document.querySelector("#menus").classList.toggle("menus");
  document.querySelector("#menu-bars").classList.toggle("displays");
});
// function myFunction() {
//   document.getElementById("menuToggle").classList.toggle("change");
//   //   this.classList.toggle("change");
// }

function selectImage(x) {
  let one = 1;
  let two = 2;
  let three = 3;
  if (x == one) {
    one.document.querySelector(".product-image").src =
      "./images/image-product-2.jpg";
  }
  if (x == two) {
    two.document.querySelector(".product-image").src =
      "./images/image-product-3.jpg";
  }
  if (x == three) {
    three.document.querySelector(".product-image").src =
      "./images/image-product-4.jpg";
  }
}
