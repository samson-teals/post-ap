let a = 'A';

function f() {
  let b = 'B';

  if (true) {
    let c = 'C';

    console.log(a);
    console.log(b);
    console.log(c);
  }

  console.log(a);
  console.log(b);
  console.log(c);
}

f();

console.log(a);
console.log(b);
console.log(c);
