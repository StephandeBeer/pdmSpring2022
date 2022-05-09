//https://youtu.be/prnJ7OkAyiQ
#include "PDMSerial.h"

PDMSerial pdm;


const int xPin = A0;
const int potentPin = A2;  // potentiometer
const int displayPins[7] = {3,5,4,6,2,7,8}; // define 

byte displayLEDs[6][7] = { 
        { 1,1,1,1,1,1,0 },  // = 0
        { 0,1,1,0,0,0,0 },  // = 1
        { 1,1,0,1,1,0,1 },  // = 2
        { 1,1,1,1,0,0,1 },  // = 3
        { 0,1,1,0,0,1,1 },  // = 4
        { 1,0,1,1,0,1,1 },  // = 5     
        }; 

void writeNum(int digit){
  for (int i=0; i < 7; i++) {
    digitalWrite(displayPins[i], displayLEDs[digit][i]);
  }
}
int sensorValue = 0;

void setup() {
  //pinMode(potentPin, INPUT);
  for(int i=0; i<8; i++){
    pinMode(displayPins[i], OUTPUT);
  }
  Serial.begin(9600);
}

void loop() {
//Joystick
  int xpos=0;
  int x = analogRead(xPin);
  int sensitivity = 10;
  int joyVal;
  if(x >= 550){
    xpos = map(x,550,1023,0,sensitivity);
  } 
  if(x<=450){                  
    xpos = map(x,450,0,0,-sensitivity);   
  }
  
  if(xpos > 0){
     joyVal = 1;
  }
  else if(xpos < 0){
     joyVal = -1;
  }
  else{
    joyVal = 0;
  }
  
  sensorValue = analogRead(potentPin);
  float sensorFloatValue = sensorValue/1023.0;

  //p5
  pdm.transmitSensor("joystick", joyVal);
  pdm.transmitSensor("potent", sensorFloatValue);
  pdm.transmitSensor("end");

  boolean newData = pdm.checkSerial();
  
  if(newData) {
    if(pdm.getName().equals(String("lifes"))) {
        writeNum(pdm.getValue());
    }
  }
}
