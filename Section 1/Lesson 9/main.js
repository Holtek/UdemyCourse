//  Ternary Operator and Switch Statements


// ternary
var firstName = 'John';
var age = 16;

age >= 18  ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// switch

var job = 'teacher';
switch(job) {
  case 'teacher':
    case 'instructor':
    console.log(firstName + ' teaches kids how to code.');
    break;
    case 'driver':
      console.log(firstName + ' Drives Uber');
      break;
      case 'designer':
        console.log(firstName + ' Makes beautiful websites');
        break;
        default:
          console.log(firstName + ' does something else');
}