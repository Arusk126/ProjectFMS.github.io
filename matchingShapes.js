pattern = 0;
guess = 0;


let patternLocation1;

function setup() {
  
  console.log("Setup");
  
  col = color(200, 10, 0);
  createCanvas(400, 400);
  fill(col);
  
  //All Colors Used
  violet = color(238, 130, 238);
  black =(0);
  red = color(255, 0, 0);
  purple = color(128, 0, 128);
  lime = color(50, 205, 50);
  blue = color(0, 0, 255);
  grey = color(192, 192, 192);
  yellow = color(255, 215, 0);
  pink = color(219, 112, 147);
  Orange = color(255, 165, 0);
  turquoise = color(64, 224, 208);
  green = color(46, 139, 87);
  plum = color(221, 160, 221);
  background = color(30, 144, 255);
  

  col = color(238, 130, 238);

  play = new Clickable();
  play.resize(80, 30);
  play.locate(25, 65);
  play.textSize = 12;
  play.text = "Play Game";
  play.onOutside = function () {
    play.color = col;
  }
  play.onPress = function () {
    moveButton();
    play.color = lime;
  }

  check = new Clickable();
  check.resize(100, 30);
  check.locate(25, 360);
  check.textSize = 12;
  check.text = "Test Answer";
  check.onOutside = function () {
    check.color = col;
  }
  check.onPress = function () {
    testButton();
    check.color = lime;
  }

  squareButton = new Clickable();
  squareButton.resize(20, 20);
  squareButton.locate(237, 171);
  squareButton.textSize = 10;
  squareButton.text = "1";
  squareButton.onHover = function () {
    squareButton.color = 'light gray';
  }
  squareButton.onPress = function () {
    Square();
    squareButton.color = col;
  }

  eclipseButton = new Clickable();
  eclipseButton.resize(20, 20);
  eclipseButton.locate(235, 230);
  eclipseButton.textSize = 10;
  eclipseButton.text = "2";
  eclipseButton.onHover = function () {
    eclipseButton.color = 'light gray';
  }
  eclipseButton.onPress = function () {
    Eclipse();
    eclipseButton.color = col;
  }

  hexagonButton = new Clickable();
  hexagonButton.resize(20, 20);
  hexagonButton.locate(235.5, 285);
  hexagonButton.textSize = 10;
  hexagonButton.text = "3";
  hexagonButton.onHover = function () {
    hexagonButton.color = 'light gray';
  }
  hexagonButton.onPress = function () {
    Hexagon();
    hexagonButton.color = col;
  }

  circleButton = new Clickable();
  circleButton.resize(20, 20);
  circleButton.locate(290, 150);
  circleButton.textSize = 10;
  circleButton.text = "4";
  circleButton.onHover = function () {
    circleButton.color = 'light gray';
  }
  circleButton.onPress = function () {
    Circle();
    circleButton.color = col;
  }

  triangleButton = new Clickable();
  triangleButton.resize(15, 15);
  triangleButton.locate(292.8, 213);
  triangleButton.textSize = 9;
  triangleButton.text = "5";
  triangleButton.onHover = function () {
    triangleButton.color = 'light gray';
  }
  triangleButton.onPress = function () {
    Triangle();
    triangleButton.color = col;
  }

  rTriangleButton = new Clickable();
  rTriangleButton.resize(16, 16);
  rTriangleButton.locate(295.2, 265.2);
  rTriangleButton.textSize = 10;
  rTriangleButton.text = "6";
  rTriangleButton.onHover = function () {
    rTriangleButton.color = 'light gray';
  }
  rTriangleButton.onPress = function () {
    Rtriangle();
    rTriangleButton.color = col;
  }

  heartButton = new Clickable();
  heartButton.resize(20, 20);
  heartButton.locate(290, 310);
  heartButton.textSize = 10;
  heartButton.text = "7";
  heartButton.onHover = function () {
    heartButton.color = 'light gray';
  }
  heartButton.onPress = function () {
    Heart();
    heartButton.color = col;
  }

  pentagonButton = new Clickable();
  pentagonButton.resize(20, 20);
  pentagonButton.locate(350, 175);
  pentagonButton.textSize = 10;
  pentagonButton.text = "8";
  pentagonButton.onHover = function () {
    pentagonButton.color = 'light gray';
  }
  pentagonButton.onPress = function () {
    Pentagon();
    pentagonButton.color = col;
  }

  octogonButton = new Clickable();
  octogonButton.resize(20, 20);
  octogonButton.locate(350, 230);
  octogonButton.textSize = 10;
  octogonButton.text = "9";
  octogonButton.onHover = function () {
    octogonButton.color = 'light gray';
  }
  octogonButton.onPress = function () {
    Octogon();
    octogonButton.color = col;
  }

  heptagonButton = new Clickable();
  heptagonButton.resize(20, 20);
  heptagonButton.locate(350, 290);
  heptagonButton.textSize = 10;
  heptagonButton.text = "0";
  heptagonButton.onHover = function () {
    heptagonButton.color = 'light gray';
  }
  heptagonButton.onPress = function () {
    Heptagon();
    heptagonButton.color = col;
  }
  
  fill(background);
  square(0, 0, 400);
  
  //Available Shapes rectangle
  fill(grey);
  rect(200, 100, 200, 250);

  //Pattern Display rectanlge
  fill(grey);
  rect(5, 100, 190, 100);

  //Copied Pattern Rectangle
  fill(grey);
  rect(5, 250, 190, 100);

  fill(black);
  textSize(18);
  text('Pattern: ', 75, 120);

  textSize(18);
  text('Copied Pattern Was: ', 20, 275);

  textSize(18);
  text('Available Shapes: ', 225, 120);

  fill(10);

  //Clickable square
  fill(purple);
  square(227, 160, 40);

  // An ellipse
  fill(blue);
  ellipse(300, 160, 40, 40);

  // An ellipse
  fill(lime);
  ellipse(245, 240, 50, 30);

  //Pentagon
  fill(red);
  pent(360, 185, 30, 1);

  //Hexagon
  fill(yellow);
  hexagon(245, 295, 20, 1);

  //Heptagon
  fill(pink);
  hept(360, 308, 20, 1);

  //Right truiangle
  fill(Orange);
  rightTri(300, 270, 25, 1);

  //Heart
  fill(turquoise);
  heart(300, 325, 18, 1);

  //Ocogon
  fill(green);
  octo(360, 250, 20, 1);

  //Triangle
  fill(plum);
  tri(300, 215, 15, 1);
  
  //header rectangle
  fill(violet);
  rect(50, 10, 300, 50);
  fill(black);
  textSize(32);
  text('Matching Shapes', 80, 45);
}

