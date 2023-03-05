// this is just a test page / using to make the figures
let stars = [];
let angle = 0;
//https://editor.p5js.org/nanou/sketches/rJ-EMpxa looks cool, but wont use
/*var spot = {
  x: 100,
  y: 50,
};

var col = {
  r: 255,
  g: 0,
  b: 0,
};*/

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

function draw() {
  background(2, 12, 18);
  //ship(50, 50);
  bunny(100, 100);

  // the falling star is from here https://editor.p5js.org/Ellie_Lin/sketches/rJVVSuTt7
  /*let s = new Star(
    random(0, width),
    random(0, height / 2),
    random(1, 3),
    random(1, 6),
    5,
    250,
    250,
    200
  );
  for (i = 0; i < random(3); i += 1) {
    stars.push(s);
  }
  for (let star of stars) {
    star.moveStar();
    star.createStar();
  }*/
  /*spot.x = random(0, width);
  spot.y = random(0, height);

  noStroke();
  col.r = random(100, 255);
  col.g = 0;
  col.b = random(100, 200);

  fill(col.r, col.g, col.b, 120);
  ellipse(spot.x, spot.y, 40, 40);*/
}

class Star {
  constructor(_x, _y, _r1, _r2, _npoints, _colr, _colg, _colb) {
    this.x = _x;
    this.y = _y;
    this.r1 = _r1;
    this.r2 = _r2;
    this.npoints = _npoints;
    this.colr = _colr;
    this.colg = _colg;
    this.colb = _colb;

    this.sx = 0;
    this.sy = 0;
    this.angle = TWO_PI / _npoints;
    this.halfAngle = TWO_PI / _npoints / 2;
  }

  createStar() {
    noStroke();
    fill(this.colr, this.colg, this.colb);
    beginShape();

    for (let j = 0; j < TWO_PI; j += this.angle) {
      this.sx = this.x + cos(j) * this.r2;
      this.sy = this.y + sin(j) * this.r2;
      vertex(this.sx, this.sy);
      this.sx = this.x + cos(j + this.halfAngle) * this.r1;
      this.sy = this.y + sin(j + this.halfAngle) * this.r1;
      vertex(this.sx, this.sy);
    }
    endShape(CLOSE);
  }

  moveStar() {
    this.y += pow(this.r1, 0.9);

    if (this.y > height) {
      let index = stars.indexOf(this);
      stars.splice(index, 1);
    }
  }
}
