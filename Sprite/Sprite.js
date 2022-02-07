/// < reference path="./p5.global-mode.d.ts" / >
let spunkSheet;
let x = 0, direct = 1;
let tx = 0, ty = 300;

function preload() {
  spunkSheet = loadImage("SpelunkyGuy.png");
  //goldSheet = loadImage("");
  //blueSheet = loadImage("");
  //meatSheet = loadImage("");
  //greenSheet = loadImage("");
}

function setup() {
  createCanvas(1500, 960);
  imageMode(CENTER);  
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW){
    move = 1;
    direct = 1;
  }
  else if(keyCode == LEFT_ARROW){
    move = -1;
    direct = -1;
  }
}

function keyReleased() {
move = 0;
}

function draw() {
  background(255, 255, 255);
  translate(tx, ty);
  scale(direct, 1);

  if(move == 1){
    image(spunkSheet, 0, 0, 200, 200, 80 * (x + 1), 0, 80, 80);
  }
  else if(move == -1){
    image(spunkSheet, 0, 0, 200, 200, 80 * (x + 1), 0, 80, 80);
  }
  else{
    image(spunkSheet, 0, 0, 200, 200, 0, 0, 80, 80);
  }

  if(frameCount % 7 == 0){
    x = (x + 1) % 8;
  }
  tx += 2 * move;
}