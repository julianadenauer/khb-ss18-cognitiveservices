var adresse = 'https://vision.googleapis.com/v1/images:annotate';
var apiKey ='?key=AIzaSyC3tg8DgSol0JaCBMoyRfWFj1XhIUBpVMc';
var whatsOn = "";

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
  var encodedImage = canvas.elt.toDataURL();
  encodedImage = encodedImage.split(',')[1];

  // konfiguriere die anfrage
  var request = {
    "requests":[
      {
        "image":{
          "content": encodedImage
        },
        "features":[
          {
            "type":"LABEL_DETECTION",
            "maxResults":10
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
}

function callback(data) {
  // in die konsole schreiben, was wir zurückbekommen
  print(data);

  var parsed = JSON.parse(data);
  print(parsed);

  whatsOn = parsed.responses[0].labelAnnotations[0].description;
  print(whatsOn);
}
