
// Bmi = mass / height^2
var johnW, markW, johnH, markH;

johnH = 1.85;
johnW = 78;
markH = 1.89;
markW = 97;

var bmiJohn = johnW / (johnH * johnH); 
console.log(bmiJohn);

var bmiMark = markW / (markH * markH); 
console.log(bmiMark);

 var bmiBoth = bmiJohn > bmiMark;
 console.log('is john\'s bmi higher than mark\'s?', bmiBoth);

