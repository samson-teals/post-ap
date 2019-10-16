"use strict";

a = 'A';
var b = 'B';

function f() {
  var c = 'C';
}

console.log(a);
console.log(b);

f();
console.log(c);

///////////////////////////////////////

function g() {
  console.log(a);
  console.log(b);

  a = 'AA'
  b = 'BB'
}

g();
console.log(a);
console.log(b);