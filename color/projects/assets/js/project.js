///////////////////////////////////////////////////////////////////////////////
// File:   project.js                  Summer 2013
// Author: Patrick Vargas              patrick.vargas@colorado.edu
// Description: 
//   Basic javascript to clean up code.
///////////////////////////////////////////////////////////////////////////////
$(function() {

  /* Light Box BEGIN */
  $( '#lightbox' ).click(function () {
    $(this).fadeOut('slow');
  });

  $( 'img' ).each( function( ) {
    var src    = $( this ).attr( 'src' );
    var height, width;

    $('<img>') // Make in memory copy of image to avoid css issues
      .attr( 'src', src )
      .load( function( ) {
        width = this.width;   // Note: $(this).width() will not
        height = this.height; // work for in memory images.
        if ( $( window ).height() < height ) {
          // width / height = x / winheight
          var raito = width / height;
          height = Math.floor( $( window ).height( ) * 0.9 );
          width = Math.floor( raito * height );
        }
      });
    $( this ).click( function ( ) {
      $( '#content' ).html( '<img src="' + src + '" height="' + height + '" width="' + width + '">' ).height( height ).width( width );

      // Enter lightbox
      $( '#lightbox' ).fadeIn( 'slow' );
    });
  });
  /* Light Box END */

  /* Cool Navigation Bar BEGIN */
  $( '#navbar a' ).bind( 'click', function( e ) {
      e.preventDefault();
      var $anchor = $( this );
      
      $( 'html, body' ).stop( ).animate({
        scrollTop: $( $anchor.attr( 'href' ) ).offset( ).top - 150
      }, 1000,'easeInOutExpo');
  });
  /* Cool Navigation Bar END */

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
  
  /* Site Map BEGIN */
  $.get('/assets/data/sitemap.php', function(data) {
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