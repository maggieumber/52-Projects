var myFont;

function preload() {
  myFont = loadFont("LeagueSpartan-Black.otf");
}

function setup() {
  createCanvas(600, 1200);
}

function draw() {
  background(50);
  fill(255);
  textAlign(LEFT);
  textFont(myFont);
  textSize(100);
  text("52", 50, 200);
  text("PROJECTS", 50, 400);
}