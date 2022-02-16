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
    bug.go(1);
    //bug.r(PI/2);
  }
  else if(keyCode == LEFT_ARROW){
    bug.go(-1);
  }
  else if(keyCode == UP_ARROW){
    //bug.r(0);
  }
  else if(keyCode == DOWN_ARROW){
    //bug.r(PI);
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
    this.direct = 1;
    this.move = 0; 
    this.tx = X; 
    this.ty = Y;
    this.angle = Rotate;
  }
  draw(){  
    push();  
    translate(this.tx, this.ty);
    scale(this.direct, 1);
    rotate(this.angle);

    if(this.move == 0){
      image(this.characterSheet, 0, 0, 150, 150, 122, 0, 120, 120);
    }

    //bug is 120 so move 122  
    else{
      image(this.characterSheet, 0, 0, 150, 150, 122 * (this.id), 0, 120, 120);
    }
    
    if(frameCount % 30 == 0){
      this.id = (this.id + 1) % 6;
    }
    this.tx += 2 * this.move;
    pop();
  }

  go(direction){
    this.move = direction;
    this.direct = direction;
    this.id = 3;
  }

  r(degree){
    this.angle = degree;
  }

  stop(){
    this.move = 0;
  }
  
}
