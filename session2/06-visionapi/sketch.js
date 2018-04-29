var adresse = 'https://vision.googleapis.com/v1/images:annotate';
var apiKey ='?key=AIzaSyC3tg8DgSol0JaCBMoyRfWFj1XhIUBpVMc';
var whatsOn = "";

// konfiguriere die anfrage
var request = {
  "requests":[
    {
      "image":{
        "source":{
          "imageUri":
            "http://www.zooroyal.de/magazin/wp-content/uploads/2017/06/hund-im-sommer-760x560.jpg"
        }
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

function setup() {
  createCanvas(500, 500);

  // anfrage senden
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
  background(150, 200, 255);
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
