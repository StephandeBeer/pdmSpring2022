let player;
alet platforms;
let GRAVITY = 1;
let JUMP = -15;
let canJump = false;
let numPlat;
let xCord = [150, 550, 950];
let yCord = [500, 450, 500];
let isThick = [0, 1, 0];

function preload() {
	thickDirt = loadImage('Art/thickDirt.png');
	thinDirt = loadImage('Art/thinDirt.png');
	//bgImg = loadImage('assets/flappy_bg.png');
}

function createLevel(){
  for(let i = 0; i < numPlat; i++){
    let platform = createSprite(xCord[i], yCord[i]);
    platforms.add(platform);
    if(isThick[i] === 1){
      platform.addImage(thickDirt);
    }
    else{
      platform.addImage(thinDirt);
    }
  }
}
function setup() {
  createCanvas(1200, 800);
  player = createSprite(40, 200, 80, 80);
  player.shapeColor = color(206,32,41);
  numPlat = xCord.length;
  platforms = new Group();
  createLevel();
}

function draw() {
  background(0,181,226);
  
  camera.position.x = player.position.x + 250;
  camera.zoom = 0.5;

  canJump = false;
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