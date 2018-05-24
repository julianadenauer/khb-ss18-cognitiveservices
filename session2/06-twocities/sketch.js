var windSpeed1 = 0; // globale variable, weil ich aus mehreren funktionen darauf zugreifen möchte
var windSpeed2 = 0;

var appId = "&APPID=c96429d70a1299c784e85d3a88b353a1&units=metric";
var adresse = "http://api.openweathermap.org/data/2.5/weather?q=";

function setup() {
  createCanvas(500, 500);

  // daten abrufen
  // sorry, diese lösung mit den zwei callbacks ist ein bisschen messy...
  httpGet(adresse + "Innsbruck" + appId, callback);
  httpGet(adresse +  "Berlin" + appId, callback2);
}

function draw() {
  background(0, 200, 255);

  // kreis zeichnen, dessen größe von der windgeschwindigkeit abhängt
  ellipse(150, 250, windSpeed1 * 20);
  ellipse(350, 250, windSpeed2 * 20);
}

function callback(data) {
  // die antwort in ein javascript objekt umwandln
  var parsed = JSON.parse(data);

  // schreibe den wert in die konsole
  print(parsed.wind.speed);

  // in der variablen speichern
  windSpeed1 = parsed.wind.speed;
}

function callback2(data) {
  // die antwort in ein javascript objekt umwandln
  var parsed = JSON.parse(data);

  // schreibe den wert in die konsole
  print(parsed.wind.speed);

  // in der variablen speichern
  windSpeed2 = parsed.wind.speed;
}
