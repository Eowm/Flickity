var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
  fullscreen: true,
});



var restartButton = document.querySelector('.restart-button');
viewFullscreenButton.addEventListener( 'click', function() {
  flkty.viewFullscreen();
});



// vanilla JS
//flkty.on( 'scroll', function( progress ) {...});