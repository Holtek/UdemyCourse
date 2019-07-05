// Primitives VS Objects 

var a = 33;
var b = a;
a = 55;




// Objects
var obj1 = {
  name: 'John',
  age: 25
};
var obj2 = obj1;

obj1.age = 30;


// Functions

var age = 26;
var obj = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'san francisco';
}

change(age, obj);