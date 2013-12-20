///////////////////////////////////////////////////////////////////////////////
// File:   basecamp.js                 Feb 2013
// Author: Patrick Vargas              patrick.vargas@colorado.edu
// Description: 
//   Basic javascript to clean up code.
///////////////////////////////////////////////////////////////////////////////
$(function() {
  /* Bind reCAPTCHA BEGIN */
  $("#contact").click(function() {
    window.open(
      'http://www.google.com/recaptcha/mailhide/d?k\07501YyRI2wKXNvHUh53YqdwuOg\75\75\46c\75M0JEvRUGKMLUofZkk_8qKn91PUgGqk7kn1dZj3KAUb8\075',
      '',
      'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'
      );
    return false;
  });
  /* Bind reCAPTCHA END */
  
  /* Color Links BEGIN */
  var color = [
    "orange",
    "red",
    "yellow",
    "green"
  ];
  var colorhover = [
    "orangehover",
    "redhover",
    "yellowhover",
    "greenhover"
  ];
  var num      = $("nav a").length;
  var index    = num;
  var interval = 1000;
  var timer    = setInterval(waiting, interval);

  for (var i = 0; i < num; ++i) { $("nav a").eq(i).addClass(color[i%4]); }
  /* Color Links END */
  /*var waiting  = setInterval(function(){
    for (var i = 0; i < 5; ++i)
      $("nav a").eq(index = Math.floor(Math.random() * num)).toggleClass("hover " + colorhover[index%4]);

    setTimeout(function(){
      for (var i = 0; i < num; ++i)
        $("nav a").eq(index = ++index % num).removeClass("hover " + colorhover[index%4]);
    }, 1000);
  }, 8000);*/

  function waiting() {
    if (index != num) 
      $("nav a").eq(index).toggleClass("hover " + colorhover[index%4]);
    $("nav a").eq(index = Math.floor(Math.random() * num)).toggleClass("hover " + colorhover[index%4]);
  }
  
  // Add pausing on slides
  $("nav").hover(
  function () {
    clearInterval(timer);
    $("nav a").eq(index).toggleClass("hover " + colorhover[index%4]);
  },
  function () {
    timer = setInterval(waiting, interval);
    $("nav a").eq(index = Math.floor(Math.random() * num)).toggleClass("hover " + colorhover[index%4]);
  });

  /* Light Box BEGIN */
  $("#lightbox-test").click(function () {
    $(this).fadeOut('slow');
  });

  $("#testimonial").click(function (e) {
    // Prevent default
    e.preventDefault();

    // Set lightbox background color
    $("#lightbox-test").css({
      'background-color': 'rgb(38, 31, 39)',
      color: 'rgb(238, 231, 239)'
    });

    // Set content position of image
    $("#content").css({
        top: $(document).height() / 2 - 368,
        left: $(document).width() / 2 - 844/2
    });

    // Enter lightbox
    $("#lightbox-test").fadeIn('slow');
  });
  /* Light Box END */

  /* Site Map BEGIN */
  $.get('assets/data/sitemap.php', function(data) {
    $('#sitemap').html(data);
  });

  $("#crumbs").click( function() {
    $("#sitemap").toggle({
      duration: 'slow',
      easing: 'easeOutElastic'
    });
  });
  $("#sitemap").click( function() {
    $("#sitemap").toggle({
      duration: 'slow',
      easing: 'easeOutElastic'
    });
  });
  $( window ).keyup( function ( e ) {
    if ( e.which == 72 || e.which == 104 ) { // H
      // e.preventDefault();
    }
    if ( e.which == 77 || e.which == 109 ) { // M
      // e.preventDefault();
      $( '#crumbs' ).click( );
    }
  });

  /* Site Map End*/
});