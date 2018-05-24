/*
12-speech-control

this example shows how to use the p5.speech library to control what is drawn.
this only works for approximtely 30 seconds. after that the google server cuts off.

for this to work, the library has to be loaded in the html file like this:
<script src="../../libraries/p5.speech.js"></script>

This example has to run from a webserver.
- On a local machine this can be done with Python. Open a Terminal and navigate into the root folder of this repository (the one where the libraries and session subfolders are).
- Then run the following command:
python -m SimpleHTTPServer 8000
- After that, open Chrome and navigate to:
localhost:8000/session3/11-speech-simple

This example is adopted from here:
https://github.com/IDMNYU/p5.js-speech/blob/master/examples/05continuousrecognition.html
*/


var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = true; // allow partial recognition (faster, less accurate)

var x, y;
var dx, dy;

function setup()
{
	// graphics stuff:
	createCanvas(800, 600);
	background(255, 255, 255);
	fill(0, 0, 0, 255);
	x = width/2;
	y = height/2;
	dx = 0;
	dy = 0;

	// instructions:
	textSize(20);
	textAlign(LEFT);
	text("zeichne: hoch, runter, links, rechts, neu", 20, 20);

	myRec.onResult = parseResult; // recognition callback
	myRec.start(); // start engine
	console.log("started");
}

function draw()
{
	ellipse(x, y, 5, 5);
	x+=dx;
	y+=dy;

	// define what happens when we reach the limits of the canvas
	if(x<0) x = width;
	if(y<0) y = height;
	if(x>width) x = 0;
	if(y>height) y = 0;
}

function parseResult()
{
	// recognition system will often append words into phrases.
	// so hack here is to only use the last word:
	var mostrecentword = myRec.resultString.split(' ').pop();
	if(mostrecentword.indexOf("links")!==-1) { dx=-1;dy=0; }
	else if(mostrecentword.indexOf("rechts")!==-1) { dx=1;dy=0; }
	else if(mostrecentword.indexOf("hoch")!==-1) { dx=0;dy=-1; }
	else if(mostrecentword.indexOf("runter")!==-1) { dx=0;dy=1; }
	else if(mostrecentword.indexOf("neu")!==-1) { background(255); }
	console.log(mostrecentword);
}
