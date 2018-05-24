/*
12-speech-to-sentiment

this example shows how to use the p5.speech library to recognize speech and then send it to the google language API to analyse the sentiment of what was said.
note that the sentiment is analyzed purely on a text level, not on a tone level.

for this to work, the library has to be loaded in the html file like this:
<script src="../../libraries/p5.speech.js"></script>

This example has to run from a webserver.
- On a local machine this can be done with Python. Open a Terminal and navigate into the root folder of this repository (the one where the libraries and session subfolders are).
- Then run the following command:
python -m SimpleHTTPServer 8000
- After that, open Chrome and navigate to:
localhost:8000/session3/12-speech-to-sentiment

*/

var myRec = new p5.SpeechRec(); // new P5.SpeechRec object
myRec.continuous = true; // do continuous recognition
myRec.interimResults = false; // allow partial recognition (faster, less accurate)

var endpoint = 'https://language.googleapis.com/v1/documents:analyzeSentiment';
var apiKey = 'AIzaSyC3tg8DgSol0JaCBMoyRfWFj1XhIUBpVMc';

var speechInput = "";
var sentiment = "";

// our dummy request
var request = {
  "encodingType": "UTF8",
  "document": {
    "type": "PLAIN_TEXT",
    "content": ""
  }
}

function setup(){
  // graphics stuff:
  createCanvas(800, 600);
  background(255, 255, 255);

  textSize(32);
  textAlign(CENTER);
  text("sprich mit mir", 10, 10, 780, 580);

  myRec.onResult = gotSpeechResult; // recognition callback
  myRec.start(); // start engine
}

function draw(){
  if(speechInput != ""){
    background(192, 255, 192);
    text(speechInput, 10, 10, 780, 280);
    text(sentiment, 10, 300, 780, 280);
  }
}

function gotSpeechResult(){
  speechInput = myRec.resultString;
  console.log(speechInput);
  console.log("sending text to sentiment analysis");
  analyzeSentiment(speechInput);
}

function analyzeSentiment(text){
  // put what we heard into the request
  request.document.content = text;

  // do the request
  httpDo(
    endpoint + "?key=" + apiKey,
    {
      method: 'POST',
			body: JSON.stringify(request)
    },
    gotSentimentResult
  );
}

function gotSentimentResult(res){
  // write the response to our console
  console.log(res);

  // read json data to js object
  var data = JSON.parse(res);

  sentiment = data.documentSentiment.score;
  console.log("score: " + data.documentSentiment.score);

}
