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

var vargas = {
  hasParentClass: function( e, classname ) {
    if ( e === document ) return false;
    if ( e.classList.contains( classname ) ) {
      return true;
    }
    return e.parentNode && vargas.hasParentClass( e.parentNode, classname ); 
  },

  SidebarMenuEffects: function( ) {
    var container = document.getElementById( 'container' );
    var resetMenu = function() { 
      container.classList.remove( 'menu-open' );
    }
    var bodyClickFn = function(evt) {
      if( !vargas.hasParentClass( evt.target, 'menu' ) ) {
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
  },

  parallax: function ( index ) {
    var $content = $( '.content' );

    $( '.slide' ).each( function ( position ) {
      var $slide = $( this );
      $slide.data( 'postop', position*1000 );

      $content.scroll( function( ) {
        var scrollTop = $content.scrollTop( );
        var yPos = -( $content.scrollTop( ) / $slide.data( 'speed' ) ) + 0.125*position*1000 - 50;
        var coords = '50% ' + yPos + 'px';
        $slide.css({ 'background-position': coords });

        if ( index ) {
          $( "#navbar menu li ").removeClass( 'on' );

          switch ( Math.floor( scrollTop/1000 ) ) {
            case 0: $( "#iuser" ).addClass( 'on' );     break;
            case 1: $( "#idocument" ).addClass( 'on' ); break;
            case 2: $( "#iconsole " ).addClass( 'on' ); break;
            case 3: $( "#igraph" ).addClass( 'on' );    break;
            case 4: $( "#irecord" ).addClass( 'on' );   break;
            case 5: $( "#itam" ).addClass( 'on' );      break;
            case 6: $( "#ilinks" ).addClass( 'on' );    break;
          }

          if ( Math.floor( scrollTop/1000 ) >= 1 ) { $( "#crumbs" ).show( ); }
          else                                     { $( "#crumbs" ).hide( ); }
        }
      });
    });    
  },

  index: function( ) {
    var $content = $( '.content' );
    var scrollTop = $content.scrollTop( );

    /* Navigation Bar  */
    $( '#navbar menu li' ).bind( 'click', function( e ) {
      e.preventDefault( );
      e.stopPropagation( );

      var $anchor = $( this );
      $content.animate({
        scrollTop: $( $anchor.data( 'target' ) ).data( 'postop' )
      }, 2000,'easeInOutExpo');
    });
  },

  lightbox: function( ) {
    /* Light Box BEGIN */
    $( '#lightbox' ).click( function ( ) {
      $(this).fadeOut('slow');
    });

    $( 'img' ).each( function( ) {
      var src    = $( this ).attr( 'src' );
      var height, width;

      $( '<img>' ) // Make in memory copy of image to avoid css issues
        .attr( 'src', src )
        .load( function( ) {
          width  = this.width;   // Note: $(this).width() will not
          height = this.height;  // work for in memory images.
          if ( $( window ).height( ) < height ) {
            // width / height = x / winheight
            var ratio = width / height;
            height    = Math.floor( $( window ).height( ) * 0.9 );
            width     = Math.floor( ratio * height );
          }

          if ( $( window ).width( ) < width ) {
            var ratio  = height / width;
            width      = Math.floor( $( window ).width( ) * 0.9 );
            height     = Math.floor( ratio * width );
          }

        });
      $( this ).click( function ( ) {
        $( '#boxcontent' ).html( '<img src="' + src + '" height="' + height + '" width="' + width + '">' ).height( height ).width( width );

        // Enter lightbox
        $( '#lightbox' ).fadeIn( 'slow' );
      });
    });
  }
};