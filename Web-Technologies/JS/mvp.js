function addItem(item) {
    if (items[item]) {
        cart.push(item);
        console.log(`Added ${item} to shopping cart`);
        return;
    }
    //add item to the shopping cart
    console.log(`we don't sell that item`);
}