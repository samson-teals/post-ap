"use strict";

function f() {
  var a = 'A';

  if (true) {
    var b = 'B'
  }

  console.log(a);
  console.log(b);
}

f();

///////////////////////////////////////

function g() {
  let c = 'C';

  if (true) {
    let d = 'D'
  }

  console.log(c);
  console.log(d);
}

g();
