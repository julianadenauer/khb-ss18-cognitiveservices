var windSpeed = 0; // globale variable, weil ich aus mehreren funktionen darauf zugreifen möchte

var appId = "&APPID=c96429d70a1299c784e85d3a88b353a1&units=metric";
var adresse = "http://api.openweathermap.org/data/2.5/weather?q=";

function setup() {
  createCanvas(500, 500);

  // daten abrufen
  setInterval(getWeather, 5000);
}

function getWeather(){
  httpGet(adresse + "Berlin" + appId, weatherCallback);
}

function draw() {
  background(0, 200, 255);

  // kreis zeichnen, dessen größe von der windgeschwindigkeit abhängt
  ellipse(250, 250, windSpeed * 20);
}

function weatherCallback(data) {
  // die antwort in ein javascript objekt umwandln
  var parsed = JSON.parse(data);

  // schreibe den wert in die konsole
  print(parsed.wind.speed);

  // in der variablen speichern
  windSpeed = parsed.wind.speed;
}
