


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

var progressBar = document.querySelector('.progress-bar')

/*window.initMap = function() {
	var places = {uluru: (lat: -25.363, lng: 131.044), coords2: (lat: -25.363, lng: 134.044), coords3: (lat: -25.363, lng: 137.044)};
	
	var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 6,
			center: places[i]
		});

	for (i=0; i <places.length; i++ ){
		var marker[i] = new google.maps.Marker({
			position: places[i];
			map: map
		})
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
		});	 
	}	
initMap();*/

//.on( 'scroll', function( progress ) {
 // progress = Math.max( 0, Math.min( 1, progress ) );
 // progressBar.style.width = progress * 100 + '%';
//});