function draw() {
  console.log(guess);
  renderPattern(pattern);

  play.draw();
  check.draw();
  squareButton.draw();
  eclipseButton.draw();
  hexagonButton.draw();
  circleButton.draw();
  triangleButton.draw();
  rTriangleButton.draw();
  heartButton.draw();
  pentagonButton.draw();
  octogonButton.draw();
  heptagonButton.draw();
}

function renderPattern(p) {
  console.log("Current Pattern: " + p);
  
  if(p > 0){
    let firstDigit = Math.floor(p/1000);
    let remaining = p - firstDigit * 1000;
    let secondDigit =Math.floor(remaining/100);
    let secondRemaining = p -(firstDigit *1000 + secondDigit*100);
    let thirdDigit = Math.floor(secondRemaining/10);
    let thirdRemaining = p - (firstDigit *1000 + secondDigit*100+thirdDigit*10);
    let fourthDigit = Math.floor(thirdRemaining);
    
    
    renderFirstDigit(firstDigit);
    renderSecondDigit(secondDigit);
    renderThirdDigit(thirdDigit);
    renderFourthDigit(fourthDigit);
  }
}

function renderFirstDigit(firstDigit)
{
  if(firstDigit == 1) {
    console.log("Render Square in First Digit");
    c = color(100, 220, 139);
    fill(c);
    square(7, 134, 40);
  }
  
  if(firstDigit == 2) {  
    console.log("Render Square in First Digit");
    c = color(100, 220, 139);
    fill(c);
    ellipse(27.5, 160, 40.5, 24.3);
  }
  
  if(firstDigit == 3) {
    console.log("Render Hexagon in First Digit");
    c = color(100, 220, 139);
    fill(c);
    hexagon(27, 155, 20, 1);
  }
  
  if(firstDigit == 4) {
    console.log("Render Circle in First Digit");
    c = color(100, 220, 139);
    fill(c);
    ellipse(28, 156, 40, 40);
  }
  
  if(firstDigit == 5) {
    console.log("Render Triangle in First Digit");
    c = color(100, 220, 139);
    fill(c);
    tri(24, 159, 15, 1);
  }
  
  if(firstDigit == 6) {
    console.log("Render Right Triuanlg in First Digit");
    c = color(100, 220, 139);
    fill(c);
    rightTri(26, 160, 25, 1);
  }
  
  if(firstDigit == 7) {
    console.log("Render Heart in First Digit");
    c = color(100, 220, 139);
    fill(c);
    heart(27, 160, 18, 1);
  }
  
  if(firstDigit == 8) {
    console.log("Render Pentagon in First Digit");
    c = color(100, 220, 139);
    fill(c);
    pent(23, 160, 30, 1);
  }
  
  if(firstDigit == 9) {
    console.log("Render Ocotogon in First Digit");
    c = color(100, 220, 139);
    fill(c);
    octo(27, 167, 20, 1);
  }
  
  if(firstDigit == 0) {
    console.log("Render Heptagon in First Digit");
    c = color(100, 220, 139);
    fill(c);
    hept(30, 163, 20, 1);
  }
}

