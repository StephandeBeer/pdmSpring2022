let bug, bugArray; 
let score = 0;
let speed = 3;
let time = 30;
let rad;

function preload() {
  Beetle = loadImage("Beetle.png");
}

function setup() {
  createCanvas(1900, 900);
  imageMode(CENTER);
  bugArray = [];
  rad = [PI/2, (3*PI)/2, PI, 0];
}
function keyReleased() {
  bug.stop();
}

function draw() {
  background(255, 255, 255);
  
  for(let i = 0; i < 30; i++){
    let temp = random(rad);
    bugArray.push(new Character(Beetle, random(-50, 1950), random(-50, 950),temp ));
    bugArray[i].draw();
  }

  for(let j = 0; j < 30; j++){
    ang = bugArray[j].Angle();
    if(ang == PI/2){
      bugArray[j].go(1, 0);
    }
    else if(ang == (3*PI)/2){
      bugArray[j].go(-1, 0);
    }
    else if(ang == 0){
      bugArray[j].go(0, -1);
    }
    else if(ang == PI){
      bugArray[j].go(0, 1);
    }
  } 
  
  textSize(36);
  textFont('Georgia');
  text("Time: "+time, 50, 50 );
  text("Score: "+score, 50, 80 );
  if(frameCount % 60 == 0){
    if(time > 0){
      time--;
    }
  }
  if(time<=0){
    textSize(150);
    fill('Red');
    text("GAME OVER", 250, 350 );
  }
}
function mouseClicked() {
  for(let g = 0; g < 30; g++){
    bugArray[g].Clicked();
  }
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
    this.dead = false;
    this.clicked = false;
  }
  draw(){  
    push(); 
    translate(this.tx, this.ty);
    rotate(this.angle);

    if(!this.dead){
      if(this.moveX == 0 && this.moveY == 0){
        image(this.characterSheet, 0, 0, 124, 124, 122, 0, 122, 122);
      }
      else{
        image(this.characterSheet, 0, 0, 124, 124, 122 * (this.id), 0, 122, 122);
      }
      if(frameCount % 2 == 0){
        this.id = (this.id + 1) % 6;
      }
      this.tx += speed * this.moveX;
      this.ty += speed * this.moveY;
    }
    if(this.dead){
      image(this.characterSheet, 0, 0, 124, 124, 122 * 6, 0, 122, 122);
    }

    if(this.clicked&&(time>0)&&this.dead==false){
      if(mouseX>=(this.tx -61) && mouseX<=(this.tx +61) && mouseY>=(this.ty -61) && mouseY<=(this.ty +61)){
        this.dead = true;
        score=score+1;
        speed=speed+0.55;        
      }
      else{
        this.clicked = false;
      }
    }
    
    if(this.tx>=2000){
      this.tx=0;
    }
    if(this.ty>=1000){
      this.ty=0;
  }
    pop();
  }

  go(directionX, directionY){
    this.moveX = directionX;
    this.moveY = directionY;
  }

  Clicked(){
    this.clicked = true;
  }

  Angle(){
    return this.angle;
  }

  stop(){
    this.moveX = 0;
    this.moveY = 0;
  }

}
