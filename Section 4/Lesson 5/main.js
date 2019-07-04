//  Object.create


var personProto = {
  calculateAge: function () {
    console.log(2019 - yearOfBirth);
  },
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
  name: {
    value: 'Jane'
  },
  yearOfBirth: {
    value: 1988
  },
  job: {
    value: 'designer'
  }
})