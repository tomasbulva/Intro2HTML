// MATH, JSON, (INTL)

// MATH
Math.round(4.7); // 5
Math.round(4.4); // 4

Math.ceil(4.4); // 5
Math.floor(4.7); // 4

Math.random(); // random number 0.0--0.99

// JSON
const string = JSON.stringify({ var: 1, var2: 2 }); // "{ 'var':'1', 'var2': '2' }"
console.log(JSON.parse(string));
/*
{
  var: 1,
  var2: 2
}
*/

// Intl
const count = 26254.39;
const date = new Date("2012-05-24");

function log(locale) {
  console.log(
    `${new Intl.DateTimeFormat(locale).format(date)} ${new Intl.NumberFormat(locale).format(count)}`
  );
}

log("en-US");
// expected output: 5/24/2012 26,254.39

log("de-DE");
// expected output: 24.5.2012 26.254,39
