// A closure is a function with the lexical scope available at the time the function is created.

let g = 0;

let f = function(x) {
  return function() {
    console.log('---');
    console.log(x, g);
  };
}

let f2 = f(2);
g++;
let f3 = f(3);

f2();
g++;
f3();
