let consumerUnits = parseInt(prompt("Enter No. of units "));
let unitCost = parseInt(prompt("Enter the cost of unit "));
let unitPerPriceIncrease = 50;
let priceIncreasePerUnit = 3;

let totalpriceIncrease = Math.floor(consumerUnits / unitPerPriceIncrease) * priceIncreasePerUnit;
let totalPerUnitCost = unitCost + totalpriceIncrease;
let totalAmount = (unitCost + totalpriceIncrease) * consumerUnits;

let h1 = document.querySelector('.head')
h1.innerHTML = 'Billing System'

let h2 = document.querySelector('.head2')
h2.innerHTML = `Dear consumer you consume ${consumerUnits} units. According to that your price per unit is ${totalPerUnitCost} Rs and your total amount is ${totalAmount} Rs`





