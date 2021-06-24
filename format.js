//formatting.js
//universal website formatting

function format(a){
	var hd = 
	"<title>" + a + "</title>"+
	"<link rel=\"shortcut icon\" href=\"images/masq.ico\">"+
	"<link href=\"https://fonts.googleapis.com/css?family=Bree+Serif|Cormorant+Unicase|Dancing+Script|Great+Vibes|Miss+Fajardose\" rel=\"stylesheet\">"+
	"<link href=\"normalize.css\" rel=\"stylesheet\" type=\"text/css\" />"+
	"<link href=\"learning.css\" rel=\"stylesheet\" type=\"text/css\" />"+
	"<script type = \"text/javascript\" src = \"format.js\"></script>"+
	"<style type = \"text/css\"><!--.style1 {font-size: 18px}--></style>";
	document.getElementById("head").innerHTML += (hd);
	
	
	var e = 
	"<figure><img id = \"hImg\"/></figure>"+
	"<hgroup>"+
	"<h1 align=\"center\" class = \"shadow\">Learning Center</h1>"+
	"<h2 align=\"center\" class = \"shadow\">Trademark here(tm)</h2>"+
	"</hgroup>";
	//+"<figure><img id = \"vImg\"/></figure>";
	document.getElementById("header").innerHTML = (e);
	
	document.getElementById("hImg").src = ("images/trademark.png");
	document.getElementById("hImg").height = (90);
	//document.getElementById("vImg").src = ("images/trademark.png");
	//document.getElementById("vImg").height = (90);
	
	var content = 
	"<ul>"+
	"<li><a href=\"index.html\">Home</a></li>"+
	"<li><a href=\"learn_sign.html\">Sign In</a></li>"+
	"<li><a href=\"category.html\">Learning Categories</a></li>"+
	"<li><a href=\"directory.html\">Directory</a></li>"+
	"<li><a href=\"contact.html\">Contact Us</a></li>"+
	"</ul>";
	document.getElementById("nav_list").innerHTML = (content);

	var gl =
	"<h1 id=\"Games\" class = \"shadow\">Categories</h1>"+
	"<ul>"+
	"<li><a href=\"design.html\">Design</a></li>"+
	"<li><a href=\"illustration.html\">Illustration</a></li>"+
	"<li><a href=\"business.html\">Business</a></li>"+
	"<li><a href=\"technology.html\">Technology</a></li>"+
	"<li><a href=\"photo.html\">Photo & Film</a></li>"+
	"<li><a href=\"entrepreneurship.html\">Entrepreneurship</a></li>"+
	"<li><a href=\"writing.html\">Writing</a></li>"+
	"</ul>";
	document.getElementById("game_list").innerHTML = (gl);
		
	document.getElementById("footer").innerHTML = ("Copyright &copy; 2019 Solomon Williams</br> <a href=\"mailto:Yeet@Haw.com\">Charli@Horss.com</a>");	
}













