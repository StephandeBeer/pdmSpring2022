let feq = 800;

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

let gain = new Tone.Gain(0.2).toDestination();
synth.connect(gain);


function setup() {
  createCanvas(800, 800);
  //synth.start();
}

function draw() {
  background(220);

  if((frameCount % 25) === 0){
    feq = random(1500, 3000);
  }
}

function mouseClicked() {
  Tone.start();
  console.log('pressed');
  synth.triggerAttackRelease(feq, "16n");
  if(mouseX < 50){
    synth.frequency.exponentialRampToValueAtTime(50, '+0.35');
  }
  else{
    synth.frequency.exponentialRampToValueAtTime(mouseX/2, '+0.35');
  }
}
