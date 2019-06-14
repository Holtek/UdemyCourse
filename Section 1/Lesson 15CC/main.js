//  3 restorants 
// Bills 124, 48,  268
//Has to tip 20% if the bill is  less than 50$ , 15% when the bill is between 50$ and 200$,  and 10% if the bill is more than 200$

//Need to get 2 arrays 
// 1st one containing all the tips( one for each bill );
// 2nd containing all three  final paid  amounts (bill + tip);


//Calc precent 20/100 = 0.2 

// Shit code
let a = 124 * 0.15;
let b = 48 * 0.2;
let c = 268 * 0.1;

let payment = [];
payment.push(a, b, c);

let paymentBill = []

let a1 = [a, 124];
let b1 = [b, 48];
let c1 = [c, 268];
paymentBill.push(a1, b1, c1);

console.log(paymentBill);
console.log(payment);

//Normal code

function tipCalculator(bill) {
  var precentage;
  if (bill < 50) {
    precentage = .2;
  } else if (bill >= 50 && bill < 200) {
    precentage = .15;
  } else {
    precentage = .1;
  }
  precentage * bill;

}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(finalValues, tips);