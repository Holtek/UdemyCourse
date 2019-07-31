// Maps

const question = new Map();
question.set('question', 'What is the official name of the lastest major JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES9');
question.set(4, 'ES7')
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong try again Bitch');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)) {
  // question.delete(4);
  //console.log('ghay');
}
// question.clear();   deletes everything



question.forEach((value, key) => {
  // console.log(`this is ${key} and it's set to ${value}`);
})

for (let [key, value] of question.entries()) {
  if (typeof (key) === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = parseInt(prompt('Write the correct answer'));


console.log(question.get(ans === question.get('correct')));