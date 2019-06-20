// Objects and Methods

var john = {
  firstName: 'John',
  lastName = 'Smith',
  birthYear = 1990,
  family: ['Jane', 'Mark', 'Bob', 'Emily'],
  job: 'teacher',
  isMarried: false,
  calcAge: function () {
    this.age = 2019 - this.birthYear;
  }
}
// You can do it like this
var age = john.calcAge();
//But also like this
john.age = john.calcAge();
// EVEN BETTER
john.calcAge()