let mouseColor;
let music = false, noClickyet = true;
let bgSynth = new Tone.DuoSynth({
  "vibratoAmount"  : 0.5 ,
	"vibratoRate"  : 5 ,
	"harmonicity"  : 1.5 ,
	"voice0"  : {
		"volume"  : -10 ,
		"portamento"  : 0 ,
		"oscillator"  : {
		    "type"  : "sine"
		}  ,
		"filterEnvelope"  : {
			"attack"  : 0.05 ,
			"decay"  : 0 ,
			"sustain"  : 1 ,
			"release"  : 0.5
		}  ,
		"envelope"  : {
			"attack"  : 0.05 ,
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
			"attack"  : 0.05 ,
			"decay"  : 0 ,
			"sustain"  : 1 ,
			"release"  : 0.5
		}  ,
		"envelope"  : {
			"attack"  : 0.05 ,
			"decay"  : 0 ,
			"sustain"  : 1 ,
			"release"  : 0.5
		}
  }
});
bgSynth.toDestination();

var pattern = new Tone.Pattern(function(time, note){
  bgSynth.triggerAttackRelease(note, '16n', time);
  print(note);
}, ["G3", "D4", "B4", "A4", "B4", "D4","B4","D4",
    "G3", "D4", "B4", "A4", "B4", "D4","B4","D4",
    "G3", "E4", "C5", "B4", "C5", "E4","C5","E4",
    "G3", "E4", "C5", "B4", "C5", "E4","C5","E4",
    "G3", "E4", "C5", "B4", "C5", "E4","C5","E4",]);

function soundStartStop(){
  if(music){
    Tone.Transport.stop();
    music = false;
  }
  else if (!music){
    Tone.Transport.start();
    music = true;
  }
}
function keyPressed() {
  if(keyCode == 32){
    soundStartStop();
  }
}

function setup() {
  createCanvas(1500, 850);
  background('lightgray');
  fill('Darkgray')
  text('Click anywhere to start', 650, 25);
  text('Use Space to Pause/Play music', 650, 65);
  mouseColor = color('lightgray');
  Tone.start();
  pattern.start(0.1);
  Tone.Transport.bpm.value = 180;
  textSize(45);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Pallet Colors
  noStroke();
  fill('red');
  square(5, 5, 50);
  fill('orange');
  square(5, 60, 50);
  fill('yellow');
  square(5, 115, 50);
  fill('green');
  square(5, 170, 50);
  fill('cyan');
  square(5, 225, 50);
  fill('blue');
  square(5, 280, 50);
  fill('magenta');
  square(5, 335, 50);
  fill('brown');
  square(5, 390, 50);
  fill('white');
  square(5, 445, 50);
  fill('black');
  square(5, 500, 50); 

  //Line and stroke color change
  strokeWeight(10.0);
  stroke(mouseColor);

  //Color change
  function mousePressed() {
    if(mouseX > 5 && mouseX < 55){
      if(mouseY > 5 && mouseY < 55){
        mouseColor = color('red');
      }
      if(mouseY > 60 && mouseY < 110){
        mouseColor = color('orange');
      }
      if(mouseY > 115 && mouseY < 165){
        mouseColor = color('yellow');
      }
      if(mouseY > 170 && mouseY < 220){
        mouseColor = color('green');
      }
      if(mouseY > 225 && mouseY < 275){
        mouseColor = color('cyan');
      }
      if(mouseY > 280 && mouseY < 330){
        mouseColor = color('blue');
      }
      if(mouseY > 335 && mouseY < 385){
        mouseColor = color('magenta');
      }
      if(mouseY > 390 && mouseY < 440){
        mouseColor = color('brown');
      }
      if(mouseY > 445 && mouseY < 495){
        mouseColor = color('white');
      }
      if(mouseY > 500 && mouseY < 550){
        mouseColor = color('black');
      }
    } 
  }

 
  
  // Click / Drag detection
  if(mouseIsPressed){
    if(noClickyet){
      soundStartStop();
      noClickyet = false;
    }
    mousePressed();
    fill(mouseColor);    
    if(mouseX > 55 || mouseY > 550 ){
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
  }
}