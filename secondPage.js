
let img; // Declare variable 'img'.
let button;

vel = 0;
drag = 0.75;
strength = 0.1;
r = 20;

function setup() {
  createCanvas(852, 480);
  img = loadImage('underwater.jpg'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  
  fill(237,142,123)
  beginShape();
  vertex(630,210)
  vertex(550,210)
  vertex(520,125)
  vertex(480,210)
  vertex(402,210)
  vertex(465,265)
  vertex(440,335)
  vertex(515,295)
  vertex(590,335)
  vertex(565,265)
  endShape(CLOSE);

  //tracer
  mousePos = createVector(0,0);
  pos = createVector(0,0);
  target = createVector(0,0);
  vel = createVector(0,0);
  
  fill(245, 66, 242);
  ellipse(mouseX, mouseY, 20, r);
  
}