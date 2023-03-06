let state = "start";
let fuelTank = 40;
let yVal = 30;
let mass = 20;
let accel = 0.5;
let ySpeed = 0;
let startS = true;
let gameS = false;
let resultS = false;
let result;
var ship;
var bunny;
var star;
var circles = [];

function setup() {
  createCanvas(400, 600);
  frameRate(30);
}

function startScreen() {
  background(16, 17, 24);

  //start game text, start screen
  fill(255, 255, 255);
  strokeWeight(0);
  textSize(15);
  textAlign(CENTER);
  textFont("Helvetica");
  text("Press 'a' to play", 200, 130);
  textSize(12);
  text("Use 'Space' to boost up, but watch out for the fuel meter", 200, 150);
}
function gameScreen() {
  background(16, 17, 24);
}
// what happens when lose or win
function endScreen() {
  background(16, 17, 24);

  fill(255, 255, 255);
  strokeWeight(0);
  textSize(15);
  textAlign(CENTER);
  textFont("Helvetica");
  text("Press 'a' to play again", 200, 280);
}
//this the ship that moves
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
  if (state === "game") {
    if (jetBoost) {
      fill(255, 255, 255);
      circle(x, y + 40, 20, 20);
    }
  }
}
// dead bunny x-x
function bunny(x, y) {
  push();
  //wings
  fill(255, 255, 255);
  ellipse(x + 40, y - 5, 26, 10);
  ellipse(x + 42, y, 12, 9);
  ellipse(x + 35, y - 1, 10, 12);
  ellipse(x - 40, y - 5, 26, 10);
  ellipse(x - 42, y, 12, 9);
  ellipse(x - 35, y - 1, 10, 12);
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
  stroke(139, 69, 19);
  strokeWeight(2);
  line(x - 12, y - 4, x - 8, y - 1);
  line(x - 8, y - 4, x - 12, y - 1);
  line(x + 12, y - 4, x + 8, y - 1);
  line(x + 8, y - 4, x + 12, y - 1);
  //mouth
  stroke(139, 69, 19);
  strokeWeight(1);
  line(x, y - 4, x - 3, y - 1);
  line(x, y - 4, x + 3, y - 1);
  noStroke();
  fill(248, 241, 174);
  ellipse(x, y - 30, 15, 3);
  pop();
}
// a bar that goes down with the fuel
function fuelmeter(f) {
  if (fuelTank <= 15) {
    noStroke();
    fill(240, 128, 128);
    rect(300, 30, f, 10);
  } else if (fuelTank > 15 && fuelTank <= 25) {
    noStroke();
    fill(248, 241, 174);
    rect(300, 30, f, 10);
  } else {
    noStroke();
    fill(133, 168, 159);
    rect(300, 30, f, 10);
  }
}
//cute lil stars
function star(x, y, a, b, c) {
  noStroke();
  fill(a, b, c);
  circle(x, y - 1, 9);
  stroke(a, b, c);
  strokeWeight(3);
  line(x, y, x + 5, y - 2);
  line(x, y, x - 5, y - 2);
  line(x, y, x - 4, y + 4);
  line(x, y, x + 4, y + 4);
  line(x, y, x, y - 7);
}

function draw() {
  if (state === "start") {
    startScreen();
    coloredStars();
  } else if (state === "game") {
    gameScreen();
    coloredStars();
    //the moon
    push();
    noStroke();
    fill(65, 67, 97);
    ellipse(200, 760, 400, 400);
    ellipse(100, 630, 100, 100);
    ellipse(270, 590, 60, 60);
    fill(42, 45, 67);
    circle(200, 760, 366);
    ellipse(100, 630, 80, 80);
    ellipse(270, 590, 40, 40);
    pop();

    ship();

    startS = false;
    gameS = true;
    resultS = false;
  } else if (state === "result") {
    endScreen();
    coloredStars();
    //the moon
    push();
    noStroke();
    fill(65, 67, 97);
    ellipse(200, 760, 400, 400);
    ellipse(100, 630, 100, 100);
    ellipse(270, 590, 60, 60);
    fill(42, 45, 67);
    circle(200, 760, 366);
    ellipse(100, 630, 80, 80);
    ellipse(270, 590, 40, 40);
    pop();

    ship();

    //ship();
    if (result === "crashed") {
      //background(255, 255, 255);
      fill(240, 128, 128);
      noStroke();
      textSize(20);
      text("You crashed :(", 200, 240);
      bunny(200, yVal);
      // this makes the bunny go upp
      yVal = yVal + ySpeed;
      if (yVal >= 550) {
        ySpeed = -1;
      }
      fill(255, 255, 255);
      strokeWeight(0);
      textSize(20);
      textAlign(CENTER);
      textFont("Helvetica");
    } else if (result === "won") {
      ship(200, 550, keyIsDown(32));
      noStroke();
      fill(248, 241, 174);
      textSize(20);
      text("You landed :D", 200, 240);
    } else if (result === "nofuel") {
      fill(240, 128, 128);
      noStroke();
      textSize(20);
      text("Out of fuel", 200, 240);
      ship(200, yVal, keyIsDown(32));
    }
    startS = false;
    gameS = false;
    resultS = true;
  }
  if (gameS) {
    //the ship falling
    ship(200, yVal, keyIsDown(32));
    fuelmeter(fuelTank);
    //its going
    yVal = yVal + ySpeed;
    //takes away from the speed value
    if (keyIsDown(32)) {
      ySpeed = ySpeed - 0.7;
      fuelTank -= 1;
    } else {
      ySpeed = ySpeed + accel;
    }
  }

  if (state === "game" && yVal >= 550 && ySpeed <= 5) {
    yVal = 590;
    state = "result";
    result = "won";
  } else if (state === "game" && yVal >= 550 && ySpeed > 5) {
    state = "result";
    result = "crashed";
    yVal = 590;
  } else if (fuelTank <= 0) {
    state = "result";
    result = "nofuel";
    yVal = yVal + ySpeed * 3;
  } else if (state === "game") {
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
      fuelTank = 40;
    } else if (state === "game") {
      state = "result";
    } else if (state === "result") {
      state = "game";
      yVal = 30;
      ySpeed = 0;
      velocity = 0.1;
      fuelTank = 40;
    }
}

function coloredStars() {
  // colored stars
  star(245, 20, 255, 133, 82);
  star(10, 20, 133, 255, 199);
  star(50, 50, 230, 230, 230);
  star(308, 68, 255, 241, 208);
  star(370, 108, 240, 200, 8);
  star(320, 200, 6, 174, 213);
  star(40, 190, 152, 217, 194);
  star(137, 72, 171, 237, 198);
}
