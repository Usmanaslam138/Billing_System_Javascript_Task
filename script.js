let consumerUnits = parseInt(prompt("Enter No. of units "));
let unitCost = parseInt(prompt("Enter the cost of unit "));
let unitPerPriceIncrease = 50;
let priceIncreasePerUnit = 3;

// let totalpriceIncrease = Math.floor(consumerUnits / unitPerPriceIncrease) * priceIncreasePerUnit;
// let totalPerUnitCost = unitCost + totalpriceIncrease;
// let totalAmount = (unitCost + totalpriceIncrease) * consumerUnits;
let dueDate = 10
let todayDate = (new Date).getDate()
let todaymonth = (new Date).getMonth()

let plenty = todayDate - dueDate
console.log(plenty)

for (let i = 0; i < consumerUnits; i++) {
    if (i % 50 == 0 && i != 0) {
        unitCost += 3
    }
}
let totalAmount = unitCost * consumerUnits;

if (todayDate > dueDate) {
    totalPlentyAmount = totalAmount + (totalAmount * (plenty / 100))
}

let h1 = document.querySelector('.head')
h1.innerHTML = 'Billing System'

let h2 = document.querySelector('.head2')
h2.innerHTML = (todayDate > dueDate) ? `Dear consumer you consume ${consumerUnits} units.<br> According to that your price per unit is ${unitCost} Rs <br> Your total amount is ${totalAmount} Rs <br> Your due date is 8/15/2023, you paid on ${todaymonth}/${todayDate}/2023 so with plenty of ${plenty}% of total amount your total amount is ${totalPlentyAmount}` : `Dear consumer you consume ${consumerUnits} units.<br> According to that your price per unit is ${unitCost} Rs and your total amount is ${totalAmount} Rs`








