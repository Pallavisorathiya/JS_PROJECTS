let formSection = document.getElementById("product-form");
let banner = document.getElementById("productList");
let cartSidebar = document.getElementById("cartSidebar");
let cartCount = document.getElementById("cart-count");
let onlineInput = document.getElementById("onlineInput");
let offlineInput = document.getElementById("offlineInput");
let cartItems = document.getElementById("cartItems");

function showForm() {
  formSection.style.display = "block";
  banner.style.display = "none";
}
let imageOptions = document.getElementsByName("imageType");
for (let i = 0; i < imageOptions.length; i++) {
  imageOptions[i].addEventListener("change", function () {
    if (this.value === "online") {
      onlineInput.classList.remove("d-none");
      offlineInput.classList.add("d-none");
    } else {
      onlineInput.classList.add("d-none");
      offlineInput.classList.remove("d-none");
    }
  });
}

let form = document.getElementById("addProductForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("productName").value;
  let desc = document.getElementById("productDesc").value;
  let price = document.getElementById("productPrice").value;
  let imageType = document.querySelector('input[name="imageType"]:checked').value;

  if (imageType === "online") {
    let imageUrl = document.getElementById("productImageURL").value;
    saveProduct(name, desc, price, imageUrl);
  } else {
    let fileInput = document.getElementById("productImageFile");
    let file = fileInput.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onload = function () {
        saveProduct(name, desc, price, reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
});

function saveProduct(name, desc, price, image) {
  let product = {
    name: name,
    desc: desc,
    price: price,
    image: image
  };

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  console.log("Product added:", product);
  console.log("All products:", products);
  document.getElementById("addProductForm").reset();
  formSection.style.display = "none";
  banner.style.display = "flex";
  renderProducts();
}
function renderProducts() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  banner.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    let p = products[i];

    let div = document.createElement("div");
    div.className = "product-card";

    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}" />
      <div class="product-info">
        <h4>${p.name}</h4>
        <p>${p.desc}</p>
        <strong>${p.price}₹</strong><br/>
        <button class="btn btn-sm btn-primary-custom mt-2" onclick="addToCart(${i})">
          <i class="bi bi-cart-plus"></i> Add to Cart
        </button>
      </div>
    `;
banner.appendChild(div);
  }
console.log("Add products:", products);
}

function addToCart(index) {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("Added to cart:", products[index]);
  console.log("Cart now:", cart);

  updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartCount.innerText = cart.length;
}
function toggleCart() {
  cartSidebar.classList.add("active");
  renderCart();
}
function closeCart() {
  cartSidebar.classList.remove("active");
}
function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.innerHTML = "";

  for (let i = 0; i < cart.length; i++) {
    let c = cart[i];

    let div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <div class="d-flex align-items-center">
        <img src="${c.image}" alt="${c.name}" />
        <div>
          <strong>${c.name}</strong><br/>
          <small>${c.price}₹</small>
        </div>
      </div>
      <button class="btn btn-sm btn-danger ms-2" onclick="removeCart(${i})">
        <i class="bi bi-trash"></i>
      </button>
    `;
cartItems.appendChild(div);
  }
console.log("Product cart:", cart);
}
function removeCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let removed = cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));

  console.log("Removed from cart:", removed[0]);
  console.log("Cart now:", cart);
renderCart();
updateCartCount();
}
renderProducts();
updateCartCount();
