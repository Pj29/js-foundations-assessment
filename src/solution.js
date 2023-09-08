/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products, name, size) {
  let result = null;
  for (let i=0; i < products.length; i++) {
    const nameMatch = products[i].name;
    const nameSize = products[i].availableSizes;
    if (nameMatch === name && nameSize.includes(size)) {
      return products[i];
    }
  }
  return result;
}

function addProductToCart({name, priceInCents}, cart={}) {
  const productToAdd = cart[name];
  if (productToAdd) {
    productToAdd.quantity++;
  } 
  else {
    cart[name] = {priceInCents, quantity:1};
  }
  return cart;
}

function calculateTotal(cart) {
  let total = 0;
  for (let name in cart) {
    const prod = cart[name];
    const quantity = prod.quantity;
    const priceInCents = prod.priceInCents;
    total += (quantity * priceInCents);
  }
  return total; 
}

function printReceipt(cart) {
  let receipt = "";
  const total = calculateTotal(cart);
    if (!total) return null;
  
  for (let name in cart) {
    const {quantity, priceInCents} = cart[name];
    const amount = printablePrice(quantity * priceInCents);
    receipt += `${quantity}x${name} - ${amount}\n`;
  }
  return receipt + `Total: ${printablePrice(total)}`
}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt
};
