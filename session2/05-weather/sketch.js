var windSpeed = 0;

function setup() {
  createCanvas(500, 500);

  // die adresse unserer API
  var url = "http://api.openweathermap.org/data/2.5/weather?";
  var city = "Berlin";
  var format = "metric";
  var id = "c96429d70a1299c784e85d3a88b353a1";

  var request = url + "q=" + city + "&units=" + format + "&APPID=" + id;

  // daten abrufen
  httpGet(request, callback);
}

function draw() {
  background(0, 200, 255);

  // kreis zeichnen, dessen größe von der windgeschwindigkeit abhängt
  ellipse(250, 250, windSpeed * 100);
}

function callback(data) {
  // die antwort in ein javascript objekt umwandln
  var parsed = JSON.parse(data);

  // schreibe den wert in die konsole
  print(parsed.wind.speed);

  // in der variablen speichern
  windSpeed = parsed.wind.speed;
}
