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


restartButton.addEventListener('click', function( event ) {
  flkty.selectCell(0);
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

