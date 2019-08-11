const second = () => {

  setTimeout(() => {
    console.log('Hey there Async');
  }, 2000)
}


const first = () => {
  console.log('yahho')
  second();
  console.log('The end');
}
first();