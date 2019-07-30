// Default parameters


// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? lastName = 'Smith' : lastName = lastName;
  nationality === undefined ? nationality = 'american' : nationality = nationality;
  this.firstName = firstName
  this.yearOfBirth = yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
}

var john = new SmithPerson('John', 1990);

var emily = new SmithPerson('Emily', 1980, 'Diaz', 'spanish')
*/
// ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
  this.firstName = firstName
  this.yearOfBirth = yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
}



const john = new SmithPerson('John', 1990);

const emily = new SmithPerson('Emily', 1980, 'Diaz', 'spanish')