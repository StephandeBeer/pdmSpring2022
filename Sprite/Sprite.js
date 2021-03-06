let character0, character1, character2, character3, character4;

function preload() {
  spelunkyGuy = loadImage("SpelunkyGuy.png");
  goldenMonk = loadImage("GoldenMonk.png");
  blue = loadImage("Blue.png");
  meatBoy = loadImage("MeatBoy.png");
  green = loadImage("Green.png");
}

function setup() {
  createCanvas(1900, 900);
  imageMode(CENTER);

  character0 = new Character(spelunkyGuy, random(80, 1820), random(80, 820));
  character1 = new Character(goldenMonk, random(80, 1820), random(80, 820));
  character2 = new Character(blue, random(80, 1820), random(80, 820));
  character3 = new Character(meatBoy, random(80, 1820), random(80, 820))
  character4 = new Character(green, random(80, 1820), random(80, 820))
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW){
    character0.go(1);
    character1.go(1);
    character2.go(1);
    character3.go(1);
    character4.go(1);
  }
  else if(keyCode == LEFT_ARROW){
    character0.go(-1);
    character1.go(-1);
    character2.go(-1);
    character3.go(-1);
    character4.go(-1);
  }
}

function keyReleased() {
  character0.stop();
  character1.stop();
  character2.stop();
  character3.stop();
  character4.stop();
}

function draw() {
  background(255, 255, 255);
  character0.draw();
  character1.draw();
  character2.draw();
  character3.draw();
  character4.draw();
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
      image(this.characterSheet, 0, 0, 150, 150, 0, 0, 80, 80);
    }

    else{
      image(this.characterSheet, 0, 0, 150, 150, 80 * (this.id + 1), 0, 80, 80);
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