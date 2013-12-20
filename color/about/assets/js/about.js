///////////////////////////////////////////////////////////////////////////////
// File:   about.js                   Spring 2013
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