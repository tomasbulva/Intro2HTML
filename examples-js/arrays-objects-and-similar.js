// array methods
const myarray = [1,2,3];

// array zero based pointer
// [1,2,3]
//  ^ = 0
const two = myarray[1];
console.log(two); // 2

// size
console.log(myarray.length); // 3

// indexOf
  [2,3,1].indexOf(3);
  // 1

// includes
  [2,3,1].includes(3);
  // true

// sort
  [2,3,1].sort((a, b) => a - b);

// reverse
  [1,2,3].reverse();
  // [3,2,1]

// -- add
// push
  [1,2,3].push(4);
// [1,2,3,4]
// unshift
  [1,2,3].unshift(4);
// [4,1,2,3]

// -- remove
// pop
  const myArray = [1,2,3,4];
  const lastArrayElement = myArray.pop();

  console.log(myArray); // [1,2,3]
  console.log(lastArrayElement); // 4

// shift
  const myArray = [1,2,3,4];
  const lastArrayElement = myArray.shift();

  console.log(myArray); // [2,3,4]
  console.log(lastArrayElement); // 1

// -- replace/divide
// splice
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.splice(2, 0, "foo", "bar");
  console.log(fruits); // ["Banana", "Orange", "foo", "bar", "Apple", "Mango"]

  const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
  fruits2.splice(2, 2, "foo", "bar");
  console.log(fruits2); // ["Banana", "Orange", "foo", "bar"]

// slice
  const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const citrus = fruits3.slice(1, 3);
  console.log(citrus); //["Orange", "Lemon"]

// -- convert
// split
  const url = "https://www.scopus.com/authid/detail.uri?authorId=6701475619".split('/');
  console.log(url); // ["https:", "", "www.scopus.com", "authid", "detail.uri?authorId=6701475619"]
// join
  const workingUrl = url.join('/');
  console.log(workingUrl); // https://www.scopus.com/authid/detail.uri?authorId=6701475619

// -- loop/interation methods
// filter
  newArray = [1,2,3,4].filter((x) => x < 3);
  console.log(newArray); // [1, 2]
// map
  newArray = [1,2,3,4].map((x) => x + 1);
  console.log(newArray); // [2, 3, 4, 5]
// forEach
  [1,2,3,4].forEach((x) => {
    console.log(x + 1);
  });
  // 2
  // 3
  // 4
  // 5

// reduce
  const totalSum = [1,2,3,4].reduce((sum, x) => sum + x);
  console.log(totalSum); // 10


// Object methods
// Object.assign()
  const object1 = {
    foo: "bar"
  }

  const object2 = {
    bar: "foo"
  }

  console.log(Object.assign(object1, object2));
  // {
  //    foo: "bar",
  //    bar: "foo"
  // }

// Object.keys()
  const myObject = {
    val1: 1,
    val2: 2,
    val3: 3,
    val4: 4
  }

  console.log(Object.keys(myObject).forEach((key) => console.log(myObject[key])));
  // 1
  // 2
  // 3
  // 4

// Object.entries()
const myObject2 = {
  val1: 1,
  val2: 2,
  val3: 3,
  val4: 4
}

  console.log(Object.entries(myObject2));
  // [1,2,3,4]

// Object.prototype.hasOwnProperty()
  const isMyKeyThere = myObject2.hasOwnProperty(val2);
  console.log(isMyKeyThere); // true

  
