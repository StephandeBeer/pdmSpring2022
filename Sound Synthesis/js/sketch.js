let feq = 800;
let lazer = false;

function preload() {
  trooper = loadImage("trooper.jpg");
}

const synth = new Tone.Synth({
  "oscillator": {
    "type": "sawtooth"
},
"envelope": {
    "attack": 0.001,
    "decay": 0.1,
    "sustain": 0.5,
    "release": 1.2
}
});

var bgSynth = new Tone.DuoSynth({"vibratoAmount"  : 0.5 ,
"vibratoRate"  : 5 ,
"harmonicity"  : 1.5 ,
"voice0"  : {
  "volume"  : -10 ,
  "portamento"  : 0 ,
  "oscillator"  : {
      "type"  : "sine"
  }  ,
  "filterEnvelope"  : {
    "attack"  : 0.01 ,
    "decay"  : 0 ,
    "sustain"  : 1 ,
    "release"  : 0.5
  }  ,
  "envelope"  : {
    "attack"  : 0.01 ,
    "decay"  : 0 ,
    "sustain"  : 1 ,
    "release"  : 0.5
  }
}  ,
"voice1"  : {
  "volume"  : -20 ,
  "portamento"  : 0 ,
  "oscillator"  : {
      "type"  : "sine"
  }  ,
  "filterEnvelope"  : {
    "attack"  : 0.01 ,
    "decay"  : 0 ,
    "sustain"  : 1 ,
    "release"  : 0.5
  }  ,
  "envelope"  : {
    "attack"  : 0.01 ,
    "decay"  : 0 ,
    "sustain"  : 1 ,
    "release"  : 0.5
  }
  }});


let gain = new Tone.Gain(0.2).toDestination();
synth.connect(gain);


function setup() {
  createCanvas(800, 800); 
  background(0);
 
}

function draw() {
  image(trooper, 0, 10, 800, 800);
  textSize(40);
  textAlign(CENTER, CENTER);
  fill('white');
  noStroke();
  text('Move cursor right to change frequency', 400, 25);
  stroke('red');
  strokeWeight(8);

  if((frameCount % 25) === 0){
    feq = random(1500, 3000);
  }

  if(lazer){
    line(0, 90, 150, 140);
  }
  if((frameCount % 45) === 0){
    lazer = false;
  }
}

function mouseClicked() {
  Tone.start();
  console.log('pressed');
  synth.triggerAttackRelease(feq, "16n");
  lazer = true;
  if(mouseX < 50){
    synth.frequency.exponentialRampToValueAtTime(50, '+0.35');
  }
  else{
    synth.frequency.exponentialRampToValueAtTime(mouseX/2, '+0.35');
  }
}
