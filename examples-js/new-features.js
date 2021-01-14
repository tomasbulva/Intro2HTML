// - nullish coalescing operators && || ??
// great shortcut

  // ?? if
  possiblyfalsevar = false;
  console.log(possiblyfalsevar ?? fallbackvar); //
  possiblyfalsevar = true;
  console.log(possiblyfalsevar ?? fallbackvar); // say
  possiblyfalsevar = '';
  console.log(possiblyfalsevar ?? fallbackvar); // say

  // || OR
  let possiblyfalsevar = false;
  const fallbackvar = 'say';
  console.log(possiblyfalsevar || fallbackvar); // say
  possiblyfalsevar = 'hello';
  console.log(possiblyfalsevar || fallbackvar); // hello
  possiblyfalsevar = '';
  console.log(possiblyfalsevar || fallbackvar); // ''

  // && AND
  possiblyfalsevar = false;
  console.log(possiblyfalsevar && fallbackvar); //
  possiblyfalsevar = true;
  console.log(possiblyfalsevar && fallbackvar); // say

// - object deconstructing
  const testObj = {
    var1: 'abc',
    var2: 'def',
  }

  console.log(var1); // error
  console.log(var2); // error

  const { var1, var2 } = testObj;

  console.log(var1); // 'abc'
  console.log(var2); // 'def'


// - object spreading
  const testObj = {
    var1: 'abc',
    var2: 'def',
  }

  const testObj2 = {
    var3: 'ghi',
    ...testObj,
  }

  console.log(testObj2); // { var1: 'abc', var2: 'def', var3: 'ghi' }

// - optional chaining
  console.log(testObj2.var4.test) // error
  console.log(testObj2.var4?.test) //

// - array flat and flatmap
  const myArray = [1,2,3,[4,5],[6,7]];

  console.log(myArray.flat()); // [1,2,3,4,5,6,7];
  console.log(myArray.flatMap((x) => console.log(x + 1))); // 2 3 4 5 6 7 8
