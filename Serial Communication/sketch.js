//https://youtu.be/T8Y55-oGgs0

let serialPDM;
let sensors;
let portName = 'COM4';

function setup() {
  serialPDM = new PDMSerial(portName);
  console.log(serialPDM.inData);
  sensors = serialPDM.sensorData;
  serialPDM.transmit('led',0); 
  
  createCanvas(1600,900);
}

function keyPressed() {
  serialPDM.transmit('led',1);
  
  console.log(serialPDM.sensorsConnected());
}

function keyReleased() {
  serialPDM.transmit('led',0);  
}

function draw(){
  background(255);
  textSize(32);
  let color = parseInt(sensors.float0 * 255); 
  let circlePosition = map(0.25, 0, 1, 30, width-30);
  drawCircle(circlePosition, 300, 400 + 2);
  fill(32, 140, 110);
  text("Potentiometer: "+ sensors.a0, 10, 30);
  text("Color: " + color + " ," + 50 + " ," + 100, 10, 80);
}

function drawCircle(x,y,size){
  color = parseInt(sensors.float0 * 255);
  fill(color, 50, 100);
  ellipse(x, y, size);
}
