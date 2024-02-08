function solve() {
  const products = [
    { name: "Bread", price: 0.8 },
    { name: "Milk", price: 1.09 },
    { name: "Tomatoes", price: 0.99 },
  ];

  const cart = [];
  let checkoutClicked = false;

  const cartTextArea = document.querySelector("textarea");
  const addButtons = Array.from(document.querySelectorAll(".add-product"));
  const checkoutButton = document.querySelector(".checkout");

  addButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (!checkoutClicked) {
        addToCart(products[index].name, products[index].price);
      }
    });
  });

  checkoutButton.addEventListener("click", function () {
    if (!checkoutClicked) {
      checkoutClicked = true;
      checkout();
    }
  });

  function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartTextArea.value += `Added ${productName} for ${productPrice.toFixed(
      2
    )} to the cart.\n`;
  }

  function checkout() {
    const uniqueProducts = [...new Set(cart.map((item) => item.name))];
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    cartTextArea.value += `You bought ${uniqueProducts.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;
    disableButtons();
  }

  function disableButtons() {
    addButtons.forEach((button) => {
      button.disabled = true;
    });
    checkoutButton.disabled = true;
  }
}
