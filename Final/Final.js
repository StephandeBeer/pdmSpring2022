let block;
let platform;
let platform2;
let GRAVITY = 1;
let JUMP = -15;
let canJump = false;
function setup() {
  // put setup code here
  createCanvas(1200, 800);
  block = createSprite(40, 200, 80, 80);
  platform = createSprite(500, 500, 1000, 100);
  platform2 = createSprite(700, 400, 500, 100);
}

function draw() {
  // put drawing code here
  background('lightgray');
  block.velocity.y += GRAVITY;
  canJump = false;
  if(block.velocity.y > 9){
    block.velocity.y = 9;
  }
  if(block.collide(platform)){
    block.velocity.x = 0;
    canJump = true;
  }
  if(block.collide(platform2)){
    block.velocity.x = 0;
    canJump = true;
  }
  if (keyWentDown('space') && canJump){
    block.velocity.y = JUMP;
  }
  if(keyDown('d')){
    block.velocity.x = 5;
  }
  else if(keyDown('a')){
    block.velocity.x = -5;
  }
  else{
    block.velocity.x = 0;
  }
  drawSprites();
}