// console.log


  //string
  const exampleString = 'test string';

  console.log(exampleString); //test string

  console.log('variable ' + exampleString); //variable test string

  console.log(`variable ${exampleString}`); //variable test string

  console.log('variable', exampleString); //variable test string


  // number
  const exampleNumber = 123;

  console.log(exampleNumber); //123

  console.log('variable ' + exampleNumber); //variable 123

  console.log(`variable ${exampleNumber}`); //variable 123

  console.log('variable', exampleNumber); //variable 123


  // array
  const exampleArray = [1, 2, 3];

  console.log(exampleArray); //[1, 2, 3]

  console.log('variable ' + exampleArray); //variable 1, 2, 3

  console.log(`variable ${exampleArray}`); //variable 1, 2, 3

  console.log('variable', exampleArray); //variable [1, 2, 3]


  // Object
  const exampleObject = { string: 'blabla' };

  console.log(exampleObject);
/*
  {
   string: "blabla"
  }
*/
  console.log('variable ' + exampleObject); //variable [object Object]

  console.log(`variable ${exampleObject}`); //variable [object Object]

  console.log('variable', exampleObject);
/*
  "variable", {
    string: "blabla"
  }
*/


// Object
const exampleFunc = () => { return 'test' };

console.log(exampleFunc);
/*
() => { return 'test' }
*/

console.log('variable ' + exampleFunc); //function () =&gt; { return 'test' }

console.log(`variable ${exampleFunc}`); //function () =&gt; { return 'test' }

console.log('variable', exampleFunc);
/*
function", () => { return 'test' }
*/
