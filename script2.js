function checkout() {
  if (
    confirm(
      `Please confirm your order of $${
        totalPrice > 1000
          ? ${totalPrice.toFixed(2)}
          : ${(totalPrice * 1.1).toFixed(2)}
      } by clicking 'OK' before proceeding.`
    )
  ) {
    alert(
      "Thank you for confirming your order. Your purchase is being processed and will be shipped to you as soon as possible. Thank you for shopping with us!"
    );
  } else {
    alert(
      "Your order has not been confirmed. You can continue to make changes to your order before confirming."
    );
  }
}

function emptyCart() {
  basket = [];
  updateBasket();
}

function setMaximumCardNumber(id) {
  var el = document.getElementById(id);
  if (el.value > 9999) {
    el.value = el.value.substring(0, 4);
  } else if (el.value < 0) {
    el.value = 0;
  }
}

function addProduct(product) {
  var productEl = document.createElement("div");
  productEl.className = "product-card";

  var productPageA = document.createElement("a");
  productPageA.href = "imgs\\product" + product.id;
  productPageA.target = "_blank";
  productEl.appendChild(productPageA);

  // Add the product image
  var imageEl = document.createElement("img");
  imageEl.src = "imgs\\product" + product.id + "\\img0.jpg";
  imageEl.alt = "product image";
  productPageA.appendChild(imageEl);

  // Add the product name
  var nameEl = document.createElement("h3");
  nameEl.textContent = product.name;
  productEl.appendChild(nameEl);

  var defOpt = product.options[product.selectedOption];
  // Add the product description
  var descriptionEl = document.createElement("p");
  descriptionEl.className = "product-description";
  descriptionEl.innerHTML = defOpt.description;
  productEl.appendChild(descriptionEl);

  // Add the options dropdown
  var selectEl = document.createElement("select");
  selectEl.className = "product-options";
  selectEl.title = "Please select a size";
  selectEl.addEventListener("change", () => updateProduct(productEl, product));
  product.options.forEach((option) => {
    var optionEl = document.createElement("option");
    optionEl.value = option.id;
    optionEl.textContent = option.text;
    optionEl.selected = defOpt.id === option.id;
    selectEl.appendChild(optionEl);
  });
  productEl.appendChild(selectEl);

  // Add a price element
  var priceEl = document.createElement("p");
  var priceElUnit = document.createElement("span");
  priceElUnit.className = "product-priceUnit";
  priceElUnit.textContent = "$";
  priceEl.appendChild(priceElUnit);
  var priceElValue = document.createElement("span");
  priceElValue.className = "product-priceVal";
  priceElValue.textContent = defOpt.price;
  priceEl.appendChild(priceElValue);
  productEl.appendChild(priceEl);

  // Add an "Add to Basket" button
  var buttonEl = document.createElement("button");
  buttonEl.textContent = "Add to Basket";
  buttonEl.addEventListener("click", (a) => addToBasket(product));
  productEl.appendChild(buttonEl);

  document.getElementById("products").appendChild(productEl);
}

function updateProduct(productEl, product) {
  var selectedEl = productEl.querySelector(".product-options");
  product.selectedOption = selectedEl.value;
  var currentOption = product.options[product.selectedOption];
  productEl.querySelector(".product-priceVal").textContent =
    currentOption.price;
  productEl.querySelector(".product-description").innerHTML =
    currentOption.description;
}

basket = [];

function addToBasket(product) {
  var found = false;
  for (var i = 0; i < basket.length; i++) {
    const element = basket[i];
    if (
      element.element === product.id &&
      element.option === product.selectedOption
    ) {
      element.count++;
      found = true;
    }
  }
  if (!found) {
    basket.push({
      element: product.id,
      option: product.selectedOption,
      count: 1,
    });
  }
  updateBasket();
}

var totalPrice = 0;

function updateBasket() {
  document.getElementById("btnCheckout").disabled = basket.length <= 0;
  totalPrice = 0;
  var basketEl = document.getElementById("selected-products");
  basketEl.innerHTML = "";

  var listEl = document.createElement("ul");
  basket.forEach((item) => {
    var itemEl = document.createElement("li");
    var product = products[item.element];
    var currOption = product.options[item.option];
    totalPrice += currOption.price * item.count;
    itemEl.textContent = `${product.name} - $${currOption.price.toFixed(2)} (${
      currOption.text
    }) (x${item.count})`;

    var btnRemoveEl = document.createElement("button");
    btnRemoveEl.type = "button";
    btnRemoveEl.addEventListener("click", () => removeFromBasket(item));
    btnRemoveEl.textContent = "x";
    btnRemoveEl.title = "Remove";
    itemEl.appendChild(btnRemoveEl);
    listEl.appendChild(itemEl);
  });
  basketEl.appendChild(listEl);
  document.getElementById("totalPrice").innerHTML =
    totalPrice > 1000
      ? `${totalPrice.toFixed(2)}`
      : `${totalPrice.toFixed(2)} + ${(totalPrice * 0.1).toFixed(
          2
        )} delivery<br />${(totalPrice * 1.1).toFixed(2)}`;
}

function removeFromBasket(item) {
  item.count--;
  if (item.count <= 0) {
    basket.splice(basket.indexOf(item), 1);
  }
  updateBasket();
}

products.forEach(addProduct);
