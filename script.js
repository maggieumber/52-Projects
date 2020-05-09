var black, extralight;

function preload() {
  black = loadFont("LeagueSpartan-Black.otf");
  extralight = loadFont("LeagueSpartan-Extralight.otf");
}

function setup() {
  createCanvas(600, 1200);
  // background color
  background(51, 79, 255); // blue color
}

function draw() {
  textAlign(LEFT);
  textSize(120); // keep type uniform size

  // 52 text & color
  fill(255, 51, 79); // red color
  textFont(black);
  text("52", 50, mouseY - 100);

  // PROJECTS text & color
  fill(79, 255, 51);
  textFont(extralight);
  text("PROJECTS", 50, mouseY - 300);
}


function mousePressed() {
  background(51, 79, 255); // blue color
}