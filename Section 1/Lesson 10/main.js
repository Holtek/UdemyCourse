//  TRUTHY AND FALSY 

// Falsy values are {undefined, null, 0, '', NaN}
// Truthy values are {NOT falsy values}

var height;

height = 0;
if(height || height === 0) {
  console.log('variable is defined');
}else {
  console.log('variable has not been defined');
}