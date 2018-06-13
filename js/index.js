var restartButton = document.querySelector('.restart');
var progressBar = document.querySelector('.progress-bar')
var templateSlide = document.getElementById('template-slide').innerHTML;
var carouselContainer = document.querySelector('.carousel');
var slide = ''

restartButton.addEventListener( 'click', function() {
  flkty.selectCell('#AnfieldRoad');
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

window.initMap = function() {
	var places = {
  uluru: {
    lat: -25.363, 
    lng: 131.044
   },
  coords2: {
    lat: -25.363, 
    lng: 134.044
  },
  coords3: {
    lat: -25.363, 
    lng: 137.044
  }
};
	
	/*	var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 6,
			center: places[i]
		});

	for (i=0; i <places.length; i++ ){
		var marker = new google.maps.Marker({
			position: places[i],
			map: map
		})
		var marker[i] = marker;
		marker[i].addListener('click', function(){
			infos.innerHTML = '"You clicked marker" + [i]';
		})
	}

	var markerOne = new google.maps.Marker({
		position: uluru,
			map: map
		});
		markerOne.addListener('click', function(){
		infos.innerHTML = 'You clicked markerOne';
		});	
		
	var markerTwo = new google.maps.Marker({
			position: coords2,
			map: map
		});
		markerTwo.addListener('click', function(){
			infos.innerHTML = 'You clicked markerTwo';
		});		
		
	var markerThree = new google.maps.Marker({
			position: coords3,
			map: map
		});
		markerThree.addListener('click', function(){
			infos.innerHTML = 'You clicked markerThree';
		});	 */
	}	
initMap();