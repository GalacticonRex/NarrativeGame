var WIDTH = 500;
var HEIGHT = 500;

var main = document.getElementById( "main" );	// <body> ... </body>
var canvas = document.getElementById( "draw" ); // <canvas></canvas>
var draw = canvas.getContext("2d");

draw["width"] = WIDTH;
draw["height"] = HEIGHT;

draw.font = "30px Arial";
main.onkeydown = function( kc ){
	draw.fillText( String.fromCharCode( kc.keyCode ), 
					Math.random()*WIDTH,
					Math.random()*HEIGHT );
};