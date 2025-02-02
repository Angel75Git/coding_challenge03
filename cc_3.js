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

//Task 3
let employee = {
    name: "Edward",
    role: "Manager",
    performanceScore: 89,
    isActive: true
};
employee.performanceScore = 76       //Edward missed a deadline, so his score went down
console.log(employee)
employee.promotionEligible = false     //Edward is not getting promoted
console.log(employee)

//Task 4
let feedback = [
    {
    customerName: "Karen",   
    feedbackText: "WORST Service EVER",
    rating: 1
},
    {
    customerName: "Alice",
    feedbackText: "Good place to have lunch",
    rating: 5
},
    {
    customerName: "Muhammad",
    feedbackText: "Eat here every Tuesday!",
    rating: 5    

}]
//adding a new object to feedback
feedback.push({
    customerName: "Thomas",
    feedbackText: "Pretty good",
    rating: 4
})

console.log(feedback)

