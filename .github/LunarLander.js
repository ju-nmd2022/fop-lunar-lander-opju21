let x = 100;

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

function draw() {
  background(2, 12, 18);
  ship(150, 150);
  bunny(200, 200);
}
