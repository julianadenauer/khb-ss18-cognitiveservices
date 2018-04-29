function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 200, 255);

  var distance = 50; //

  // zeile
  for(var x = 0; x <= width; x += distance){
    for(var y = 0; y <= height; y += distance){
      fill(random(255), random(255), random(255));
      ellipse(x, y, 30, 30);
    }
  }
}
