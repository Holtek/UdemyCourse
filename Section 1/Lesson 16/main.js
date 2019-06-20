// Objects

var john = {
  firstName: 'John',
  lastName = 'Smith',
  birthYear = 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false
}

// You can select them with a .
console.log(john.firstName);
console.log(john.birthYear);

//You can alse use brackets

console.log(john['lastName']);

//Mutate it
john.job = 'Designer';
john['isMarried'] = true;


var jane = new Object();
jane.lastName = 'Smith'
jane.birthYear = '1965'
jane['firstName'] = 'Jane';