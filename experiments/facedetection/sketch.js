/*

info how to do the requests to the vision api can be found here:
https://cloud.google.com/vision/docs/request

*/


var adresse = 'https://vision.googleapis.com/v1/images:annotate';
var apiKey ='?key=AIzaSyC3tg8DgSol0JaCBMoyRfWFj1XhIUBpVMc';
var whatsOn = "";

var noseX, noseY;

var capture;
var canvas;

function setup() {
  canvas = createCanvas(400, 300);

  capture = createCapture(VIDEO);
  capture.size(400,300);
  capture.hide();

  var button = createButton("send image");
  button.mousePressed(sendImageToApi);
}

function sendImageToApi() {
  var encodedImage = canvas.elt.toDataURL(); // translate the image into text
  encodedImage = encodedImage.split(',')[1]; // cut something off to make this work

  // konfiguriere die anfrage
  var request = {
    "requests":[
      {
        "image":{
          "content": encodedImage
        },
        "features":[
          {
            "type":"FACE_DETECTION",
            // "maxResults":10
          }
        ]
      }
    ]
  }

  httpDo(
    adresse + apiKey,
    {
      method: 'POST',

      // unser request wird vor dem senden in einen string umgewandelt
      body: JSON.stringify(request)
    },
    callback
  );
}

function draw() {
  // TODO: hintergrund verändern, wenn wir eine katze bekommen
  background(0, 200, 255);

  image(capture, 0, 0);

  textSize(100);
  text(whatsOn, 100, 100);

  fill(255,0,0);

  if(noseX != null){
    for(var i = 0; i<noseX.length; i++){
        ellipse(noseX[i], noseY[i], 10, 10);
    }
  }

}

function callback(data) {
  // print the raw data to the console
  print(data);

  noseX = [];
  noseY = [];

  // try to understand what the text means we got back (this is called "parsing")
  var parsed = JSON.parse(data);
  // print the pared data to the console
  print(parsed);

  // whatsOn = parsed.responses[0].labelAnnotations[0].description;
  // print(parsed.responses["0"].faceAnnotations["0"].landmarks[7].position.x);
  for(var i = 0; i < parsed.responses[0].faceAnnotations.length; i++){
    noseX.push(parsed.responses[0].faceAnnotations[i].landmarks[7].position.x);
    noseY.push(parsed.responses[0].faceAnnotations[i].landmarks[7].position.y);
  }
}
