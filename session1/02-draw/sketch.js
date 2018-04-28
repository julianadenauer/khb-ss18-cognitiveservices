function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 200, 255);
}

function draw() {
  noStroke();
  fill(255, 0, 0, 10);
  ellipse(mouseX, mouseY, 100, 100);
  // rect(100, 100, 200, 300);
}

function mousePressed(){
  background(0, 200, 255);
}
