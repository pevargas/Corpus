///////////////////////////////////////////////////////////////////////////////
// File:   catalog.js                  Summer 2013
// Author: Patrick Vargas              patrick.vargas@colorado.edu
// Description: 
//   Basic javascript to populate catalog database
///////////////////////////////////////////////////////////////////////////////
$(function( ) {
  var easytime  = 1000;
  var easystyle = '';
  
  $( '#close' ).hide( );
  $( '#all' ).hide( );

  var createCourse = function ( title, type, sem, cat, desc )  {
    var when;
    switch (sem) {
      case '01': when = 'Fall 2009';    break;
      case '02': when = 'Spring 2010';  break;
      case '03': when = 'Fall 2010';    break;
      case '04': when = 'Spring 2011';  break;
      case '05': when = 'Summer 2011';  break;
      case '06': when = 'Fall 2011';    break;
      case '07': when = 'Spring 2012';  break;
      case '08': when = 'Summer 2012';  break;
      case '09': when = 'Fall 2012';    break;
      case '10': when = 'Spring 2013';  break;
      case '11': when = 'Fall 2013';    break;
      case '12': when = 'Spring 2014';  break;
      default:   when = 'The Future';   break;
    }

    title = document.createTextNode( title );
    cat   = document.createTextNode( cat );
    desc  = document.createTextNode( desc );
    when  = document.createTextNode( when );
   
    var liDes = document.createElement( 'li' );
    liDes.className = 'desc';
    liDes.appendChild( desc );
 
    var spCat = document.createElement( 'span' );
    spCat.className = 'cat';
    spCat.appendChild( cat );
    
    var liSem = document.createElement( 'li' );
    liSem.className = 'sem';
    liSem.appendChild( when );
    liSem.appendChild( spCat );

    var ulSub = document.createElement( 'ul' );
    ulSub.className = 'sub';
    ulSub.appendChild( liDes )
    ulSub.appendChild( liSem );

    var liCou = document.createElement( 'li' );
    liCou.className = 'course ' + type + ' sem' + sem;
    liCou.appendChild( title );    
    liCou.appendChild( ulSub );

    $( liCou ).click( function( ) {
      $(this).find( '.sub' ).toggle( );
      $("#catalog").masonry( );
    });

    return liCou;
  }

  $.ajax({
    type: 'GET',
    url: 'assets/data/catalog.xml',
    dataType: 'xml',
    success: function(xml) {
      var sayings   = $(xml).find('course').get().sort( function ( a, b ) {
        var valA = $(a).find('title').text();
        var valB = $(b).find('title').text();
        return valA < valB ? -1: valA == valB ? 0 : 1;
      });
      var sz        = sayings.length;

      $( sayings ).each(function( i ) {
        var title = $(this).find('title').text( );
        var type  = $(this).find('type').text( );
        var sem   = $(this).find('sem').text( );
        var cat   = $(this).find('cat').text( );
        var desc  = $(this).find('description').text( );

        $('#catalog').append(createCourse ( title, type, sem, cat, desc ) );
      });

      $('#catalog').masonry({ itemSelector: '.course', columnWidth: 10 });
     },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(errorThrown + ": " + textStatus);
    }
  });

  var typeArr = [ 'cs', 'tam', 'atoc', 'mus', 'mat', 'hum' ];
  var semsArr = [ 'sem01', 'sem02', 'sem03', 'sem04', 'sem05', 'sem06', 'sem07', 'sem08', 'sem09', 'sem10', 'sem11', 'sem12' ];

  $( '#buttons' ).click( function ( data ) {
    if ( 'timescale' == data.target.parentElement.id ) return;

    switch ( data.target.id ) {
      case 'buttons':
      case 'timescale':
        return;
        break;
      case 'all':
        $( '.course' ).each( function ( ) { $( this ).show( ); });
        $( '#all' ).hide( );
        break;
      case 'open':
        $( '.course' ).each( function ( ) { $( this ).find( '.sub' ).show( ) });
        $( '#open' ).hide( );
        $( '#close' ).show( );
        break;
      case 'close':
        $( '.course' ).each( function ( ) { $( this ).find( '.sub' ).hide( ) });
        $( '#close').hide( );
        $( '#open' ).show( );
        break;
      default:
        $( '#all' ).show( );
        for( var i = 0; i < typeArr.length; ++i ) {    
          if ( data.target.id == typeArr[i] )
            $( '.' + typeArr[i] ).each( function ( ) { $( this ).show( ); });
          else
            $( '.' + typeArr[i] ).each( function ( ) { $( this ).hide( ); });
        }
    }

    for ( var i = 0; i < semsArr.length; ++i ) $( '#' + semsArr[i] ).removeClass( 'selected' );
    $( '#catalog' ).masonry( );
  });

  $( '#timescale' ).click( function ( data ) {
    for ( var i = 0; i < semsArr.length; ++i ) $( '#' + semsArr[i] ).removeClass( 'selected' );
    switch ( data.target.id ) {
      case 'buttons':
      case 'timescale':
        break;
      default: 
        $( '#all' ).show( );
        $( '#' + data.target.id ).addClass( 'selected' );
        for ( var i = 0; i < semsArr.length; ++i ) {
          if ( data.target.id == semsArr[i] )
            $( '.' + semsArr[i] ).each( function ( ) { $( this ).show( ); });
          else
            $( '.' + semsArr[i] ).each( function ( ) { $( this ).hide( ); });        
        }
        break;
    }
    $('#catalog').masonry( );
  });

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
});
///////////////////////////////////////////////////////////////////////////////
