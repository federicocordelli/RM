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
  background(value4, value5, value6);

  push();
  textFont(HELV);
  textSize(windowHeight/60);
  textAlign(LEFT,CENTER);
  translate(-windowWidth + mouseX, -windowHeight + mouseY);
  fill(value1, value2, value3, opacity);
  text("Paraphrasing the statement of A. Dune & F. Raby (the creators of the Speculative Design): \nwe can educate (or at least inform) the mass by working on citizens, \nbut in a capitalistic society we can only change the world by working on customers. \nOur group started with the topic Sustainable Consumption & Production, \nand we moved our attention on Fast Fashion and Textile Industry in general, just in order \nto find the most exemplary case in which our daily consumption feeds \nhuge global problems (ranging from labour exploitation to waste of water and its pollution, \nfrom CO2 emissions to incorrect waste disposal, ecc.). \nWe think that our topic is strictly related to all these social issues, because when we talk \nabout consumption, we are talking about society in its manifestation. \nTherefore, working on customers is the most efficient way to take care of our planet \nfrom every point of view. By simply creating a different purchase proposal, \na new more responsible one, a butterfly effect could begin generating \na new demand (a new responsible one) in the market, and this could lead big brands \nto readjust their offer.\n \nIf it is true that the market demand begins from the needs of society, \nit is time for our most urgent need to change the offer. \nSmall actions destroy the planet, small actions can save it.",0,0);
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
  fill(value1, value2, value3);
  textFont(IKAN);
  textSize(windowHeight/8);
  text("Retape",0,0);
  pop();


  push();
  textFont(HELV);
  textSize(windowHeight/36);
  textAlign(LEFT);
  translate((-windowWidth/2)+20,(-windowHeight/2) + (windowHeight/4) + (windowHeight/36));
  fill(value1, value2, value3);
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
  textSize(windowHeight/70);
  textAlign(LEFT,CENTER);
  translate((-windowWidth/2)+20,(-windowHeight/2) + (windowHeight/70));
  fill('#C65B4C');
  rotateX(millis() / 2500);
  text("sustainable consumption & production project / Politecnico di Milano",0,0);
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
  line(-windowWidth/2, (windowHeight/2) -90, windowWidth, (windowHeight/2) -90);
  pop();

  push();
  textFont(HELV);
  textSize(windowHeight/80);
  textAlign(RIGHT);
  translate(windowWidth/2 - 20,(windowHeight/2) - (windowHeight/80));
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

  push();
  textFont(HELV);
  textSize(windowHeight/70);
  textAlign(RIGHT);
  translate(windowWidth/2 - 20,(windowHeight/2) - ((windowHeight/60)*12));
  fill(value7,value8,value9);
  text("Carlotta Calabria -\nFederico Cordelli -\nShan Huang -\nYuri Piemontese -\nLorenzo Urietti -\nValentina Zaccaria _",0,0);
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
