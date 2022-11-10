window.addEventListener('keydown', vehicleMovement);

var $vehicle = document.querySelector('#vehicle');

function vehicleMovement(event) {
  var turn = null;
  switch (event.key) {
    case 'ArrowUp':
      turn = 'vehicle north';
      break;
    case 'ArrowLeft':
      turn = 'vehicle west';
      break;
    case 'ArrowRight':
      turn = 'vehicle east';
      break;
    case 'ArrowDown':
      turn = 'vehicle south';
      break;
  }
  $vehicle.setAttribute('class', turn);
}
