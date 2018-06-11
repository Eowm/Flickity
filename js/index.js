var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
});



var restartButton = document.querySelector('.restart-button');
restartButton( 'click', function( event ) {
  flkty.selectCell( 0);
});


// vanilla JS
//flkty.on( 'scroll', function( progress ) {...});