var john = {
  name: 'John',
  age: 26,
  job: 'Teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log('Good ' + timeOfDay + ' Ladies and Gentleman! I\'m ' + this.name + ' I am a ' + this.job + ' and I am ' + this.age + '  years old');
    } else if (style === 'friendly') {
      console.log('Yo I\'m ' + this.name + ' I am a ' + this.job + ' and I am ' + this.age + '  years old. Have a nice' + timeOfDay);
    }
  }
}


var emily = {
  name: 'Emily',
  age: '22',
  job: 'Designer'
}

john.presentation('formal', 'morning')

john.presentation.call(emily, 'friendly', 'afternoon')

// john.presentation.apply(emily['formal', 'morning'])

var johnFriendly = john.presentation.bind(john, 'friendly')

johnFriendly('morning');

var emilyFormal =
  john.presentation.bind(emily, 'formal')
emilyFormal('afternoon')



var years = [1999, 2009, 1905, 1968, 1985];

function arrayCalc(arr, fn) {
  var arrRes = [];

  for (var i = 0; i < years.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calcAge(el) {
  return 2019 - el;
}

function isFullAge(limit, el) {
  return el >= 18;
}

var ages = arrayCalc(years.calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages);
console.log(fullJapan);