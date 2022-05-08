let player;
let platform;
let platform2;
let platforms;
let GRAVITY = 1;
let JUMP = -15;
let canJump = false;
function createLevel(){
  platform = createSprite(250, 500, 500, 100);
  platform.shapeColor = color(0,154,23);
  platform2 = createSprite(750, 450, 500, 200);
  platform2.shapeColor = color(0,154,23);
}
function setup() {
  // put setup code here
  createCanvas(1200, 800);
  player = createSprite(40, 200, 80, 80);
  player.shapeColor = color(206,32,41);
  createLevel();
  platforms = new Group();
  platforms.add(platform);
  platforms.add(platform2);
}

function draw() {
  // put drawing code here
  background(0,181,226);
  
  camera.position.x = player.position.x + 250;
  camera.zoom = 0.5;

  canJump = false;
  // if(player.velocity.y > 25){d
  //   player.velocity.y = 25;
  // }
  if(player.collide(platforms)){
    player.velocity.x = 0;
    canJump = true;
  }
  else{
    player.velocity.y += GRAVITY;
  }
  if (keyWentDown('space') && canJump){
    player.velocity.y = JUMP;
  }
  if(keyDown('d')){
    player.velocity.x = 5;
  }
  else if(keyDown('a')){
    player.velocity.x = -5;
  }
  else{
    player.velocity.x = 0;
  }
  drawSprites();
}