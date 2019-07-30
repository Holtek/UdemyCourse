//Rest parameters

// ES5
/*
function isFullAge5() {
  // console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function (cur) {
    console.log((5000 - cur) >= 18);
  });
}
// isFullAge5(1889, 3999, 1009);
// isFullAge5(1889, 3999, 1009, 1987, 2009);



//ES6

function isFullAge6(...years) {
  // console.log(years);
  years.forEach(cur =>
    console.log((2019 - cur) >= 18));
}

isFullAge6(2001, 2006, 1999, 2000, 1987);

*/

function isFullAge5(limit) {
  // console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.forEach(function (cur) {
    console.log((5000 - cur) >= limit);
  });
}
// isFullAge5(1889, 3999, 1009);
// isFullAge5(1889, 3999, 1009, 1987, 2009);



//ES6

function isFullAge6(limit, ...years) {
  // console.log(years);
  years.forEach(cur =>
    console.log((2019 - cur) >= limit));
}

isFullAge6(2001, 2006, 1999, 2000, 1987);