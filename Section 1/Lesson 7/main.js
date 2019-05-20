//  If Else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
 console.log(firstName + 'is married!'); 
}else {
  console.log(firstName + 'will hopefully marry soon');
}

var isMarried = false;

if(isMarried) {
  console.log(firstName + 'is married');
}else{
  console.log(firstName+ 'will hopefully marry soon');
}


var johnW, markW, johnH, markH;

johnH = 1.85;
johnW = 78;
markH = 1.89;
markW = 97;

var bmiJohn = johnW / (johnH * johnH); 
console.log(bmiJohn);

var bmiMark = markW / (markH * markH); 
console.log(bmiMark);

if(bmiMark > bmiJohn) {
  console.log('Marks bmi is higher than Johns');
}else{
  console.log('Johns bmi is higher than Marks');
}

//  var bmiBoth = bmiJohn > bmiMark;
//  console.log('is john\'s bmi higher than mark\'s?', bmiBoth);
