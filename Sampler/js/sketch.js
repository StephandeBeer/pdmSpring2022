let button1,button2,button3,button4, button5, slide, slide2, slide3;

const sounds = new Tone.Players({
  clap : 'Media/clap.wav',
  highHat: 'Media/highHat.wav',
  kick: 'Media/kick.wav',
  metal: 'Media/metal.wav',
  snare: 'Media/snare.wav'
})
const dist = new Tone.Distortion(0.1);
const verb = new Tone.Reverb().toDestination();
sounds.connect(dist);
dist.connect(verb);
sounds.connect(verb);

function setup() {
  createCanvas(800, 800);
  
  button1 = createButton('Clap');
  button1.position(50, 50);
  button1.size(100, 50)
  button1.style('font-size', '22px');
  button1.mousePressed(() => buttonSound('clap') );

  button2 = createButton('High Hat');
  button2.position(170, 50);
  button2.size(100, 50)
  button2.style('font-size', '20px');
  button2.mousePressed(() => buttonSound('highHat') );

  button3 = createButton('Kick Drum');
  button3.position(290, 50);
  button3.size(100, 50)
  button3.style('font-size', '20px');
  button3.mousePressed(() => buttonSound('kick') );
  
  button4 = createButton('Metal Drum');
  button4.position(410, 50);
  button4.size(100, 50)
  button4.style('font-size', '20px');
  button4.mousePressed(() => buttonSound('metal') );

  button5 = createButton('Snare Drum');
  button5.position(530, 50);
  button5.size(100, 50)
  button5.style('font-size', '20px');
  button5.mousePressed(() => buttonSound('snare') );

  slide = createSlider(0, 34, 17, 1);
  slide.position(50, 200);
  slide.style('width', '580px');
  slide.mouseReleased(()=> {sounds.volume.value = (-25 + slide.value());});
  sounds.volume.value = (-25 + slide.value());//set up starting volume to match slider

  slide2 = createSlider(0, 1, 0.1, 0.1);
  slide2.position(50, 400);
  slide2.style('width', '580px');
  slide2.mouseReleased(()=> {
    if(slide2.value() == 0){
      dist.distortion = 0.1 + slide2.value();
    }
    else{
      dist.distortion = slide2.value();
    }
  });

  slide3 = createSlider(0, 5, 0.1, 0.1);
  slide3.position(50, 600);
  slide3.style('width', '580px');
  slide3.mouseReleased(()=> {
    if(slide3.value() == 0){
      verb.decay = 0.1 + slide3.value();
    }
    else{
      verb.decay = slide3.value();
    }
  });

  textSize(60);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0, 180, 205);
  text('Volume Slider', 345, 170);
  text(slide.value(), 345, 255);

  text('Distortion Slider', 345, 370);
  text(slide2.value(), 345, 455);

  text('Reverb Slider', 345, 570);
  text(slide3.value(), 345, 655);
  
}

function buttonSound(sound='clap') {
  sounds.player(sound).start();
}