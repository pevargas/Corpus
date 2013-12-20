<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
<!-- Made by and for Patrick Vargas -->
<html>
<head>

<link rel="shortcut icon" href="res/images/favicon.ico" />
<link rel="icon" type="image/gif" href="res/images/animated_favicon1.gif" />
<link rel="stylesheet" type="text/css" href="res/StyleGuide.css" />
<link rel="stylesheet" type="text/css" href="res/grid.css" />
<link rel="stylesheet" type="text/css" href="res/animation.css" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js" type="text/javascript"/>
<script type="text/javascript" src="res/script.js"></script>

<title>Patrick E. Vargas | Courses Taken</title>

</head>

<body>
<header class="container_12">
  <h1><a href="index.htm">Patrick E. Vargas</a></h1>
  <nav>
    <ul>
      <li id="active"><a href="resume.htm">Resume</a></li>
      <li><a href="portfolio.htm">Portfolio</a></li>
    </ul>
    <ul id="sub">
      <li class="one" id="active"><a href="catalog.xml">Courses Taken</a></li>
    </ul>
  </nav>
</header>
	
<section id="content" class="container_12">

  <div class="grid_12" style="margin-bottom:1em;">
    <h2>Resume</h2>
    <h3>Courses Taken</h3>
  </div>
  <div class="clear"></div>

  <div class="grid_3">
    <p>Click to display courses related to specific categories</p>
  </div>
  <div class="grid_9">
    <p>Click the titles to display more information.</p>
  </div>
  <div class="clear"></div>

  <div class="grid_3">
    <div class="green flip_atoc poi"><h4>Atmospheric and Oceanic Science</h4></div>
    <div class="blue flip_cs poi"><h4>Computer Science</h4></div>
    <div class="orange flip_hum poi"><h4>Humanities</h4></div>
    <div class="purple flip_mat poi"><h4>Mathematics and Science</h4></div>
    <div class="pink flip_mus poi"><h4>Music</h4></div>
    <div class="yellow flip_tam poi"><h4>Technology, Arts and Media</h4></div>
    <div class="box flip_all poi"><h4>Show All</h4></div>
    
  </div>

  <div class="grid_9">
    <xsl:for-each select="catalog/course">
    <xsl:sort select="title"/>
    <xsl:variable name="type">
      <xsl:value-of select="type" />
    </xsl:variable>
    <xsl:variable name="inProgress">
      <xsl:value-of select="pro" />
    </xsl:variable>

      <div onclick="toggleDisplay('panel_{generate-id(title)}')">
  	    <xsl:attribute name="class">
  	      <xsl:value-of select="type"/>
  	    </xsl:attribute>
  	    
        <h4 class="poi">
          <xsl:value-of select="title" />
        </h4>
        
        <xsl:if test="$inProgress = 'true'">
  	      <span class="location" style="float:right;">In Progress</span>
  	    </xsl:if>
  	    <xsl:if test="$inProgress = 'fut'">
  	      <span class="location" style="float:right;">Will Take</span>
  	    </xsl:if>
        
        <div id="panel_{generate-id(title)}" class="panel" style="padding:0.5em; display: none;">
  	      <p style="margin:0;">
  	        <b>Catalog ID: </b>
  	        <xsl:value-of select="cat" />
  	    
  	        <b style="margin-left: 1em;">Semester: </b>
  	          <xsl:choose>
  	      	    <xsl:when test="sem = 01">Fall 2009</xsl:when>
  	            <xsl:when test="sem = 02">Spring 2010</xsl:when>
  	            <xsl:when test="sem = 03">Fall 2010</xsl:when>
  	            <xsl:when test="sem = 04">Spring 2011</xsl:when>
  	            <xsl:when test="sem = 05">Summer 2011</xsl:when>
			          <xsl:when test="sem = 06">Fall 2011</xsl:when>
  	            <xsl:when test="sem = 07">Spring 2012</xsl:when>
  	  	        <xsl:when test="sem = 08">Summer 2012</xsl:when>
  	  	        <xsl:when test="sem = 09">Fall 2012</xsl:when>
  	  	        <xsl:when test="sem = 10">Spring 2013</xsl:when>
                <xsl:when test="sem = 11">Fall 2013</xsl:when>
                <xsl:when test="sem = 12">Spring 2014</xsl:when>
                <xsl:otherwise>NEVER!</xsl:otherwise>
              </xsl:choose>
  	        </p>  
  	        <p style="clear:both; margin:0;"><xsl:value-of select="description" /></p>
          </div>
      </div>
    </xsl:for-each>
  </div>
  
  <div class="clear"></div>

  <div class="grid_8 prefix_2 suffix_2">
    <div style="padding:0.5em; text-align: center;">*Course descriptions from the <a href="http://www.colorado.edu/catalog/catalog11-12/" target="_blank" rel="nofollow">University of Colorado at Boulder Catalog</a></div>
  </div>
  <div class="clear"></div>
			
</section>

<div class="container_12">
  <div class="grid_10 prefix_1 suffix_1">
    <footer>
			2013 Patrick Vargas | <a href="thanks.htm">Thanks and Appreciation</a>
		</footer>
  </div>
  <div class="clear"></div>

  <!--<div class="grid_8 prefix_2 suffix_2" onclick="next()">
  	<div id="quote"><div id="showQuote"></div></div>
  </div>
  <div class="clear"></div>-->
</div>

</body>
</html>
</xsl:template>
</xsl:stylesheet>