let character0, character2, character3, character4;
let character1;

function preload() {
  spelunkyGuy = loadImage("SpelunkyGuy.png");
  goldenMonk = loadImage("GoldenMonk.png");
  //blueSheet = loadImage("");
  //meatSheet = loadImage("");
  //greenSheet = loadImage("");
}

function setup() {
  createCanvas(1500, 960);
  imageMode(CENTER);

  character0 = new Character(spelunkyGuy, 0, 300);
  character1 = new Character(goldenMonk, 300, 300);  
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW){
    character0.go(1);
    character1.go(1);
  }
  else if(keyCode == LEFT_ARROW){
    character0.go(-1);
    character1.go(-1);
  }
}

function keyReleased() {
  character0.stop();
  character1.stop();
}

function draw() {
  background(255, 255, 255);
  character0.draw();
  character1.draw();
}

class Character{
  constructor(sheet, X, Y){
    this.characterSheet = sheet;
    this.id = 0;
    this.direct = 1;
    this.move = 0; 
    this.tx = X; 
    this.ty = Y;
  }
  draw(){  
    push();  
    translate(this.tx, this.ty);
    scale(this.direct, 1);

    if(this.move == 0 ){
      image(this.characterSheet, 0, 0, 200, 200, 0, 0, 80, 80);
    }

    else{
      image(this.characterSheet, 0, 0, 200, 200, 80 * (this.id + 1), 0, 80, 80);
    }
    
    if(frameCount % 7 == 0){
      this.id = (this.id + 1) % 8;
    }
    this.tx += 2 * this.move;
    pop();
  }

  go(direction){
    this.move = direction;
    this.direct = direction;
    this.id = 3;
  }

  stop(){
    this.move = 0;
  }
}