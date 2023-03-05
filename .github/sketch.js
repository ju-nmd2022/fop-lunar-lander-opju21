let state = "game";
let fuelTank = 100;
let yVal = 30;
let mass = 20;
let accel = 0.1;
let ySpeed = 0;
let startS = true;
let gameS = false;
let resultS = false;
let result;
var ship;
var bunny;

function setup() {
  createCanvas(400, 600);
}

function startScreen() {
  background(2, 12, 18);
  strokeWeight(0);
  textSize(22);
  textFont("Helvetica");
  text("Start", 50, 50);
}
function gameScreen() {
  background(2, 12, 18);
  strokeWeight(0);
  textSize(22);
  textFont("Helvetica");
  text("Bunny Spaceship lander", 30, 20);
  textSize(12);
  //text("Speed: " + ySpeed, 20, 120);
  text("Fuel: " + fuelTank, 20, 140);
  //text("Y-cord: " + yVal, 20, 160);
  //text("game: " + gameS, 20, 180);
}
// what happens when lose or win
function endScreen() {
  strokeWeight(0);
  textSize(22);
  textFont("Helvetica");
  text("Press a to start", 100, 100);
}

function ship(x, y, jetBoost) {
  //cabin glass
  noStroke();
  fill("rgba(167, 199, 231, 0.5)");
  circle(x, y - 4, 60);
  //Ship legs
  stroke(133, 168, 159);
  strokeWeight(8);
  line(x - 20, y + 20, x - 25, y + 30);
  line(x + 20, y + 20, x + 25, y + 30);
  noStroke();
  //ship base 1
  fill(133, 168, 159);
  ellipse(x, y + 12, 60, 20);
  //ears
  fill(255, 255, 255);
  noStroke();
  ellipse(x - 9, y - 7, 10, 40);
  ellipse(x + 9, y - 7, 10, 40);
  fill(245, 218, 223);
  ellipse(x - 10, y - 10, 6, 30);
  ellipse(x + 10, y - 10, 6, 30);
  //bunny head
  fill(255, 255, 255);
  ellipse(x, y, 40, 30);
  //blush uwu
  fill(245, 218, 223);
  circle(x - 12, y - 1, 6);
  circle(x + 12, y - 1, 6);
  //eyes
  fill(139, 69, 19);
  circle(x - 10, y - 4, 6);
  circle(x + 10, y - 4, 6);
  //mouth
  stroke(139, 69, 19);
  strokeWeight(1);
  line(x, y - 4, x - 3, y - 1);
  line(x, y - 4, x + 3, y - 1);
  noStroke();
  //second ufo base
  fill(133, 168, 159);
  ellipse(x, y + 16, 60, 20);
  //bunny paws
  stroke(255, 255, 255);
  strokeWeight(10);
  point(x - 10, y + 7);
  point(x + 10, y + 7);
  //ufo lights
  stroke(248, 241, 174);
  strokeWeight(10);
  point(x, y + 19);
  point(x + 15, y + 17);
  point(x - 15, y + 17);
  point(x - 30, y + 13);
  point(x + 30, y + 13);

  if (jetBoost) {
    fill(255, 255, 255);
    circle(x, y + 40, 20, 20);
  }
}
function bunny(x, y) {
  //ears
  fill(255, 255, 255);
  noStroke();
  ellipse(x - 9, y - 7, 10, 40);
  ellipse(x + 9, y - 7, 10, 40);
  fill(245, 218, 223);
  ellipse(x - 10, y - 10, 6, 30);
  ellipse(x + 10, y - 10, 6, 30);
  //bunny head
  fill(255, 255, 255);
  ellipse(x, y, 40, 30);
  //blush uwu
  fill(245, 218, 223);
  circle(x - 12, y - 1, 6);
  circle(x + 12, y - 1, 6);
  //eyes
  fill(139, 69, 19);
  circle(x - 10, y - 4, 6);
  circle(x + 10, y - 4, 6);
  //mouth
  stroke(139, 69, 19);
  strokeWeight(1);
  line(x, y - 4, x - 3, y - 1);
  line(x, y - 4, x + 3, y - 1);
  noStroke();
}
function floor() {
  fill(255, 255, 255);
  rect(0, 590, 400, 10);
}

function draw() {
  ship();

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    startS = false;
    gameS = true;
    resultS = false;
  } else if (state === "result") {
    endScreen();
    startS = false;
    gameS = false;
    resultS = true;
    if (result === "crashed") {
      //background(0, 0, 0);
      bunny(500, 500);
      text("u crashed :(", 200, 200);
    } else if (result === "won") {
      //ship(200, yVal, keyIsDown(38));
      text("U landed :D", 200, 200);
    } else if (result === "nofuel") {
      text("Out of fuel", 200, 200);
    }
  }
  if (gameS) {
    //the ship falling
    ship(200, yVal, keyIsDown(38));
    //its going
    yVal = yVal + ySpeed;
    if (keyIsDown(38)) {
      ySpeed = ySpeed - 0.5;
      fuelTank -= 1;
    } else {
      ySpeed = ySpeed + accel;
    }
  }
  if (startS) {
    text("Start", 50, 50);
  }

  if (state === "game" && yVal >= 550 && ySpeed <= 5) {
    yVal = 590;
    state = "result";
    result = "won";
  } else if (state === "game" && yVal >= 600 && ySpeed > 5) {
    state = "result";
    result = "crashed";
    yVal = 600;
  } else if (fuelTank == -1) {
    state = "result";
    result = "nofuel";
  } else {
    result = "restart";
  }
}

function keyTyped() {
  //changing gamescreen
  if (key === "a")
    if (state === "start") {
      state = "game";
      yVal = 30;
      ySpeed = 0;
      velocity = 0.1;
      fuelTank = 100;
    } else if (state === "game") {
      state = "result";
    } else if (state === "result") {
      state = "game";
      yVal = 30;
      ySpeed = 0;
      velocity = 0.1;
      fuelTank = 100;
    }
}
