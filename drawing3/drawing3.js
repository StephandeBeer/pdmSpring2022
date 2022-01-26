function setup() {
  
  createCanvas(400, 200);
}

function draw() {
  
  background(0);
  noStroke();
  fill(255, 255, 0);
  arc(80, 100, 150, 150, 450, 750);

  fill(255, 0, 0);
  stroke('red');
  strokeWeight(5);
  beginShape();
  curveVertex(220, 100);
  curveVertex(220, 100);
  curveVertex(230, 50);
  curveVertex(285, 25);
  curveVertex(340, 50);
  curveVertex(350, 100);
  curveVertex(350, 100);
  endShape();
  beginShape();
  vertex(220, 100);
  vertex(220, 175);
  vertex(350, 175);
  vertex(350, 100);  
  endShape();
  stroke('white');
  strokeWeight(8);
  fill(0, 0, 255);
  circle(255, 100, 40);
  circle(315, 100, 40);
}