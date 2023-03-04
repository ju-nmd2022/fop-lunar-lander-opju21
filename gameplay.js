let state = "game";
//let fuelTank = 100;
let yVal = 30;
let velocity = 0;
let mass = 20;
let accel;
//var ground;
var ship;

function setup() {
  createCanvas(400, 600);
  // the gravity is from this www.editor.p5js.org/dansakamoto/sketches/S1J_MEXYm
  yVal = 0;
  velocity = 0;
  accel = mass * 0.01;
}

function startScreen() {
  background(2, 12, 18);
  text("Start", 50, 50);
}
function gameScreen() {
  background(2, 12, 18);
  text("Bunny Spaceship lander", 30, 20);
  text("vel: " + velocity, 20, 100);
  //ground= floor();
  ship(190, yVal, keyIsPressed);
  //its going
  velocity += accel;
  yVal += velocity;
  if (yVal > height - mass / 2) {
    // A little dampening when hitting the bottom
    velocity *= -0.6;
    yVal = height - mass / 2;
  }

  //text(fuelTank + " Fuel", 330, 20);
}
// what happens when lose or win
function endScreen() {
  background(136, 8, 8);
  text("Result", 50, 50);
}

function ship(x, y, jetBoost) {
  fill(255, 255, 255);
  circle(x, y, mass, mass);

  if (jetBoost) {
    fill(255, 255, 255);
    circle(x, y + 40, 20, 20);
  }
}
function floor() {
  fill(255, 255, 255);
  rect(0, 590, 400, 10);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    endScreen();
  }
}

function mouseClicked() {
  yVal = 0;
  velocity = 0;
  //changing gamescreen
  /*if (state === "start") {
    state = "game";
  } else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    state = "game";
  }*/
}
function keyPressed() {
  velocity *= -0.6;
}
