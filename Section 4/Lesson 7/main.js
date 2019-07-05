// First class functions

var years = [1999, 2009, 1905, 1968, 1985];


function arrayCalc(arr, fn) {
  var arrRes = [];

  for (var i = 0; i < years.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - (0.67 * el));
  } else {
    return -1;
  }

}


var ages = arrayCalc(years, calcAge);
var fullAges = arrayCalc(ages, isFullAge);
var rate = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rate);