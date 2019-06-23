// loops and iteration


// for (let i = 0; i < 10; i++) {

//   console.log(i);
// }

// For loop
//      let john = ['John', 'Smith', 1990, 'designer', false];
//      for (var i = 0; i < john.length; i++) {
//        console.log(john[i]);
//      }


// //       While loop
//      var i = 0;
//      while (i < john.length) {
//        console.log(john[i]);
//        i++;
// }

//Continue and break statements

// let john = ['John', 'Smith', 1990, 'designer', false];
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// } 

//We get all strings when we use continue 


// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') break;
//   console.log(john[i]);
// }

//We get all the strings before something that isn't a string and then it stops no  matter if we have more strings later in the array



// looping backwards 

let john = ['John', 'Smith', 1990, 'designer', false];
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}