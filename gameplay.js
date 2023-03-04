function startScreen() {
  background(2, 12, 18);
  text("Start", 50, 50);
}
function gameScreen() {
  background(2, 12, 18);
  text("Game", 50, 50);
}
function endScreen() {
  background(136, 8, 8);
  text("Result", 50, 50);
}

function ship(x, y, jetBoost) {
  fill(255, 255, 255);
  rect(x, y, mass, mass);

  if (jetBoost) {
    fill(255, 255, 255);
    circle(x + 20, y + 60, 20, 20);
  }
}
// from https://editor.p5js.org/dansakamoto/sketches/S1J_MEXYm about gravity
function setup() {
  createCanvas(640, 360);

  yVal = 0;
  velocity = 0;
  mass = 20;

  accel = mass * 0.1;
}
//end of the gravity thingy
let state = "game";
let fuelTank = 100;

function draw() {
  //ads the falling ish

  velocity += accel;
  yVal += velocity;
  if (yVal > height - mass / 2) {
    // A little dampening when hitting the bottom
    velocity *= -0.6;
    yVal = height - mass / 2;
  }
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    text("Fuel" + fuelTank, 200, 100);
    //fuelTank = fuelTank - 1;
    //drawing ship but also if key is pressed att jetBoost
    ship(100, yVal, keyIsPressed);
  } else if (state === "result") {
    endScreen();
  }
}

function mouseClicked() {
  //Gravity things
  yVal = 0;
  velocity = 0;

  //changing gamescreen
  if (state === "start") {
    state = "game";
  } /* else if (state === "game") {
    state = "result";
  }*/ else if (state === "result") {
    state = "game";
  }
}
