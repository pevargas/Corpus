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
  // Data object for the descriptions of pictures and projects
  data: [],

  // Used in SidebarMenuEffects
  hasParentClass: function( e, classname ) {
    if ( e === document ) return false;
    if ( e.classList.contains( classname ) ) {
      return true;
    }
    return e.parentNode && vargas.hasParentClass( e.parentNode, classname ); 
  }, // vargas.hasparentclass

  // From Codrops
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
  }, // vargas.sidebarmenueffects

  // Function used for parallax scrolling
  parallax: function ( index ) {
    var $content = $( '.content' );

    $( '.slide' ).each( function ( position ) {
      var $slide = $( this );
      
      console.debug( $slide[0].childNodes );
      var caption = null;
      for ( var i = 0; i < $slide[0].childNodes.length; ++i ) {
        if ( $slide[0].childNodes[i].localName == "figcaption" ) {
          caption = $slide[0].childNodes[i];
          break;
        }
      }
      console.debug( caption );

      $slide.data( 'postop', position*1000 );

      $content.scroll( function( ) {
        var scrollTop = $content.scrollTop( );
        var yPos = -( $content.scrollTop( ) / $slide.data( 'speed' ) ) + 0.125*position*1000 - 50;
        var coords = '50% ' + yPos + 'px';
        $slide.css({ 'background-position': coords });

        if ( caption ) {
          $( caption ).css({ 'bottom': -yPos*4 - 500 });
          console.debug( yPos );
        }

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
  }, // vargas.parallax

  // a couple functions used for the homepage
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

    // Bind reCAPTCHA
    $( '#contact' ).click( function( ) {
      window.open(
        'http://www.google.com/recaptcha/mailhide/d?k\07501YyRI2wKXNvHUh53YqdwuOg\75\75\46c\75M0JEvRUGKMLUofZkk_8qKn91PUgGqk7kn1dZj3KAUb8\075',
        '',
        'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'
      );
      return false;
    });
  }, // vargas.index

  // Function used for the lightbox effect
  lightbox: function( ) {
    document.createElement( "caption" );
    document.createElement( "time" );
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    /* Light Box BEGIN */
    $( '#lightbox' ).click( function ( ) {
      $(this).fadeOut('slow');
    });

    $( 'img' ).each( function( ) {
      var src    = $( this ).attr( 'src' );
      var height, width;
      src = src.replace( "thumbs", "img" );

      $( '<img>' ) // Make in memory copy of image to avoid css issues
        .attr( 'src', src )
        .load( function( ) {
          width  = this.width;   // Note: $(this).width() will not
          height = this.height;  // work for in memory images.
          var offset = 0;

          if ( vargas.description( this ) ) { offset = 400; }

          // if ( $( window ).height( ) < height ) {
            // width / height = x / winheight
            var ratio = width / height;
            height    = Math.floor( $( window ).height( ) * 0.9 );
            width     = Math.floor( ratio * height );
          // }

          if ( $( window ).width( ) < width + offset ) {
            var ratio  = height / width;
            width      = Math.floor( $( window ).width( ) * 0.9 ) - offset;
            height     = Math.floor( ratio * width );
          }
        });
      $( this ).click( function ( ) {
        // Get Description
        var item = vargas.description( this );
        var string = '<figure><img src="' + src + '" height="' + height + '" width="' + width + '"></figure>';
        var offset = 0;
        if ( item ) {
          string += '<figcaption>';

          offset = 300;
          // Title
          if ( item.title ) {
            string += '<h2>';
            if ( item.link ) {
              string += '<a href="' + item.link + '" target="_blank" rel="nofollow">'
            }
            string += item.title;
            if ( item.link ) {
              string += '</a>'
            }
            string += '</h2>';
          }

          // Date
          if ( item.date ) {
            var date  = item.date.split( "-" );
            var month = monthNames[ parseInt( date[ 1 ] ) - 1 ];
            var year  = date[0];
            string += '<time datetime="' + item.date + '">' + month + ' ' + year + '</time>';
          }

          // Description
          if ( item.text ) {
            string += '<p>' + item.text + '</p>';
          }

          string += '</figcaption>';
        }

        $( '#boxcontent' ).html( string ).height( height ).width( width + offset );

        // Enter lightbox
        $( '#lightbox' ).fadeIn( 'slow' );
      });
    });
  }, // vargas.lightbox

  key: function( ) {
    $( window ).keyup( function ( e ) {
      var images  = $( "article img" );
      var current = $( "#boxcontent img" )[0];
      var index   = 0;

      if ( current ) {

        // Find the index of the currently displayed image on the pages
        for ( var i = 0; i < images.length; ++i ) {
          if ( images[i].src.split("/").pop() == current.src.split("/").pop() ) {
            index = i;
            break;
          }
        }
        
        // Left Arrow
        if ( e.which == 37 ) index--;
        // Right Arrow
        if ( e.which == 39 ) index++;

        index = ( index + images.length ) % images.length;
        images[ index ].click( );
      }
    });
  },

  // Function to preload the images
  preload: function( ) {
    var images = $( "article img" );
    vargas.preHelper( images );
  },

  preHelper: function( arr ) {
    $(arr).each( function () {
      $( '<img/>' )[0].src = this.src.replace( "thumbs", "img" );
    });
  },

  // Function to get the description of a project
  description: function ( e ) {
    var arr  = e.src.split( "/" );
    var item = arr[arr.length - 1];

    if ( repo ) {
      return repo[item];
    }

    return null;
  } // vargas.description

};