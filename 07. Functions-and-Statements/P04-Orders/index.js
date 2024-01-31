function order(product, num) {
  const productPrices = {
    coffee: 1.5,
    water: 1.0,
    coke: 1.4,
    snacks: 2.0,
  };

  const calculatePrice = (price, num) => {
    return price * num;
  };

  if (product in productPrices) {
    const price = productPrices[product];
    const totalPrice = calculatePrice(price, num);
    console.log(totalPrice.toFixed(2));
  }
}
