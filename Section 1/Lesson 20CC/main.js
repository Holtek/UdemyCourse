// John and his family went to 5 diferent restoraunts
// bills were 124$, 48$, 268$, 180$ and 42$
// When the bill is less than 50$ he tips 20%
//When the bill is between 50$ and 200$ he tips 15%
// When the bill is over 200$ he tips 10%

//Create an object with  with an array  for the bill values
//Add a method to calculate a tip
// This metod should include  a loop to iterate over all the paid  bills  and do a tip calculations
// As an output create 1) a new array containing  all the tips and 2) an array containing  final paid amounts (bill + tip)  Hint: start with 2 empty arrays  and then fill them up in the loop

var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      //determine precentage  on the tipping rules
      var precentage;
      var bill = this.bills[i];
      if (bill < 50) {
        precentage = .2;
      } else if (bill >= 50 && bill < 200) {
        precentage = .15;
      } else {
        precentage = .1;
      }



      //Add the result to coressponding arrays
      this.tips[i] = bill * precentage;
      this.finalValues[i] = bill + (bill * precentage);
    }
  }
}
var mark = {
  fullName: 'Mark Zucc',
  bills: [77, 475, 110, 45],
  calcTips: function () {
    this.tips = [];
    this.finalValues = [];
    for (var i = 0; i < this.bills.length; i++) {
      //determine precentage  on the tipping rules
      var precentage;
      var bill = this.bills[i];
      if (bill < 100) {
        precentage = .2;
      } else if (bill >= 100 && bill < 300) {
        precentage = .1;
      } else {
        precentage = .25;
      }



      //Add the result to coressponding arrays
      this.tips[i] = bill * precentage;
      this.finalValues[i] = bill + (bill * precentage);
    }
  }
}

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
// [2 , 6 , 4] -> 0 / 2 / 8 / 12

// All calculations
john.calcTips();
mark.calcTips()
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);