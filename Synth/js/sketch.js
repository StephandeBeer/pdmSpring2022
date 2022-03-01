const synth = new Tone.Synth().toDestination();

let keys = {
  'a' : 'A4',
  's' : 'B4',
  'd' : 'C4',
  'f' : 'D4',
  'g' : 'E4',
  'h' : 'F4',
  'j' : 'G4',
  'k' : 'A5',
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

function keyPressed(){
  //synth.triggerAttackRelease("C4", "8n"); WORKS
  let Audio = keys[key];
  console.log(Audio);
  synth.triggerAttackRelease(Audio, "8n");
}

class mySynth{
  constructor(/*sheet, X, Y, Rotate*/){
  //   this.characterSheet = sheet;
  //   this.id = 0;
  //   this.moveX = 0; 
  //   this.moveY = 0;
  //   this.tx = X; 
  //   this.ty = Y;
  //   this.angle = Rotate;
  //   this.dead = false;
  //   this.clicked = false;
  }
}