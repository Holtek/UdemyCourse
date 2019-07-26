// let and const

//ES5 code
/*
var name5 = 'John';
var age5 = 23;
name5 = 'John Smith';


// ES6

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller ' //this aint gonna work
*/



//ES5

function driversLicence5(passed) {
  if (passed) {
    var firstName = 'John';
    var yearOfBirth = 1990;
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officialy allowed to drive a car.')
  }
}

driversLicence5(true);

// ES6

function driversLicence6(passed) {
  if (passed) {
    let firstName = 'John';
    const yearOfBirth = 1990;
    console.log(firstName + ', born in ' + yearOfBirth + ' is now officialy allowed to drive a car.')
  }
}

driversLicence6(true);




let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i)
}

console.log(i);