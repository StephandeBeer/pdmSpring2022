let decay = 0;

const pianoetta = new Tone.Synth({
  "oscillator": {
      "type": "square"
  },
  "filter": {
      "Q": 2,
      "type": "lowpass",
      "rolloff": -12
  },
  "envelope": {
      "attack": 0.005,
      "decay": 55,
      "sustain": 0,
      "release": 0.45
  },
  "filterEnvelope": {
      "attack": 0.001,
      "decay": 0.32,
      "sustain": 0.9,
      "release": 3,
      "baseFrequency": 700,
      "octaves": 2.3
  }
});

let keys = {
  'a' : 'A3',
  's' : 'B3',
  'd' : 'C4',
  'f' : 'D4',
  'g' : 'E4',
  'h' : 'F4',
  'j' : 'G4',
  'k' : 'A4',
}

const verb = new Tone.Reverb(0.05).toDestination();
pianoetta.connect(verb);

function setup() {
  createCanvas(800, 800);
  textSize(60);
  textAlign(CENTER, CENTER);

  decaySlide = createSlider(1, 5, 5, 1);
  decaySlide.position(50, 160);
  decaySlide.style('width', '580px');
  decaySlide.mouseReleased(()=> {pianoetta.set({"envelope": {"decay": decaySlide.value()}})});

  attackSlide = createSlider(0.001, 0.15, 0.005, 0.001);
  attackSlide.position(50, 340);
  attackSlide.style('width', '580px');
  attackSlide.mouseReleased(()=> {pianoetta.set({"envelope": {"attack": attackSlide.value()}})});

  reverb = createSlider(0.05, 5, 0.05, 0.05);
  reverb.position(50, 520);
  reverb.style('width', '580px');
  reverb.mouseReleased(()=> {verb.decay = reverb.value();});

}

function draw() {
  background(100, 220, 110);
  
  text('Use A - K keys to play notes', 400, 45);
  text('Decay Slider', 345, 120);
  text(decaySlide.value(), 345, 220);

  text('Attack Slider', 345, 300);
  text(attackSlide.value(), 345, 400);

  text('Reverb Slider', 345, 490);
  text(reverb.value(), 345, 580);
}

function keyPressed(){
  let Audio = keys[key];
  console.log(Audio);
  pianoetta.triggerAttackRelease(Audio, "8n");
}

