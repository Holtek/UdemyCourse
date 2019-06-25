//  Hoisting



calcAge(1967)

function calcAge(year) {
  console.log(2016 - year);
}

// This will not work cuz you need to declare retirement below var retirement


// retirement(1990)
var retirement = function (year) {
  console.log(65 - (2019 - year));
}
// this will work
retirement(1990);


// variables

//this one will be undefined 
// console.log(age);
// //////////////////////////
var age = 23;
// this one will work fine
console.log(age);

function foo() {
  var age = 65
  // this console log will print 65
  console.log(age);
}

foo();

// this one will print out 23 cuz it's delared in global thingy
console.log(age);