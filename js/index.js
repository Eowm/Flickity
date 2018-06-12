//window.initMap = function() {
//	var uluru = {lat: -25.363, lng: 131.044};
//	var map = new google.maps.Map(document.getElementById('map'), {
//			zoom: 4,
//			center: uluru
//		});
//	var marker = new google.maps.Marker({
//	position: uluru,
//			map: map
//		}); 
//	}	
//initMap();


(function() {
	var templateList = document.getElementById('carousel-cell').innerHTML;


	var listItems = '';

	var templateItem = document.getElementById('carousel-cell').innerHTML;

    	Mustache.parse(templateItem);

	for(var i = 0; i < carouselData.length; i++){
		console.log(carouselData);
		listItems += Mustache.render(templateItem, carouselData[i]);
	}

	var fullProductList = Mustache.render(templateItem, {products: listItems});
	var results = document.getElementById('results');
	results.insertAdjacentHTML('beforeend', fullProductList);

})();


var elem = document.querySelector('#results');
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

//var progressBar = document.querySelector('.progress-bar')

//.on( 'scroll', function( progress ) {
 // progress = Math.max( 0, Math.min( 1, progress ) );
 // progressBar.style.width = progress * 100 + '%';
//});
