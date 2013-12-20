///////////////////////////////////////////////////////////////////////////////
// File:   dm1-music.js                Spring 2013
// Author: Patrick Vargas              patrick.vargas@colorado.edu
// Description: 
//   Implments the music on homepage.
///////////////////////////////////////////////////////////////////////////////
$(function() {

  // Define a general function to toggle music playback
  var toggleMusic = function () {
    // Get players
    var player = document.getElementById('sploosh');
    
    // Play player if paused and visa versa
    if (player.paused) { player.play(); }
    else { player.pause(); }
  }

  // Play/Pause functionality
  $("#sound").click(function(e) {
    // Prevent default and get link
    e.preventDefault();

    toggleMusic();
    
    $(this).toggleClass('playing');
    $("#track").toggle('slow');
  });

  // Allow user to seek
  $("#playing").draggable({ 
    axis: "x",
    revert: true,
    cursor: "move",
    scroll: false,
    revertDuration: 0,
    stop: function(event, ui) {
      var player = document.getElementById('sploosh');
      offset = (ui.position.left / $(window).width()) * player.duration;
      player.currentTime = player.currentTime + offset;
    }
  });

  // Update the position of the song
  $("#sploosh").bind("timeupdate", function() {
    var timepast = this.currentTime;
    var duration = this.duration;
    // Width as a percentage for the visual aspect
    var width    = ($(window).width() * String(timepast / duration));

    $("#track").width(width);
  });

  // Clean up once song has finished
  $("#sploosh").bind("ended", function(){
    $("#track").toggle();
    $("#sound").toggleClass('playing');
  });

  // Bind the space bar to toggle music/video
  $('body').keyup(function(e){
    // user has pressed space
    if(e.keyCode == 32) { 
      toggleMusic();
      $('#sound').toggleClass('playing');
      $("#track").toggle('slow');
    }
  });
});