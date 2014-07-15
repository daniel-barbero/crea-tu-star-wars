	
var caja0=document.getElementById("credits");
var caja=document.getElementById("parrafos");
var p=caja.getElementsByTagName("p");
var posicion=0;


function sizeP(){
	for (var n = 0; n <= p.length - 1; n++) {
			var incremento;
			if(n==0){
				incremento=1;
			}
			p[n].style.fontSize= incremento+"em";

			caja0.style.perspective=300;
			caja0.style.webkitTransform="rotateX(25deg)";
			caja0.style.webkitTransition="all 1s";

			incremento=incremento+0.3;
	}	
}

function restaurar(){
		for (var n = 0; n <= p.length - 1; n++) {
			p[n].style.fontSize= 1+"em";
			caja0.style.perspective=0;
			caja0.style.webkitTransform="";
		}
}

function LoadCSS(nombre_css) {  
	var d = new Date(); // se crea un objeto tipo fecha
	var e = document.getElementById(nombre_css);
	if (e == undefined) {
		var cssLink=document.createElement("link");
		cssLink.setAttribute("rel", "stylesheet");
		cssLink.setAttribute("type", "text/css");
		cssLink.setAttribute("href", nombre_css+".css?rnd="+d.getTime()); // el parámetro "rnd" vale los milisegundos
		cssLink.setAttribute("id",nombre_css);
		document.getElementsByTagName("head")[0].appendChild(cssLink);
	
	var audio=document.createElement("audio");
	audio.setAttribute("src" ,"http://csstarwars.s3.amazonaws.com/star-wars.m4a" );
	audio.setAttribute("id", "audio");
	audio.setAttribute("autobuffer", "autobuffer");
	document.getElementsByTagName("body")[0].appendChild(audio);

	setTimeout("document.getElementById('audio').play()", 4000);
	}
}

function original(){
document.getElementById("h1").innerHTML="STAR<br/>WARS";
document.getElementById("p_one").innerHTML="It   is   a   period   of   civil   war.Rebel     spaceships,     striking from  a hidden base,  have won their    first     victory     against the     evil     Galactic     Empire.<br/>";
document.getElementById("p_two").innerHTML="During     the     battle,    Rebel spies managed to steal secret plans      to      the  Empire&#8217;s ultimate  weapon,   the DEATH STAR,     an    armored    space station    with   enough  power to destroy an entire planet.<br/>";
document.getElementById("p_three").innerHTML="Pursued    by     the     Empire&#8217;s sinister      agents,      Princess Leia  races  home  aboard  her starship,    custodian    of    the stolen plans that can save her people           and           restore freedom   to    the    galaxy. . . .";
}


		

