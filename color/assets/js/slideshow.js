///////////////////////////////////////////////////////////////////////////////
// File:   slideshow.js							     Feb 2013
// Author: Patrick Vargas							 patrick.vargas@colorado.edu
// Description: 
//   Implments the slideshow on homepage.
///////////////////////////////////////////////////////////////////////////////
$(function() {
	var path   = "assets/img/slides/";
  var images = [
    "instagram-albuquerque-flying-star-cafe-lamp.JPG",
    "instagram-albuquerque-flying-star-cafe.JPG",
    "instagram-albuquerque-shopping-center.JPG",
    "instagram-band-tuba-brass.jpg",
    "instagram-bb10k-finish-line.jpg",
    "instagram-bb10k-summit.jpg",
    "instagram-bear-road-sign.JPG",
    "instagram-boulder-cafe-the-flash-superhero.JPG",
    "instagram-boulder-colorado-boulder-creek.jpg",
    "instagram-boulder-colorado-eben-g-fine-park.jpg",
    "instagram-boulder-colorado-flagstaff-hike.jpg",
    "instagram-boulder-colorado-flagstaff-summit.jpg",
    "instagram-boulder-creek-fest-rubber-duck-race.jpg",
    "instagram-boulder-flatirons.jpg",
    "instagram-boulder-public-library.JPG",
    "instagram-castlewood-canyon-colorado-state-park-dam.jpg",
    "instagram-castlewood-canyon-colorado-state-park-homestead.jpg",
    "instagram-county-fog-winter.jpg",
    "instagram-cu-boulder-art-museum.jpg",
    "instagram-cu-boulder-center-for-community-summer.jpg",
    "instagram-cu-boulder-purple-tulip.jpg",
    "instagram-cu-boulder-tree-spring.jpg",
    "instagram-cu-boulder-winter-engineering-center.jpg",
    "instagram-deer-under-tree.JPG",
    "instagram-denver-colorado-pavilions.jpg",
    "instagram-denver-university-college-of-music-organ.jpg",
    "instagram-estes-park-colorado-cabin.jpg",
    "instagram-free-plants.jpg",
    "instagram-fruita-colorado-dinosaur-triceratops.jpg",
    "instagram-graffiti-jack-o-lanteern.jpg",
    "instagram-graffiti-mr-game-and-watch.jpg",
    "instagram-introduction-to-information-processing.jpg",
    "instagram-lamp-post.jpg",
    "instagram-lamp-shade-fire-hydrant.jpg",
    "instagram-looney-tunes-big-screen.JPG",
    "instagram-mark-twain-sculpture.JPG",
    "instagram-ninth-door-tapas-bar-lantern.jpg",
    "instagram-pride-fruit.JPG",
    "instagram-quacktastrophy.jpg",
    "instagram-santa-fe-chili-peppers.JPG",
    "instagram-santa-fe-railyard.JPG",
    "instagram-slots-french-kiss-las-vegas.jpg",
    "instagram-slots-super-team-las-vegas.jpg",
    "instagram-snow-architecture-construction.jpg",
    "instagram-street-sign-cross-walk-graffiti.jpg",
    "instagram-sunflower.jpg",
    "instagram-superman-vintage-clothing-sexy.JPG",
    "instagram-the-rose-and-crown.jpg",
    "instagram-theater-century-vintage-train.jpg",
    "instagram-tree-autumn.jpg",
    "instagram-vargas-street-me-patrick.JPG",
    "instagram-vermont-blueberry-picking.jpg",
    "instagram-vermont-coffee-corner.jpg",
    "instagram-vermont-rocking-chair.jpg"
  ]; 
	
  // Variables to fine tune slide show
  var fadeLn    = 1000;          // in milliseconds
  var slideLn   = 7000;          // in milliseconds
  var n 				= images.length; // Number of Slides
  var index     = Math.floor(Math.random()*n); // First Slide
  var sayings   = '';            // Initialize quotes object
  var sz        = '';            // Number of Quotes
  var newIndex  = '';            // New index for quotes
  var offset    = 0;
  var one       = 1;
  var slideshow = setInterval(slideShowLoop, slideLn);

	// Initialize the slides
	for (var i = 0; i < n; ++i) {
		$('#slideshow').append('<div class="slide" id="slide'+i+'"></div>');
		$('#slide'+i).css('background-image', 'url('+path+images[i]+')');
	}

	// Get Quotes and load into array
	$.ajax({
		type: "GET",
		url: "assets/data/quotes.xml",
		dataType: "xml",
		success: function(xml) {
			sayings 	= $(xml).find('quote');
			sz   			= sayings.length;
			newIndex  = Math.floor(Math.random() * sz);

			$('#slideshow').append('<div id="quote-container"><div id="quotes"></div></div>');
			$('#quotes').html($(sayings[newIndex]).find('body').text() +
										    '<div class="author">' + $(sayings[newIndex]).find('author').text() + '</div>');
      offset = newIndex % 2 == 0 ? $('#quote-container').height() - $('#quotes').height() - 40: 0 ;
		  $('#quotes').css('top', offset);
		 },
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(errorThrown + ": " + textStatus);
			$('#quotes').hide();
		}
	});

	// Set first slide
	$('.slide').eq(index).fadeIn(fadeLn);
  $('html').css('background-image', 'url('+path+images[index]+')');

	// Start the Show
	function slideShowLoop() {
		console.log(one);
		$('.slide').eq(index).fadeOut(fadeLn);
		$('.slide').eq(index = (index + one) % n).fadeIn(fadeLn);
    $('html').css('background-image', 'url('+path+images[index]+')');
		$('#quotes').html($(sayings[newIndex = (newIndex + one) % sz]).find('body').text() +
											'<div class="author">' + $(sayings[newIndex]).find('author').text() + '</div>');
		offset = newIndex % 2 == 0 ? $('#quote-container').height() - $('#quotes').height() - 40 : 0 ;
		$('#quotes').animate({ 'top': offset }, fadeLn, offset ? "easeOutBounce" : "easeOutElastic");
	}

  // Add pausing on slides
 //  $("#slideshow").hover(
	//   function () {
	//     clearInterval(slideshow)
	//   },
	//   function () {
	//     slideshow = setInterval(slideShowLoop, slideLn);
	//   }
	// );

	$("article").mouseenter(function () {
	  	$("#controls").fadeIn();
	});
	$("article").mouseleave(function () {
	  	$("#controls").fadeOut();
	});

	$("#ptrL").click(function() {
		one = -1;
		clearInterval(slideshow);
		slideshow = setInterval(slideShowLoop, slideLn);
		one = 1;
	});
	$("#ptrR").click(function() {
		clearInterval(slideshow);
		slideshow = setInterval(slideShowLoop, slideLn);
	});

  $('body').height($(window).height());
  $(window).resize(function() {
    $('body').height($(window).height());  
  });


	$( window ).keyup( function ( e ) {
    // Right Arrow
    if ( e.keyCode == 39 ) $('#ptrR').trigger('click');
		// Left Arrow
		if ( e.keyCode == 37 ) $('#ptrL').trigger('click');
    // Space
    if ( e.keyCode == 32 ) clearInterval(slideshow);
	});

});