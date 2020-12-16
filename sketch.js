let IKAN;
let HELV;
let XanhItal;
let rot = 0;
let value1 = 218;
let value2 = 148;
let value3 = 87;

let value4 = 59;
let value5 = 98;
let value6 = 67;

let value7 = 19;
let value8 = 21;
let value9 = 32;

let opacity = 0;



function preload() {
IKAN = loadFont('addons/IKANSEEYOUALL.otf');
HELV = loadFont('addons/SuisseIntl-Medium.otf');
XanhItal = loadFont('addons/XanhMono-Italic.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noCursor();
  //createCanvas(displayWidth, displayHeight, WEBGL);
  //noSmooth();




}

function draw() {
  background(value1, value2, value3);

  push();
  textFont(HELV);
  textSize(windowHeight/51);
  textAlign(LEFT,CENTER);
  translate((-windowWidth/2) + mouseX,(-windowHeight/2)+ mouseY);
  fill(value4, value5, value6, opacity);
  text("The textile industry is the third most pollutant \nindustry of the World. \n\nCO2 emissions, trillions liters of water wasted, \nchemical products released, \nThird World countries exploited, \ndesertification, micro-plastics in the oceans. \nThe rhythm of garments consumption \nis a plague for our society. \nRetape - the Patchlab is an alternative to FF habits. \n\nRe-use clothes, they are not dead yet. \nRe-invent your style, be the producer and not the product. \nRetape the World. ",0,0);
  pop();


  push();
  //smooth();
  noFill();
  strokeWeight(0.2);
  stroke('#E5E2C8');
  rotateY((millis() / 1000)+ (mouseY/100));
  rotateX((millis() / 3000)+ (mouseX/100));
  rotateZ(millis() / 5000);
  sphere(windowHeight/4, 20, 20);
  pop();

  push();
  textAlign(LEFT);
  translate((-windowWidth/2)+20,(-windowHeight/2) + (windowHeight/4) );
  fill(value4, value5, value6);
  textFont(IKAN);
  textSize(windowHeight/4);
  text("Retape",0,0);
  pop();


  push();
  textFont(HELV);
  textSize(windowHeight/18);
  textAlign(LEFT);
  translate((-windowWidth/2)+20,(-windowHeight/2) + (windowHeight/4) + (windowHeight/13));
  fill(value4, value5, value6);
  text("THE PATCHLAB",0,0);
  pop();

  push();
  textFont(HELV);
  textSize(windowHeight/48);
  textAlign(LEFT);
  translate((-windowWidth/2)+20,(-windowHeight/2) + (windowHeight/4) + (windowHeight/4));
  fill('#C65B4C');
  text("MAKE",0,0);
  pop();

  push();
  textFont(HELV);
  textSize(windowHeight/48);
  textAlign(CENTER);
  translate(0,(-windowHeight/2) + (windowHeight/4) + (windowHeight/4));
  fill('#C65B4C');
  text("DO",0,0);
  pop();

  push();
  textFont(HELV);
  textSize(windowHeight/48);
  textAlign(RIGHT);
  translate(windowWidth/2 - 20,(-windowHeight/2) + (windowHeight/4) + (windowHeight/4));
  fill('#C65B4C');
  text("MEND",0,0);
  pop();

  push();
  strokeWeight(0.5);
  stroke('#C65B4C');
  line(-windowWidth/2, (-windowHeight/2) + (windowHeight/4) + (windowHeight/4)+10, windowWidth, (-windowHeight/2) + (windowHeight/4) + (windowHeight/4)+10);
  pop();

  push();
  textFont(HELV);
  textSize(windowHeight/51);
  textAlign(LEFT,CENTER);
  translate((-windowWidth/2)+20,(-windowHeight/2) + (windowHeight/51));
  fill('#C65B4C');
  rotateX(millis() / 2500);
  text("sustainable consumption & production project / Politecnico di Milano students: Carlotta Calabria - Federico Cordelli - Shan Huang - Yuri Piemontese - Lorenzo Urietti - Valentina Zaccaria",0,0);
  pop();

  push();
  textFont(HELV);
  textSize(windowHeight/48);
  textAlign(LEFT);
  translate((-windowWidth/2)+20,(windowHeight/2) -150);
  fill(value7,value8,value9);
  text("A SECOND CHANCE \nA FASHION STANCE",0,0);
  pop();

  push();
  strokeWeight(0.5);
  stroke('#C65B4C');
  line(-windowWidth/2, (windowHeight/2) -110, windowWidth, (windowHeight/2) -110);
  pop();

  push();
  textFont(HELV);
  textSize(windowHeight/60);
  textAlign(RIGHT);
  translate(windowWidth/2 - 20,(windowHeight/2) - (windowHeight/60));
  fill('#C65B4C');
  text("PROJECT MANIFESTO_ALSO IF RETAPE DOESN'T EXIST AS SHOP IT CAN LIVE IN OUR ACTIONS",0,0);
  pop();

  push();
  textFont(HELV);
  textSize(windowHeight/60);
  textAlign(RIGHT);
  translate(windowWidth/2 - 20,(-windowHeight/2) + 40 + (windowHeight/60));
  fill(value7,value8,value9);
  text("N° 0",0,0);
  pop();







}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight, WEBGL);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}

function mouseWheel(event) {
  print(event.delta);
  //move the square according to the vertical scroll amount
  rot += event.delta;
  //uncomment to block page scrolling
  return false;
}

function mouseClicked() {

  if (value1 === 218) {
    value1 = 59;
  } else {
    value1 = 218;
  }

  if (value2 === 148) {
    value2 = 98;
  } else {
    value2 = 148;
  }

  if (value3 === 87) {
    value3 = 67;
  } else {
    value3 = 87;
  }

  if (value4 === 59) {
    value4 = 218;
  } else {
    value4 = 59;
  }

  if (value5 === 98) {
    value5 = 148;
  } else {
    value5 = 98;
  }

  if (value6 === 67) {
    value6 = 87;
  } else {
    value6 = 67;
  }

  if (value7 === 19) {
    value7 = 229;
  } else {
    value7 = 19;
  }

  if (value8 === 21) {
    value8 = 226;
  } else {
    value8 = 21;
  }

  if (value9 === 32) {
    value9 = 200;
  } else {
    value9 = 32;
  }

  if (opacity === 0) {
    opacity = 255;
  } else {
    opacity = 255;
  }
}
