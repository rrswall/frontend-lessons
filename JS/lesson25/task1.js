const stockItem = {
    Id: 3022007,
    place: "area1",
    weight: "48 kg"
}

const shopItem = {...stockItem}
shopItem.price = "22$"
delete shopItem.place

console.log(stockItem);
console.log(shopItem);
