
let img; // Declare variable 'img'.
let button;

function setup() {
  createCanvas(852, 480);
  img = loadImage('underwater.jpg'); // Load the image
  
  starfish = new Clickable();
  starfish.locate(80, 330);
  starfish.resize(70,30);
  starfish.text = "starfish";
  starfish.onPress = function() {
    clickStar();
  }
  starfish.onHover = function () {
    this.color = "#f549c4";
  };
  starfish.onOutside = function () {
    this.color = "#FFFFFF";
  };
  //button = createButton('starfish');
  //button.position(90,330);
  //button.mousePressed(clickStar);
  
  sandDollar = new Clickable();
  sandDollar.locate(347, 330);
  sandDollar.resize(70,30);
  sandDollar.text = "sand dollar";
  sandDollar.onPress = function() {
    changeBG();
  }
  sandDollar.onHover = function () {
    this.color = "#f549c4";
  };
  sandDollar.onOutside = function () {
    this.color = "#FFFFFF";
  };
  //button = createButton('sand dollar');
  //button.position(340,330);
  //button.mousePressed(changeBG);
  
  fish = new Clickable();
  fish.locate(667, 330);
  fish.resize(70,30);
  fish.text = "fish";
  fish.onPress = function() {
    changeBG();
  }
  fish.onHover = function () {
    this.color = "#f549c4";
  };
  fish.onOutside = function () {
    this.color = "#FFFFFF";
  };  
  //button = createButton('fish');
  //button.position(680,330);
  //button.mousePressed(changeBG);
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  
  fill(237,142,123)
  beginShape();
  vertex(230,310)
  vertex(150,310)
  vertex(120,225)
  vertex(80,310)
  vertex(2,310)
  vertex(65,365)
  vertex(40,435)
  vertex(115,395)
  vertex(190,435)
  vertex(165,365)
  endShape(CLOSE);
  
  fill(255,255,255)
  circle(380,340,200);
  
  fill(235,237,88)
  triangle(620, 340, 530, 410, 530, 280);
  ellipse(700,340,220,135);
  
  starfish.draw();
  sandDollar.draw();
  fish.draw();
}
function clickStar() {
  window.location.href = "secondPage.html";
}
  function changeBG() {
  let val = random(255);
  background(val);
  
}
    


//function setup() {
  //button = createButton("Play Game");
  //button.mouseClicked(moveButton);
  //button.size(50,30);
 // button.position(25,65);
  //button.style("font-family", "Bodoni");
  //button.style("font-size", "12px");
//}
//function moveButton() {
 // button.position (325,65);
   // var val = Math.floor(1000 + Math.random() * 9000);
//console.log(val);
//}
