const { Tone } = require("tone/build/esm/core/Tone");

let soundNew = new Tone.Player('Media/Retro.wav');
let sounds = new Tone.Players({
  // 'name' : 'file path' ,
  //rinse and repeat for all files
  clap: 'clap.wav',
  highHat: 'highHat.wav',
  kick: 'kick.wav',
  metal: 'metal.wav',
  snare: 'snare.wav'
})

function setup() {
  createCanvas(400, 400);
  soundNew.toDestination();

  //for players
  sounds.toDestination();
}

function draw() {
  background(220);
}

function keyPressed(){
  soundNew.playbackRate = 0.5;
  soundNew.start();

  //for Players
  sounds.player('name').start();
}