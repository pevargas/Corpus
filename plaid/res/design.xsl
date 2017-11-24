<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<!-- Made by and for Patrick Vargas -->
<html>
<head>

<title>Patrick E. Vargas | Portfolio | Design</title>

<!--( Meta information )-->
<meta name="author" content="Patrick E. Vargas" />
<meta name="description" content="This is the resume and portfolio for the strapping young man, Patrick E. Vargas." />
<meta name="keywords" content="Patrick E. Vargas, Patrick Vargas, vargasp, Computer Science, University of Colorado, CU, Boulder, CU Boulder, cs, CS, design, GLBT, LGBT, gay, Engineer, programmer, program, software, undergraduate, undergrad" />
<meta name="revised" content="Patrick Vargas, January 2012"/>
<meta name="copyright" content="&#169;2012 Patrick E. Vargas" />
<meta name="reply-to" content="patrick.vargas@colorado.edu" />

<link rel="shortcut icon" href="images/favicon.ico" />
<link rel="icon" type="image/gif" href="images/animated_favicon1.gif" />
<link rel="stylesheet" type="text/css" href="grid.css" />
<link rel="stylesheet" type="text/css" href="StyleGuide.css" />
<link rel="stylesheet" type="text/css" href="animation.css" />
<link rel="stylesheet" type="text/css" href="design_sprites.css"/>

<!--[if IE]>  
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->  
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<script type="text/javascript" src="script.js"></script>

<script type="text/javascript">
$(function() {

    $(".btn").each(function() {
        $(this)
            .css({
                "-webkit-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg)',
                "-moz-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg)'
                "-o-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg)'
                "transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg)'
            })
            .hover(function() {
                $(this).css({
                    "-webkit-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg) scale(1.05)',
                    "-moz-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg) scale(1.05)'
                    "-o-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg) scale(1.05)'
                    "transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg) scale(1.05)'
                })
            }, function() {
                $(this).css({
                    "-webkit-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg) scale(1)',
                    "-moz-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg) scale(1)'
                    "-o-transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg) scale(1)'
                    "transform": 'rotate(' + (Math.floor(Math.random()*10)-5) + 'deg) scale(1)'
                })
            });
    });
    

    $('a[rel=lightbox]').fancyZoom();
	
});
</script>

<!--( Google Analytics )-->
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-28491088-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

function toggleLightBox(imgID, wid, hei) {
	var imagel = document.getElementById('light_' + imgID);
	var imagef = document.getElementById('fade_' + imgID);
	var posx = (window.innerWidth/2) - (wid/2);
	var posy = 100//(window.innerHeight/2) - (hei/2);
	
	imagel.style.left = posx;
	imagel.style.top = posy;
	imagel.style.width = wid;
	
	if (imagel.style.display == 'none') {
		imagef.style.display='block';
		imagel.style.display='block';
	}
	else {
		imagef.style.display='none';
		imagel.style.display='none';
	}
	
}

</script>
</head>
<body onload="displayQuote();">

	<header class="container_12">
		<h1><a href="index.htm">Patrick E. Vargas</a></h1>

		<nav>
			<ul>
				<li><a href="resume.htm">Resume</a></li>
				<li id="active"><a href="portfolio.htm">Portfolio</a></li>
			</ul>
			<ul id="sub">
				<li class="two"><a href="music.htm">Music</a></li>
				<li class="one" id="active"><a href="design.xml">Design</a></li>
				<li class="three"><a href="projects.htm">Projects</a></li>
			</ul>
		</nav>
	</header>

	<section id="content" class="container_12">
		<div class="grid_12">
			<h2>Portfolio</h2>
			<h3>Design</h3>
			<p>Below is some of my design work for various organizations and classes.</p>
			<p>Click each image to enlarge and then click anywhere to diminish.</p>
			
			<div style="text-align: center;">
			
			<xsl:for-each select="gallery/image">
				
				<img src="{link}" alt="{title}" class="btn" onclick="toggleLightBox('{generate-id(title)}', {wid}, {hei})"/>
				<a href="javascript:void(0)" title="{title}" onclick="toggleLightBox('{generate-id(title)}', {wid}, {hei})">
					<img src="{link}" alt="{title}" style="display:none;" id="light_{generate-id(title)}" class="whiteContent"/>
					<span id="fade_{generate-id(title)}" style="display:none;" class="blackOverlay"></span>
				</a>
				</xsl:for-each>
			</div>

		</div>
	</section>

	<div class="container_12">
		<div class="grid_10 prefix_1 suffix_1">
			<footer>
				2013 Patrick Vargas | <a href="thanks.htm">Thanks and Appreciation</a>
			</footer>
		</div>
		<div class="clear"></div>

		<div class="grid_8 prefix_2 suffix_2" onclick="next()">
			<div id="quote"><div id="showQuote"></div></div>
		</div>
		<div class="clear"></div>
	</div>

</body>
</html>
</xsl:template>
</xsl:stylesheet>