
// var
// hoisted variable
// re-declare any time

console.log('testVar', testVar); // "testVar", undefined
var testVar = "blabla";

// non block scope
var test = "abc";
if (something === somethingElse) {
  var test = "blabla";
}

console.log(test); // blabla


// Hoisted but not initialized
console.log('testLet', testLet); // Uncaught ReferenceError: Cannot access 'testLet' before initialization
let testLet = "blabla";

// let
// re-declarable
// block scoped
let test = "abc";
test = "abc2"
if (something === somethingElse) {
  let test = "blabla";

  console.log(test); // blabla
}
console.log(test); // abc2


// const
console.log('testConst', testConst); // "testConst", undefined
var testConst = "blabla";


const test = "abc";
test = "abc2" //Uncaught TypeError: Assignment to constant variable.


if (something === somethingElse) {
  const test = "blabla";

  console.log(test); // blabla
}
console.log(test); // Uncaught ReferenceError: something is not defined


// cloning
let test = "abc";
let test2 = test;

console.log(test2); // abc

test = "def";

console.log(test2); // abc

// and pointing

let newtest = { foo: "bar" };
let newtest2 = newtest;

console.log(newtest2.foo); // bar

newtest.foo = "def";

console.log(newtest2.foo); // def

// how to clone objects?

// es6 style
let newtest = { foo: "bar" };
let newtest2 = { ...newtest };

console.log(newtest2.foo); // bar

newtest.foo = "def";

console.log(newtest2.foo); // bar

// pre es6 ways
// oldest
let newtest2 = JSON.parse(JSON.stringify(newtest));

// es5
let newtest2 = Object.assing({}, newtest);


// objects
const myObject = {
  simpleString: "abc",
  simpleNumber: 123,
  simpleBool: true,
  array: [1,2,3],
  object: {
    simpleString: "abc",
    simpleNumber: 123,
    simpleBool: true,
  },
  func: function () { console.log(this); },
  func2: () => { console.log(this); },
  that: this,
}

const myfield = 'array';

console.log(myObject.func());
console.log('that', myObject.that);

console.log('show me', myfield, myObject[myfield]); // show me, array, 1,2,3
console.log('show me', myfield, myObject[myfield][1]); // show me, array, 2

const myotherfield = 'object'
console.log('show me', myotherfield, myObject[myotherfield].simpleString); //show me, object, abc