function renderSecondDigit(secondDigit)
{
  if(secondDigit == 1) {
    console.log("Render Square in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    square(57, 134, 40);
  }
  
  if(secondDigit == 2) {
    console.log("Render Square in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    ellipse(75, 160, 40.5, 24.3);
  }
  
  if(secondDigit == 3) {
    console.log("Render Hexagon in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    hexagon(75, 155, 20, 1);
  }
  
  if(secondDigit == 4) {
    console.log("Render Circle in Second Digit");
    c = color(100, 218, 139);
    fill(c);
    ellipse(75, 156, 40, 40);
  }
  
  if(secondDigit == 5) {
    console.log("Render Triangle in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    tri(75, 159, 15, 1);
  }
  
  if(secondDigit == 6) {
    console.log("Render Right Triuanlg in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    rightTri(75, 160, 25, 1);
  }
  
  if(secondDigit == 7) {
    console.log("Render Heart in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    heart(75, 160, 18, 1);
  }
  
  if(secondDigit == 8) {
    console.log("Render Pentagon in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    pent(75, 160, 30, 1);
  }
  
  if(secondDigit == 9) {
    console.log("Render Ocotogon in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    octo(75, 167, 20, 1);
  }
  
  if(secondDigit == 0) {
    console.log("Render Heptagon in Second Digit");
    c = color(100, 220, 139);
    fill(c);
    hept(75, 163, 20, 1);
  }
}


function renderThirdDigit(thirdDigit)
{
  if(thirdDigit == 1) {
    console.log("Render Square in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    square(104, 134, 40);
  }
  
  if(thirdDigit == 2) {
    console.log("Render Square in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    ellipse(122, 160, 40.5, 24.3);
  }
  
  if(thirdDigit == 3) {
    console.log("Render Hexagon in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    hexagon(122, 155, 20, 1);
  }
  
  if(thirdDigit == 4) {
    console.log("Render Circle in Third Digit");
    c = color(100, 218, 139);
    fill(c);
    ellipse(122, 156, 40, 40);
  }
  
  if(thirdDigit == 5) {
    console.log("Render Triangle in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    tri(122, 159, 15, 1);
  }
  
  if(thirdDigit == 6) {
    console.log("Render Right Triuanlg in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    rightTri(122, 160, 25, 1);
  }
  
  if(thirdDigit == 7) {
    console.log("Render Heart in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    heart(122, 160, 18, 1);
  }
  
  if(thirdDigit == 8) {
    console.log("Render Pentagon in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    pent(122, 160, 30, 1);
  }
  
  if(thirdDigit == 9) {
    console.log("Render Ocotogon in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    octo(122, 167, 20, 1);
  }
  
  if(thirdDigit == 0) {
    console.log("Render Heptagon in Third Digit");
    c = color(100, 220, 139);
    fill(c);
    hept(122, 163, 20, 1);
  }
}

function renderFourthDigit(fourthDigit)
{
  if(fourthDigit == 1) {
    console.log("Render Square in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    square(152, 134, 40);
  }
  
  if(fourthDigit == 2) {
    console.log("Render Square in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    ellipse(172, 160, 40.5, 24.3);
  }
  
  if(fourthDigit == 3) {
    console.log("Render Hexagon in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    hexagon(172, 155, 20, 1);
  }
  
  if(fourthDigit == 4) {
    console.log("Render Circle in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    ellipse(172, 156, 40, 40);
  }
  
  if(fourthDigit == 5) {
    console.log("Render Triangle in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    tri(176, 159, 15, 1);
  }
  
  if(fourthDigit == 6) {
    console.log("Render Right Triuanlg in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    rightTri(180, 160, 25, 1);
  }
  
  if(fourthDigit == 7) {
    console.log("Render Heart in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    heart(172, 160, 18, 1);
  }
  
  if(fourthDigit == 8) {
    console.log("Render Pentagon in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    pent(177, 160, 30, 1);
  }
  
  if(fourthDigit == 9) {
    console.log("Render Ocotogon in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    octo(172, 167, 20, 1);
  }
  
  if(fourthDigit == 0) {
    console.log("Render Heptagon in Fourth Digit");
    c = color(100, 220, 139);
    fill(c);
    hept(172, 163, 20, 1);
  }
}

function moveButton() {
  guess = 0;
  pattern = Math.floor(1000 + Math.random() * 9000);
  console.log(pattern);
  fill(grey);
  rect(5, 100, 190, 100);
  fill(black);
  noStroke();
  textSize(18);
  text('Pattern: ', 109, 115);
  textSize(18);
  fill(grey);
  rect(5, 250, 190, 100);
  noStroke();
  fill(black);
  text('Copied Pattern Was: ', 105, 270);
}


function testButton() {
  if (guess == pattern) {
    console.log("Correct");
    fill('lime');
    textSize(30);
    text('Correct', 95, 312);
  } 
  else {
    console.log("ERRRRRRR - Try Again");
    guess = 0;
    fill(red);
    textSize(20);
    text('Incorrect, Try Again', 100, 312);
  }
}


function Square() {
  var val = Math.floor(1);
  AddToGuess(val);
  console.log(val);
}


function Eclipse() {
  var val = Math.floor(2);
  AddToGuess(val);
  console.log(val);
}

function Hexagon() {
  var val = Math.floor(3);
  AddToGuess(val);
  console.log(val);
}


function Circle() {
  var val = Math.floor(4);
  AddToGuess(val);
  console.log(val);
}


function Triangle() {
  var val = Math.floor(5);
  AddToGuess(val);
  console.log(val);
}


function Rtriangle() {
  var val = Math.floor(6);
  AddToGuess(val);
  console.log(val);
}


function Heart() {
  var val = Math.floor(7);
  AddToGuess(val);
  console.log(val);
}


function Pentagon() {
  var val = Math.floor(8);
  AddToGuess(val);
  console.log(val);
}


function Octogon() {
  var val = Math.floor(9);
  AddToGuess(val);
  console.log(val);
}


function Heptagon() {
  var val = Math.floor(0);
  AddToGuess(val);
  console.log(val);
}


function AddToGuess(value) {
  guess = (guess * 10) + value;
  console.log(guess);
}

//Defines all of the Shape functions 


function pent(x, y, size, lineT) {
  pentX = x
  pentY = y
  len = size
  penV1x = x - len / 2
  penV1y = y + len / 2
  penV2x = x + len / 2
  penV2y = y + len / 2
  penV3x = x + len / 2
  penV3y = penV2y - len
  penV4x = penV3x - len / 2
  penV4y = penV3y - len / 2
  penV5x = x - len / 2
  penV5y = y - len / 2
  beginShape()
  strokeWeight(lineT)
  stroke(0)
  vertex(penV1x, penV1y)
  vertex(penV2x, penV2y)
  vertex(penV3x, penV3y)
  vertex(penV4x, penV4y)
  vertex(penV5x, penV5y)
  vertex(penV1x, penV1y)
  endShape()
}

function hexagon(x, y, len, lineT) {
  hexV1x = x - len
  hexV1y = y + len / 2
  hexV2x = x
  hexV2y = y + len
  hexV3x = x + len
  hexV3y = y + len / 2
  hexV4x = x + len
  hexV4y = y - len / 2
  hexV5x = x
  hexV5y = y - len
  hexV6x = x - len
  hexV6y = y - len / 2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(hexV1x, hexV1y)
  vertex(hexV2x, hexV2y)
  vertex(hexV3x, hexV3y)
  vertex(hexV4x, hexV4y)
  vertex(hexV5x, hexV5y)
  vertex(hexV6x, hexV6y)
  vertex(hexV1x, hexV1y)
  endShape()
}

function hept(x, y, len, lineT) {
  heptV1x = x - len / 2
  heptV1y = y + len / 2
  heptV2x = x + len / 2
  heptV2y = y + len / 2
  heptV3x = x + len
  heptV3y = y
  heptV4x = x + len
  heptV4y = y - len
  heptV5x = x
  heptV5y = y - len - len / 2
  heptV6x = x - len
  heptV6y = y - len
  heptV7x = x - len
  heptV7y = y
  heptV8x = x - len / 2
  heptV8y = y + len / 2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(heptV1x, heptV1y)
  vertex(heptV2x, heptV2y)
  vertex(heptV3x, heptV3y)
  vertex(heptV4x, heptV4y)
  vertex(heptV5x, heptV5y)
  vertex(heptV6x, heptV6y)
  vertex(heptV7x, heptV7y)
  vertex(heptV8x, heptV8y)
  endShape()
}

function rightTri(x, y, len, lineT) {
  rTriV1x = x - len / 1.5
  rTriV1y = y + len / 2
  rTriV2x = x + len / 2
  rTriV2y = y + len / 2
  rTriV3x = x + len / 2
  rTriV3y = rTriV2y - len * 1.5
  stroke(0)
  strokeWeight(lineT)
  beginShape(TRIANGLES)
  vertex(rTriV1x, rTriV1y)
  vertex(rTriV2x, rTriV2y)
  vertex(rTriV3x, rTriV3y)
  vertex(rTriV1x, rTriV1y)
  endShape()
}

function heart(x, y, len, lineT) {
  heartV1x = x - len / 2
  heartV1y = y + len / 2
  heartV2x = x
  heartV2y = y + len
  heartV3x = x + len / 2
  heartV3y = y + len / 2
  heartV4x = x + len
  heartV4y = y
  heartV5x = x + len + (len / 8)
  heartV5y = y - len / 1.25
  heartV6x = x + len / 1.5
  heartV6y = y - len - len / 2
  heartV7x = x
  heartV7y = heartV5y - len / 3.5
  heartV8x = x - len / 1.5
  heartV8y = y - len - len / 2
  heartV9x = x - len - (len / 8)
  heartV9y = y - len / 1.25
  heartV10x = x - len
  heartV10y = y
  heartV11x = x - len / 2
  heartV11y = y + len / 2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(heartV1x, heartV1y)
  vertex(heartV2x, heartV2y)
  vertex(heartV3x, heartV3y)
  vertex(heartV4x, heartV4y)
  vertex(heartV5x, heartV5y)
  vertex(heartV6x, heartV6y)
  vertex(heartV7x, heartV7y)
  vertex(heartV8x, heartV8y)
  vertex(heartV9x, heartV9y)
  vertex(heartV10x, heartV10y)
  vertex(heartV11x, heartV11y)
  endShape()
}

function octo(x, y, len, lineT) {
  octoV1x = x - len / 2
  octoV1y = y + len / 2
  octoV2x = x + len / 2
  octoV2y = y + len / 2
  octoV3x = x + len
  octoV3y = y
  octoV4x = x + len
  octoV4y = y - len
  octoV5x = x + len / 2
  octoV5y = y - len - len / 2
  octoV6x = x - len / 2
  octoV6y = y - len - len / 2
  octoV7x = x - len
  octoV7y = y - len
  octoV8x = x - len
  octoV8y = y
  octoV9x = x - len / 2
  octoV9y = y + len / 2
  stroke(0)
  strokeWeight(lineT)
  beginShape()
  vertex(octoV1x, octoV1y)
  vertex(octoV2x, octoV2y)
  vertex(octoV3x, octoV3y)
  vertex(octoV4x, octoV4y)
  vertex(octoV5x, octoV5y)
  vertex(octoV6x, octoV6y)
  vertex(octoV7x, octoV7y)
  vertex(octoV8x, octoV8y)
  vertex(octoV9x, octoV9y)
  vertex(octoV1x, octoV1y)
  endShape()
}

function tri(x, y, len, lineT) {
  triV1x = x - len + len
  triV1y = y - len
  triV2x = x + len
  triV2y = y + len
  triV3x = x - len
  triV3y = y + len
  stroke(0)
  strokeWeight(lineT)
  beginShape(TRIANGLES)
  vertex(triV1x, triV1y)
  vertex(triV2x, triV2y)
  vertex(triV3x, triV3y)
  endShape()
}