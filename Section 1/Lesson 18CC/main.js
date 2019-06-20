// It's like BMI challenge 
// Implement an object with their full name , mass , height
//add a method to each object to calc their bmi and also return it 
// log in the console who has the higher bmi 

//BMI  = mass / height^2 = 

let Mark = {
  fullName: 'Mark',
  weight: 80,
  height: 1.90,
  calcBmiMark: function () {
    this.bmi = this.weight / (this.height * this.height);
  }
}


let John = {
  fullName: 'John',
  weight: 70,
  height: 1.86,
  calcBmiJohn: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  }
}

John.calcBmiJohn()
Mark.calcBmiMark();
console.log(John, Mark);

if (Mark.bmi > John.bmi) {
  console.log('Mark has higher bmi than John');
} else if (Mark.bmi < John.bmi) {
  console.log('John has higher bmi than Mark');
} else {
  console.log('they have the same bmi');
}