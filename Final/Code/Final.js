let player, numPlat, platforms, meat, campfire, idle, walksheet, jumpsheet, idleanimation, walkanimation, jumpanimation;
let GRAVITY = 1;
let LIFES = 5;
let JUMP = -15;
let canJump = false;
let canDouble = false;
let gameOver = false;
let win =  false;
let hasMeat = false;
let xCord = [150, 550, 950, 1400, 1850, 1420, 1250, 655, 100, 2200, 2600, 3150, 3300, 2750, 2550, 2250, 2700, 3010, 3420, 3830, 4400];
let yCord = [500, 450, 500, 500, 400, 200, 0, -50, 0, 625, 450, 400, 350, 125, 100, 50, -220, -210, -200, -190, -180];
let isThick = [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1];
let isHalf =  [0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 1];

function preload() {
	thickDirt = loadImage('Art/thickDirt.png');
	thinDirt = loadImage('Art/thinDirt.png');
  meatImg = loadImage('Art/Meat.png');
  idle = loadImage('Art/idle.png');
  cf = loadImage('Art/campfire.png');
  walksheet = loadSpriteSheet('Art/walk.png', 80, 64, 8);
  jumpsheet = loadSpriteSheet('Art/jump.png', 80, 64, 8);

  idleanimation = loadAnimation(idle);
  walkanimation = loadAnimation(walksheet);
  jumpanimation = loadAnimation(jumpsheet);
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
    if(isHalf[i] === 1){
      platform.scale = 0.5;
    }
  }
  meat = createSprite(50, -150);
  meat.addImage(meatImg);
  campfire = createSprite(4450, -285);
  campfire.addImage(cf);
  campfire.scale = 0.5;
}
function setup() {
  createCanvas(1200, 800);
  player = createSprite(40, 350, 80, 64);
  player.addAnimation('idle', idleanimation);
  player.addAnimation('walk', walkanimation);
  player.addAnimation('jump', jumpanimation);
  player.scale = 1.5;
  numPlat = xCord.length;
  platforms = new Group();
  createLevel();
  camera.position.y += 200;
}

function respawn(){
  updateSprites(true);
  player.position.x = 40;
  player.position.y = 350;
  player.velocity.x = 0;
  player.velocity.y = 0;
}

function die(){
  updateSprites(false);
  LIFES--;
  player.velocity.y = 0;
  if(LIFES > 0){
    respawn();
  }
  else{
    gameOver = true;
    player.visible = false;
    meat.visible = false;
    platforms.removeSprites();
  }
}

function draw() {
  background(0,181,226);
  if(!gameOver && !win){
    canJump = false;
  
    if(player.position.y > 1200){
      die();
    }

    if(player.collide(platforms) && player.touching.bottom){
      player.changeAnimation('idle');
      player.velocity.x = 0;
      canJump = true;
      canDouble = true;
    }
    else{
      player.changeAnimation('jump');
      player.velocity.y += GRAVITY;
    }
    if(player.collide(meat) && !hasMeat){
      hasMeat = true; 
      meat.remove();
    }
    if(player.collide(campfire) && hasMeat){
      win = true; 
      meat.remove();
    }
    if (keyWentDown('space') && canJump){
      player.velocity.y = JUMP;
    }
    else if(keyWentDown('space') && canDouble){
      canDouble = false;
      player.velocity.y = JUMP;
      
    }
    else if(keyDown('d')){
      player.velocity.x = 5;
      player.mirrorX(1);
      if(keyDown('space')){
        player.changeAnimation('jump');
      }
      else{
        player.changeAnimation('walk');
      }
    }
    else if(keyDown('a')){
      player.velocity.x = -5;
      player.mirrorX(-1);
      if(keyDown('space')){
        player.changeAnimation('jump');
      }
      else{
        player.changeAnimation('walk');
      }
    }
    else{
      player.velocity.x = 0;
    }
  }
  else{
    textSize(250);
    textAlign(CENTER, CENTER);
    player.velocity.y = 0;
    fill('black')
    if(win){
      text('Congratulations!!!\n You Win!', camera.position.x, camera.position.y-150);
    }
    else{
      text('GAME OVER!', camera.position.x, camera.position.y-250);
      textSize(125);
      text('Press R to restart', camera.position.x, camera.position.y);
    }
  }
  if (keyWentDown('r') && gameOver){
    gameOver = false;
    LIFES = 5;
    createLevel();
    respawn();
    player.visible = true;
  }
  camera.position.x = player.position.x + 250;
  camera.zoom = 0.5;
  drawSprites();
}