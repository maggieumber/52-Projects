// function setup() {
//   createCanvas(600, 1200);
// }

// function draw() {
//   background(0);
// }

var myFont;

function preload() {
  myFont = loadFont("LeagueSpartan-Black.otf");
}

function setup() {
  createCanvas(600, 1200);
}

function draw() {
  background(50);
  strokeWeight(2);
  fill(255);
  textFont(myFont);
  textSize(60);
  text("52 PROJECTS", 50, 200);
}