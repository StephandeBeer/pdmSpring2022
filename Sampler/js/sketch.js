const { Tone } = require("tone/build/esm/core/Tone");

//let soundNew = new Tone.Player('Media/Retro.wav');
let button1,button2,button3,button4, button5;

let sounds = new Tone.Players({
  clap: 'clap.wav',
  highHat: 'highHat.wav',
  kick: 'kick.wav',
  metal: 'metal.wav',
  snare: 'snare.wav'
})

function setup() {
  createCanvas(400, 400);
  //soundNew.toDestination();

  //for players
  sounds.toDestination();
  button1 = createButton("Clap", 'clap');
  button1.position(200, 300);
  button1.mousePressed(buttonSound);
}

function draw() {
  background(220);
}

function buttonSound(sound='clap') {
  sounds.player(sound).start();
}

// function keyPressed(){
//   soundNew.playbackRate = 0.5;
//   soundNew.start();

//   //for Players
//   sounds.player('name').start();
// }