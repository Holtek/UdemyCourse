function calculateAge(birthYear) {
  return 2019 - birthYear;

}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1940);
var ageJane = calculateAge(1960);

console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {

  var age = calculateAge(year)
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + ' retires in ' + retirement + ' years');
  } else {
    console.log(firstName + ' has already retired ');
  }

}
yearsUntilRetirement(1980, 'John');
yearsUntilRetirement(1970, 'Mike');
yearsUntilRetirement(1930, 'Jane');