let character0;

function preload() {
  spelunkyGuy = loadImage("Beetle.png");
}

function setup() {
  createCanvas(1900, 900);
  imageMode(CENTER);

  bug = new Character(spelunkyGuy, 100, 300, 0);
}

function keyPressed() {
  if(keyCode == RIGHT_ARROW){
    bug.go(1, 0, PI/2);
  }
  else if(keyCode == LEFT_ARROW){
    bug.go(-1, 0, (3*PI)/2);
  }
  else if(keyCode == UP_ARROW){
    bug.go(0, -1, 0);
  }
  else if(keyCode == DOWN_ARROW){
    bug.go(0, 1, PI);
  }
}

function keyReleased() {
  bug.stop();
}

function draw() {
  background(255, 255, 255);
  bug.draw();
}

class Character{
  constructor(sheet, X, Y, Rotate){
    this.characterSheet = sheet;
    this.id = 0;
    this.moveX = 0; 
    this.moveY = 0;
    this.tx = X; 
    this.ty = Y;
    this.angle = Rotate;
  }
  draw(){  
    push();  
    translate(this.tx, this.ty);
    rotate(this.angle);

    if(this.moveX == 0 && this.moveY == 0){
      image(this.characterSheet, 0, 0, 150, 150, 122, 0, 122, 122);
    }

    else{
      image(this.characterSheet, 0, 0, 150, 150, 122 * (this.id), 0, 122, 122);
    }
    
    if(frameCount % 2 == 0){
      this.id = (this.id + 1) % 6;
    }
    this.tx += 2 * this.moveX;
    this.ty += 2 * this.moveY;
    pop();
  }

  go(directionX, directionY, degree){
    this.moveX = directionX;
    this.moveY = directionY;
    this.angle = degree;
  }

  stop(){
    this.moveX = 0;
    this.moveY = 0;
  }
  
}
