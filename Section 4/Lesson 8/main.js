// Closures

function retirement(retirementAge) {
  var a = 'years left until retirement.';
  return function (yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log((retirementAge - age) * a);
  }
}
var retirementUS = retirement(66);




retirement(66)(1990);




function interviewQuestions(job) {
  return function (name) {
    if (job === 'designer') {
      console.log(name + 'is designer');
    } else if (job === 'teacher') {
      console.log('what do  you teach ' + name);
    } else {
      console.log('how do you do ' + name);
    }
  }
}

interviewQuestions('teacher')('John')