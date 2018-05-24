/*
10-speech-simple

this example shows how to use the p5.speech library to recognize speech

for this to work, the library has to be loaded in the html file like this:
<script src="../../libraries/p5.speech.js"></script>

This example has to run from a webserver.
- On a local machine this can be done with Python. Open a Terminal and navigate into the root folder of this repository (the one where the libraries and session subfolders are).
- Then run the following command:
python -m SimpleHTTPServer 8000
- After that, open Chrome and navigate to:
localhost:8000/session3/10-speech-simple

This example is adopted from here:
https://github.com/IDMNYU/p5.js-speech/blob/master/examples/04simplerecognition.html
*/


var myRec = new p5.SpeechRec(); // new P5.SpeechRec object

function setup(){
	// graphics stuff:
	createCanvas(800, 400);
	background(255, 255, 255);
	fill(0, 0, 0, 255);

  // instructions:
	textSize(32);
	textAlign(CENTER);
	text("say something", width/2, height/2);

  // speech recognition initialization
  myRec.onResult = showResult; // call the showResult function when speech has been detected
	myRec.start(); // start listening
	print("started");
}

function draw(){
	// there's nothing to draw
}

function showResult(){
	print("I hear you.");
	if(myRec.resultValue == true) {
		background(192, 255, 192);
		text(myRec.resultString, width/2, height/2);
		print(myRec.resultString);
	}
}
