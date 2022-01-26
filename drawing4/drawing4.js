function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background(0, 0, 255);
  stroke('white');
  strokeWeight(8);
  fill(0, 125, 0);
  circle(200, 200, 250);

  fill(255, 0, 0);
  beginShape();
  vertex(70, 165);
  vertex(170, 165);
  vertex(200, 65);
  vertex(230, 165);
  vertex(330, 165);
  vertex(255, 215);
  vertex(285, 305);
  vertex(200, 255);
  vertex(115, 305);
  vertex(145, 215);
  endShape(CLOSE);
}