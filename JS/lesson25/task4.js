const price = [100, 250, 80, 40];

function addTax() {
  return price.map(item => item * 1.2);
}

const newPrice = addTax(price);

console.log(newPrice);