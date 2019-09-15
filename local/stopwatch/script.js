let startTime = null;
let intervalHandle = null;

function updateRunningTime() {
  $('#running').html((Date.now() - startTime) / 1000);
}

$('#start').click(function() {
  console.log('start');
  startTime = Date.now();

  intervalHandle = setInterval(updateRunningTime, 1000);
  $('#elapsed').html('');
})

$('#stop').click(function() {
  console.log('stop');

  $('#elapsed').html((Date.now() - startTime) / 1000);

  startTime = null;
  clearInterval(intervalHandle);

  $('#running').html('');
})
