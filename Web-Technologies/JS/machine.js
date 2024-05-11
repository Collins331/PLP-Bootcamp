const readline = require('readline');


const items = {
    phone: 300,
    smartTv: 220,
    gamingConsole: 150
};
console.log('Welcome to the Linc Store!\n We sell \n\t\t1. Phones \t\t--> $300.0 \n\t\t2. Smart TVs \t\t--> $220.0 \n\t\t3. Gaming consoles \t--> $150.0\n');

const cart = [];
function addItem(item){
    if (items[item]){
        cart.push(item)
        console.log(`Added ${item} to shopping cart`);
        return;
    }
    //add item to the shopping cart
    console.log(`we don't sell that item`);
}

function calculateTotalPrice(item){
    let total = 0;
    //calculate the total price of the items in the shopping cart
    cart.forEach(item => {  
        total += items[item];
    });
    console.log(`Total price is $${total}`)
    return total;
}
function pay(amount){
    let total = calculateTotalPrice();
    //pay for the items in the shopping cart
    if (amount >= total){
        if (total > 400){
            let discount = total * 0.1;
            total -= discount;
            console.log(`You have successfully received a discount of $${discount} on the total price of the items in your cart`);
        
        let change = amount - total;
        console.log(`You have successfully paid for the items in your cart and your change is $${change}`);
        return;
        }
    }
    console.log(`You don't have enough money`)
}

addItem('phone');
addItem('smartTv');
addItem('gamingConsole');

pay(700);