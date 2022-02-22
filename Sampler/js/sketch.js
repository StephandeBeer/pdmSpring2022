let soundNew = new Tone.Player('Media/Retro.wav');

function setup() {
  createCanvas(400, 400);
  soundNew.toDestination();
}

function draw() {
  background(220);
}

function keyPressed(){
  soundNew.playbackRate = 0.5;
  soundNew.start();
}