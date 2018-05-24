function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0, 200, 255);

  var distance = 30; //

  for(var x = 0; x < width; x += distance){
      fill(random(255), random(255), random(255));
      ellipse(x, 250, 30, 30);
  }
}
