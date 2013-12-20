///////////////////////////////////////////////////////////////////////////////
// File:   dm1.js                      Mar 2013
// Author: Patrick Vargas              patrick.vargas@colorado.edu
// Description: 
//   jQuery to operate light box.
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
   
  $("#lightbox").click(function () {
    var player = document.getElementById('vid');
    
    player.pause();

    $(this).fadeOut('slow');
    $('#vid').fadeOut('slow');
    $('#poster').fadeOut('slow');
    $("#content figure").html('&nbsp;');
  });

  $("#veghead").click(function (e) {
    // Prevent default and get link
    e.preventDefault();
    var link = $(this).attr("href");

    // Set lightbox background color
    $("#lightbox").css({
      'background-color': '#767025',
      color: '#e2dda4'
    });

    // Set content position of image
    $("#content").css({
        top: $(document).height() / 2 - 320 / 2,
        left: $(document).width() / 2 - 480 / 2,
        height: 320,
        width: 480
    });
    $("#content figure").html('<img src="'+link+'" alt="veg head futurama patrick vargas">');

    // Enter lightbox
    $("#lightbox").fadeIn('slow');
  });

  $("#sequential").click(function (e) {
    // Prevent default and set height and gutter
    e.preventDefault();
    var h = 360 + 25;

    // Set lightbox background color
    $("#lightbox").css({
      'background-color': '#384053',
      color: '#aeb6c8'
    });

    // Set content position of image
    $("#content").css({
      top: $(document).height() / 2 - h,
      left: $(document).width() / 2 - 490 / 2,
      height: h*2 + 20,
      width: 480
    });
    $("#content figure").html('<img src="assets/img/seq1.jpg" class="seq" alt="sequential images patrick vargas"><img src="assets/img/seq2.jpg" class="seq seq2" alt="sequential images patrick vargas">');

    // Enter lightbox
    $("#lightbox").fadeIn('slow');
  });

  $("#tableau").click(function (e) {
    // Prevent default and get link
    e.preventDefault();
    var link = $(this).attr("href");

    // Set lightbox background color
    $("#lightbox").css({
      'background-color': '#3c3c3c',
      color: '#b2b2b2'
    });

    // Set content position of image
    $("#content").css({
      top: $(document).height() / 2 - 539 / 2,
      left: $(document).width() / 2 - 470 / 2,
      height: 539,
      width: 470
    });
    $("#content figure").html('<img src="'+link+'" alt="tableau vivant patrick vargas">');

    // Enter lightbox
    $("#lightbox").fadeIn('slow');
  });
  
  $("#stopmotion").click(function (e) {
    // Prevent default and get link
    e.preventDefault();
    var link = $(this).attr("href");

    // Set lightbox background color
    $("#lightbox").css({
      'background-color': '#001d63',
      color: '#9ebaff'
    });

    // Set content position of image
    $("#content").css({
      top: $(document).height() / 2 - 480 / 2,
      left: $(document).width() / 2 - 720 / 2,
      height: 480,
      width: 720
    });
    $("#vid").css({
      top: $(document).height() / 2 - 480 / 2,
      left: $(document).width() / 2 - 720 / 2
    });
    $("#poster").css({
      top: $(document).height() / 2 - 480 / 2,
      left: $(document).width() / 2 - 720 / 2,
    });

    // Enter lightbox and video
    $("#lightbox").fadeIn('slow');
    $('#vid').fadeIn('slow');
    $('#poster').fadeIn('slow');
  });

  // Show poster at begginging
  $("#vid").bind("timeupdate", function() {
    var timepast  = this.currentTime;
    var duration  = this.duration;
    var begining  = timepast == 0 ? false : true;

    if (begining) {
      $('#poster').fadeOut(100);
    }
  });

  // Show poster once movie has ended
  $("#vid").bind("ended", function(){
    $('#poster').fadeIn(1000); 
  });

  // Play/Pause functionality
  $("#poster").click(function(e) {
    var player = document.getElementById('vid');
    player.play();
    $("#vid").attr("controls", "controls");
  });
  
  // Extra Info
  $('#grok').mouseenter(function () {
    $('#main').html('<blockquote>The word "grok" was coined by Robert Heinlein in his 1961 book Stranger in a Strange Land. Grok loosely translates to a "deep understanding of something."</blockquote>' +
      '<cite><a href="//redwood.colorado.edu/schaal/dm1b/project-grok.html" target="_blank" rel="nofollow">Assignment Description</a></cite>');
  });
  $('#veghead').mouseenter(function () {
    $('#main').html('<blockquote>Create a human-like face using photoshop\'s cut and paste tools and other techniques learned in class.</blockquote>' +
      '<cite><a href="//redwood.colorado.edu/schaal/dm1b/project-veg-head.html" target="_blank" rel="nofollow">Assignment Description</a></cite>');
  });
  $('#sequential').mouseenter(function () {
    $('#main').html('<blockquote>Cut-and-paste culture; the idea of William Burrough\'s cut-up method is prevalent in the media that we encounter on a daily basis, we are constantly exposed to a mash-up of ideas.</blockquote>' +
      '<cite><a href="//redwood.colorado.edu/schaal/dm1b/project-sequential-images.html" target="_blank" rel="nofollow">Assignment Description</a></cite>');
  });
  $('#tableau').mouseenter(function () {
    $('#main').html('<blockquote>Traditionally, costumed actors would be carefully posed on stage along with props to recreate a painting.</blockquote>' +
      '<cite><a href="//redwood.colorado.edu/schaal/dm1b/project-tableau.html" target="_blank" rel="nofollow">Assignment Description</a></cite>');
  });
  $('#sound').mouseenter(function () {
    $('#main').html('<blockquote>Electronically produced music is relatively easy to make, the challenge is to keep it interesting for the duration of the song.</blockquote>' +
      '<cite><a href="//redwood.colorado.edu/schaal/dm1b/project-sound.html" target="_blank" rel="nofollow">Assignment Description</a></cite>');
  });
  $('#stopmotion').mouseenter(function () {
    $('#main').html('<blockquote>Create a narrative using the method of stop motion animation.</blockquote>' +
      '<cite><a href="//redwood.colorado.edu/schaal/dm1b/project-stop-motion.html" target="_blank" rel="nofollow">Assignment Description</a></cite>');
  });

  $(".penguin").click(function(){
    $(".mountains-lg").toggleClass("reverse");
    $(".mountains-md").toggleClass("reverse");
    $(".mountains-sm").toggleClass("reverse");
    $(".clouds-md").toggleClass("reverse");
    $(".clouds-sm").toggleClass("reverse");
    $("#penguin-click").toggleClass("reverse");
    $("#penguin").toggleClass("reverse reverse-img");
  });

});