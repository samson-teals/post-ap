$('#title-container').append('<h1>Calculator</h1>');

// This is one way to generate most of the 0th (bottom) row of calculator elements
// At ths end of this loop, we will have generated the following (spaces and line breaks are included for clarity):
/*
    <div id="row-0">
        <input id="bC" type="button" class="function" value="C">
        <input id="b0" type="button" class="number" value="0">
        <input id="bE" type="button" class="function" value="=">
    </div>
*/

// Don't worry too much about the enclosing {} braces for now.
{
  let row0Elements = [
    ['C', 'C', 'function'],
    ['0', '0', 'number'],
    ['E', '=', 'function']
  ];

  // Generate a <div> element that looks like this:
  //
  //  <div id="row-0"></div>
  //
  let rowId = `row-0`;
  $('#button-container').append(`<div id="${rowId}"></div>`);

  // Get the <div> element that we just created so that we can .append to it later
  let rowElement = $(`#${rowId}`);

  for (let data of row0Elements) {
    let key = data[0];          // e.g. 'E'
    let number = data[1];       // e.g. '='
    let className = data[2];    // e.g. 'function'

    // .append to the <div> element that we captured right before the "for" loop
    // For example, the last input element to be .append'ed looks like this:
    //
    //   <input id="bE" type="button" class="function" value="=">
    //
    rowElement.append(`<input id="b${key}" type="button" class="${className}" value="${number}">`);
  }
}
