// higher order functions
const myES6_HOF = () = () => {
  console.log('ES6 test');
}

const getES6Test = myES6_HOF();
console.log(getES6Test()); // ES6 test



function myHOF() {
  // possible to do something here
  return function(){
    console.log('test');
  }
}

const getTest = myHOF();
console.log(getTest()); // test
