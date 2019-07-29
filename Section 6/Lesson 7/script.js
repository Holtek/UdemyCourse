// Arrays


const boxes = document.querySelectorAll('.box');

//ES5
/*


var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function (cur) {
  cur.style.background = 'dodgerblue'
})


*/

// ES6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(box => box.style.background = 'red');

/*
// ES5
for (var i = 0; i < boxesArr6.length; i++) {
  if (boxesArr6[i].className === 'box blue') {
    continue;
  }
  boxesArr6[i].textContent = 'I changed to red '
}
*/



// ES6

for (const cur of boxesArr6) {
  if (cur.className.includes('blue')) {
    continue;
  }
  cur.textContent = 'I changed to bread'
}




// ES5
var ages = [12, 16, 17, 18, 21, 11];
var full = ages.map(function (cur) {
  return cur >= 18
})

console.log(full);

full.indexOf(true);
console.log(ages[full.indexOf(true)]);



// ES6

ages.findIndex(cur => cur >= 18);

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));