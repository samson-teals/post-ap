// This is intended to be copy and pasted into playcode.io

let buttonFactory = function(x) {
  return function() {
    console.log(`button ${x}`);
  }
}

let msg = $('#msg');
for (let i = 0; i < 3; i++) {
  msg.append(`<input type="button" id="b${i}" value="button ${i}">`);

  let b = $(`#b${i}`);
  b.click(buttonFactory(i));
}

// What would happen if the "let" in "let i = 0" were changed to "var"?
// How would you make a 3x3 grid of buttons where clicking each button resulted in the button coordinates being logged?
