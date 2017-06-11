$(function() {

console.log('Hello from index.js');

$('form').click(function(event) {
	event.preventDefault();
});

$('#submit-btn').click(backgroundChange); //run function on button click.
function backgroundChange(event) { 
  var city = $('#city-type').val().toLowerCase().trim(); // set city to value of city-type input.
  $('#city-type').val('');
  console.log(city);
  $('body').removeClass(); // do this...
  if (city === 'new York' || city === 'nyc' || city === 'new york city') { // if the city is new york...
	  $('body').addClass('nyc');
  } else if (city === 'san francisco' || city === 'sf' || city === 'bay area') { // if city is SanFran...
	  $('body').addClass('sf');
  } else if (city === 'los Angeles' || city === 'la' || city === 'lax') {
	  $('body').addClass('la');
  } else if (city === 'austin' || city === 'atx') {
	  $('body').addClass('austin');
  } else if (city === 'sydney' || city === 'syd') {
	  $('body').addClass('sydney');
  } else { // if none are valid...
    $('body').addClass('cityPix');
}
}
})