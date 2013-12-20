/////////////////////////////////////////////////////////////
// JavaScript File for Patrick Vargas
// patrick.vargas@colroado.edu
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Quote Wiidget
if (window.XMLHttpRequest) {
		// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	}
	else { 
		// code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.open("GET", "res/quotes.xml", false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML; 
	x = xmlDoc.getElementsByTagName("quote");
	i = Math.floor(Math.random()*x.length);

function displayQuote() {
	body = (x[i].getElementsByTagName("body")[0].childNodes[0].nodeValue);
	author = (x[i].getElementsByTagName("author")[0].childNodes[0].nodeValue);
	txt = "&quot;" + body + "&quot;<br /><div style='text-align:right;'>&mdash; " + author + "</div>";
	document.getElementById("showQuote").innerHTML = txt;
}

function next() {
	i = (i + 1) % x.length;
	displayQuote();
}

function previous() {
	if (i == 0) { i = x.length - 1; }
	else { i = (i - 1)%x.length; }
	displayQuote();
}
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Design Page

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Curriculum Vitae
function toggleDisplay(panel) {
	var pan = document.getElementById(panel);
    if (pan.style.display == "none") { pan.style.display = "block"; }
    else { pan.style.display = "none"; }
}

$(document).ready(function(){
	$(".flip_atoc").click(function(){
    	$(".atoc").slideDown("slow");
        $(".cs").slideUp("slow");
        $(".hum").slideUp("slow");
        $(".mat").slideUp("slow");
        $(".mus").slideUp("slow");
        $(".tam").slideUp("slow");
    });
    $(".flip_cs").click(function(){
        $(".cs").slideDown("slow");
        $(".atoc").slideUp("slow");
        $(".hum").slideUp("slow");
        $(".mat").slideUp("slow");
        $(".mus").slideUp("slow");
        $(".tam").slideUp("slow");
    });
    $(".flip_hum").click(function(){
        $(".hum").slideDown("slow");
        $(".cs").slideUp("slow");
        $(".atoc").slideUp("slow");
        $(".mat").slideUp("slow");
        $(".mus").slideUp("slow");
        $(".tam").slideUp("slow");
    });
    $(".flip_mat").click(function(){
        $(".mat").slideDown("slow");
        $(".cs").slideUp("slow");
        $(".hum").slideUp("slow");
        $(".atoc").slideUp("slow");
        $(".mus").slideUp("slow");
        $(".tam").slideUp("slow");
    });
    $(".flip_mus").click(function(){
        $(".mus").slideDown("slow");
        $(".cs").slideUp("slow");
        $(".hum").slideUp("slow");
        $(".mat").slideUp("slow");
        $(".atoc").slideUp("slow");
        $(".tam").slideUp("slow");
    });
    $(".flip_tam").click(function(){
        $(".tam").slideDown("slow");
        $(".cs").slideUp("slow");
        $(".hum").slideUp("slow");
        $(".mat").slideUp("slow");
        $(".mus").slideUp("slow");
        $(".atoc").slideUp("slow");
    });
    $(".flip_all").click(function(){
        $(".atoc").slideDown("slow");
        $(".cs").slideDown("slow");
        $(".hum").slideDown("slow");
        $(".mat").slideDown("slow");
        $(".mus").slideDown("slow");
        $(".tam").slideDown("slow");
    });
});
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//Other Code

/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Drawing Things
function draw_things() {
	var c = document.getElementById("myCanvas");
	var cxt = c.getContext("2d");

	cxt.fillStyle = "#09f";
	cxt.beginPath();
	cxt.arc(50, 75, 10, 0, Math.PI*2, true);
	cxt.closePath();
	cxt.fill();
	
	cxt.fillStyle = "#90f";
	cxt.beginPath();
	cxt.arc(250, 275, 20, 0, Math.PI*2, true);
	cxt.closePath();
	cxt.fill();
	
	cxt.fillStyle = "#9f0";
	cxt.beginPath();
	cxt.arc(450, 450, 30, 0, Math.PI*2, true);
	cxt.closePath();
	cxt.fill();
}
/////////////////////////////////////////////////////////////