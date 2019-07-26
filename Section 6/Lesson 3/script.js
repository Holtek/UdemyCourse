// Stringsssss

let firstName = 'john';
let lastName = 'smith';
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - year
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth)
//ES6

console.log(`this is ${firstName} ${lastName}. He was born in ${yearOfBirth}. And today he is ${calcAge(yearOfBirth)} years old`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(firstName.repeat(5))