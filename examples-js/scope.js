// methods aka functions

function () {
  return this;
}

function myfunction () {
  let myvar = "abc";
  var myvarvar = 123;
  this.myvarvar2 = 456;

  const test1 = () => this;
  function test2() { return this; }

  const obj = {
    myvar2: myvar,
    test3: function () { return this; }
  }


  console.log('test1', test1());
  console.log('test2', test2());
  console.log('test3', obj.test3());
}

myfunction();

console.log(myvar); // error
console.log(myvarvar); //error
console.log(myvarvar2); //456


  // test1: global scope
  // test2: global scope
  // test3: {myvar2: "abc", test3: window’}

  function add(c, d) {
    return this.a + this.b + c + d;
  }

  var o = {a: 1, b: 3};

  add.call(o, 5, 7); // 16

  add.apply(o, [10, 20]); // 34

  newadd = add.bind(o);
  newadd(30,40); // 74

  add.bind(o)(); // NaN

  function addDefaults(c = 1, d = 2) {
    return this.a + this.b + c + d;
  }

  newaddDefaults = addDefaults.bind(o);
  newaddDefaults(); // 7


  class Base {}
  class Good extends Base {}
  class AlsoGood extends Base {
    constructor() {
      return {a: 5};
    }
  }
  class Bad extends Base {
    constructor() {
      // super();
    }
  }

  new Good();
  new AlsoGood();
  new Bad(); // ReferenceError
