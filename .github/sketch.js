let state = "start";
let fuelTank = 100;
let yVal = 30;
let mass = 20;
let accel = 0.1;
let ySpeed = 0;
let startS = true;
let gameS = false;
let resultS = false;

var ship;

function setup() {
  createCanvas(400, 600);
}

function startScreen() {
  background(2, 12, 18);
  text("Start", 50, 50);
}
function gameScreen() {
  background(2, 12, 18);
  text("Bunny Spaceship lander", 30, 20);

  text("Speed: " + ySpeed, 20, 120);
  text("Fuel: " + fuelTank, 20, 140);
  text("Y-cord: " + yVal, 20, 160);
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

  //the ship falling
  ship(200, yVal, keyIsPressed);
  //its going
  yVal = yVal + ySpeed;
  if (keyIsDown(38)) {
    ySpeed = ySpeed - 0.5;
    fuelTank -= 1;
  } else {
    ySpeed = ySpeed + accel;
  }
}

function mouseClicked() {
  yVal = 30;
  ySpeed = 0;
  velocity = 0.1;
  fuelTank = 100;
  //changing gamescreen
  /*if (state === "start") {
    state = "game";
  } else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    state = "game";
  }*/
}
