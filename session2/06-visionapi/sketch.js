var adresse = 'https://vision.googleapis.com/v1/images:annotate';
var apiKey ='?key=AIzaSyC3tg8DgSol0JaCBMoyRfWFj1XhIUBpVMc';

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
          "maxResults":1
        }
      ]
    }
  ]
}

function setup() {
  createCanvas(500, 500);

  httpDo(
    adresse + apiKey,
    {
      method: 'POST',
      body: JSON.stringify(request),
    },
    callback
  );
}

function draw() {
  background(150, 200, 255);
}

function callback(data) {
  print(data);
}
