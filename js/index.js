var restartButton = document.querySelector('.restart');
var progressBar = document.querySelector('.progress-bar')
var templateSlide = document.getElementById('template-slide').innerHTML;
var carouselContainer = document.querySelector('.carousel');
var slide = ''

restartButton.addEventListener( 'click', function() {
  flkty.selectCell('#' + carouselData[0].id);
});



Mustache.parse(templateSlide);

for(var i = 0; i < carouselData.length; i++) {
  slide = Mustache.render(templateSlide, carouselData[i]);
  carouselContainer.insertAdjacentHTML('beforeend', slide);
}

var flkty = new Flickity( '.carousel', {
  pageDots: false,
  hash: true,
  draggable: false,
  cellSelector: ".carousel-cell"
});

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


flkty.on( 'change', function(index){	
	map.panTo(carouselData[index].cords); 
	map.setZoom(11);
})

window.initMap = function() {
	
		 map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: carouselData[0].cords
		});

	for (let i=0; i <carouselData.length; i++ ){
			var marker = new google.maps.Marker({
			position: carouselData[i].cords,
			map: map
		})
		marker.addListener('click', function(){
			flkty.selectCell('#' + carouselData[i].id);
		})
	}
}	