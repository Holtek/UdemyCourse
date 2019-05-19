//  Operator Precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge; //Returns true

var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2; //Returns 32

// Multiple assignements

var x, y;

x = y = (3 + 5 ) * 4 - 6; //8 * 4 -6 //32 - 6// 26

console.log(x, y); //Both are 26;

// 2 + 4 + 5


//More operators

x = x * 2;
// Same shit
x *= 2 ;
x += 10;

x = x + 1;
x += 1;
// SAME
x++
x--  
