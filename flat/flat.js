// flat.js 
// Patrick E. Vargas
// www.vargascorpus.com
//
// References:
//   Sidebar Menu Effect by Codrops
//   http://www.codrops.com
//   Licensed under the MIT license.
//   http://www.opensource.org/licenses/mit-license.php
//

var SidebarMenuEffects = ( function( ) {

  function hasParentClass( e, classname ) {
    if ( e === document ) return false;
    if ( e.classList.contains( classname ) ) {
      return true;
    }
    return e.parentNode && hasParentClass( e.parentNode, classname ); 
  }

  function init() {
    var container = document.getElementById( 'container' );
    var resetMenu = function() { 
      container.classList.remove( 'menu-open' );
    }
    var bodyClickFn = function(evt) {
      if( !hasParentClass( evt.target, 'menu' ) ) {
        resetMenu();
        document.removeEventListener( evt.type, bodyClickFn );
      }
    }
    var button = document.getElementById( 'drawer-switch' );

    button.addEventListener( 'click', function( ev ) {
      // Stop whatever is animating
      ev.stopPropagation( );
      // Prevent the default behavior
      ev.preventDefault( );
      // Clear the class list
      container.className = 'container';
      // Add the drawer class
      container.classList.add( 'drawer' );
      setTimeout( function() {
        // Let it Animate
        container.classList.add( 'menu-open' );
      }, 25 );
      // Listen for an anti-click
      document.addEventListener( 'click', bodyClickFn );
    });

  }

  init( );
  
})( );

$( function( ) {

  /* Parallax Movement */
  var $content = $( '.content' );

  $( '.slide' ).each( function ( position ) {
    var $slide = $( this );
    // console.debug( $slide.position( ).top );
    // $slide.data.postop = position*1000;
    $slide.data( 'postop', position*1000 );

    $content.scroll( function( ) {
      console.debug( );
      var yPos = -( $content.scrollTop( ) / $slide.data( 'speed' ) ) + 0.125*position*1000 - 50;
      var coords = '50% ' + yPos + 'px';
      $slide.css({ 'background-position': coords });
    });
  });

  /* Navigation Bar  */
  $( '#navbar menu li' ).bind( 'click', function( e ) {
      e.preventDefault( );
      e.stopPropagation( );

      var $anchor = $( this );
      console.debug( $( $anchor.data( 'target' ) ).offset( ) );

      $content.animate({
        scrollTop: $( $anchor.data( 'target' ) ).data( 'postop' )
      }, 2000,'easeInOutExpo');
  });
});

  