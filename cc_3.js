//Task 1 
let prices = [34.99, 65.00, 82.99, 17.99, 92.00]; //Created array
console.log(prices);
prices.push(12.99);           //Changes to array +12
console.log(prices);
prices.shift();          // Delete 1st index
console.log(prices);         

//Task 2
let orders = [13, 12, 25, 21, 18]; //inital customer orders 
console.log(orders);
orders[2] += 5;               //add 5 to third order
console.log(orders);

//Combined all orders by summation
let total = orders.reduce((sum, order) => sum + order, 0);     
console.log("Total orders:",total)          

