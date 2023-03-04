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
  rect(x, y, 40, 40);

  if (jetBoost) {
    fill(255, 255, 255);
    circle(x + 20, y + 60, 20, 20);
  }
}

let state = "start";

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    endScreen();
  }
  ship(100, 100, keyIsPressed);
}

function mouseClicked() {}
