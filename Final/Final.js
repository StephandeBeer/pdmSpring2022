let block;

function setup() {
  // put setup code here
  createCanvas(1200, 800);
  block = createSprite(20, 20, 80, 80);
}

function draw() {
  // put drawing code here
  background('lightgray');
  if(keyDown('d')){
    block.velocity.x = 5;
  }
  else{
    block.velocity.x = 0;
  }
  drawSprites();
}