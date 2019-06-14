// Arrays 


//Initialise new array
let names = ['John', 'Mark', 'Jane'];
let years = new Array(1990, 1969, 1948);

console.log(names[0]); //We get John

// array mutation
names[1] = 'Ben';
names[names.length] = 'Mary'
console.log(names[1]); //We get Ben

// different data types

let john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); //add element at the end of the array 
john.unshift('Mr.'); // add element at the start at the array

john.pop() //removes the last element of the array
john.shift() // removes the first element of the array

john.indexOf(1990); //shows the position of the element in  the array