// this is just a test page / using to make the figures
var circles = [];
function ship(x, y) {
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
}
function bunny(x, y) {
  //wings

  fill(255, 255, 255);
  ellipse(x + 40, y - 5, 26, 10);
  ellipse(x + 42, y, 12, 9);
  ellipse(x + 35, y - 1, 10, 12);
  ellipse(x - 40, y - 5, 26, 10);
  ellipse(x - 42, y, 12, 9);
  ellipse(x - 35, y - 1, 10, 12);

  /*push();
  angleMode(DEGREES);
  translate(100, 100);
  rotate(-6);
  fill(255, 255, 255);
  ellipseMode(CENTER);
  ellipse(x - 55, y - 100, 10, 1);
  pop();
  push();
  angleMode(DEGREES);
  translate(100, 100);
  rotate(14);
  fill(255, 255, 255);
  ellipseMode(CENTER);
  ellipse(x - 80, y - 110, 10, 1);
  pop();*/
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
  stroke(139, 69, 19);
  strokeWeight(2);
  line(x - 12, y - 4, x - 8, y - 1);
  line(x - 8, y - 4, x - 12, y - 1);
  line(x + 12, y - 4, x + 8, y - 1);
  line(x + 8, y - 4, x + 12, y - 1);
  //circle(x - 10, y - 4, 6);
  //circle(x + 10, y - 4, 6);
  //mouth
  stroke(139, 69, 19);
  strokeWeight(1);
  line(x, y - 4, x - 3, y - 1);
  line(x, y - 4, x + 3, y - 1);
  noStroke();
  fill(248, 241, 174);
  ellipse(x, y - 30, 15, 3);
}
/*var spot = {
  x: 100,
  y: 50,
};

var col = {
  r: 255,
  g: 0,
  b: 0,
};*/
function setup() {
  createCanvas(400, 600);
  background(2, 12, 18);

  frameRate(30);
  // Lets make sure we don't get stuck in infinite loop
  var protection = 0;

  // Try to get to 500
  while (circles.length < 500) {
    var circle = {
      x: random(width),
      y: random(height),
      r: random(6, 36),
    };

    // Does it overlap any previous circles?
    var overlapping = false;
    for (var j = 0; j < circles.length; j++) {
      var other = circles[j];
      var d = dist(circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        overlapping = true;
      }
    }

    // If not keep it!
    if (!overlapping) {
      circles.push(circle);
    }

    // Are we stuck?
    protection++;
    if (protection > 10000) {
      break;
    }
  }

  // Draw all the circles
  for (var i = 0; i < circles.length; i++) {
    // fill(255, 0, 175, 100);
    fill(255, 255, 255, 100);
    noStroke();
    ellipse(circles[i].x, circles[i].y, 3, 3);
  }
}

function draw() {
  //background(2, 12, 18);
  /*for (let i = 0; i <= 0; i = i + 1) {
    // use a local variable to give x
    var xPos = random(0, width);
    var yPos = random(0, height);
    ellipse(xPos, yPos, 2, 2);
  }*/
  //ellipse(random(width), random(height), 2, 2);
  ship(50, 50);
  star(200, 200);
  noStroke();
  fill(167, 187, 236);

  ellipse(200, 760, 400, 400);
  ellipse(100, 630, 100, 100);
  ellipse(270, 590, 60, 60);
}
function star(x, y) {
  noStroke();
  fill(255, 255, 255);
  circle(x, y - 1, 8);
  stroke(255, 255, 255);
  strokeWeight(2);
  line(x, y, x + 7, y - 2);
  line(x, y, x - 7, y - 2);
  line(x, y, x - 5, y + 6);
  line(x, y, x + 4, y + 5);
  line(x, y, x, y - 9);
}
