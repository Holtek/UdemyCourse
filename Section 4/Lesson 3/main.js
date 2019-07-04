// Function Constructor

var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'Teacher'
};

// general rule is to write function constructors with capital letter
let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
}

Person.prototype.lastName = 'Smith'

Person.prototype.calculateAge = function () {
  console.log(2019 - this.yearOfBirth);
}
var john = new Person('John', 1990, 'Teacher')
var jane = new Person('Jane', 1959, 'Designer');
var mark = new Person('Mark', 1946, 'retired')
john.calculateAge();
jane.calculateAge();
mark.calculateAge();