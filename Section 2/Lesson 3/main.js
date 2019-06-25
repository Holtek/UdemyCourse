// THISSSSSSSSSSSSSSSSSSSSSSSSSSS is scary

// This logs window which is default 

// console.log(this);

// calcAge(1990)

// function calcAge(year) {
//   console.log(2019 - year);
//   console.log(this);
// }

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2019 - this.yearOfBirth);

    function innerFunction() {
      console.log(this);
    }
    innerFunction();
  }

}
john.calcAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1979
};

mike.calcAge = john.calcAge;
mike.calcAge();