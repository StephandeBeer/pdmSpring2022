function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  let c = color(255, 0, 0, 100)
  fill(c);
  noStroke();
  ellipse(200, 135, 200, 200); 

  c = color(0, 0, 255, 100);
  fill(c);
  ellipse(130, 250, 200, 200);

  c = color(0, 255, 0, 100);
  fill(c);
  ellipse(270, 250, 200, 200);
}