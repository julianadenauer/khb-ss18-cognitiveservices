function setup() {
  createCanvas(800, 800);
  background(0, 200, 255);

  noStroke();

  fill(255,0,0);
  ellipse(100, 100, 100, 100);

  fill(0,255, 0);
  rect(200, 200, 200, 100);

  fill(0,0,255);
  strokeWeight(10);
  stroke(255, 255, 255);
  triangle(30, 75, 58, 20, 86, 75);

  noFill();
  strokeWeight(5);
  stroke(255, 255, 255);
  triangle(200, 400, 150, 450, 250, 450);
}

function draw() {
  // background(0, 200, 255);
  ellipse(mouseX, mouseY, 100, 100);
}
