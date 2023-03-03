function ship(x, y) {
  noStroke();
  fill(133, 168, 159);
  ellipse(x, y + 12, 60, 20);
  fill(255, 255, 255);
  noStroke();
  ellipse(x - 9, y - 7, 10, 40);
  ellipse(x + 9, y - 7, 10, 40);
  fill(245, 218, 223);
  ellipse(x - 10, y - 10, 6, 30);
  ellipse(x + 10, y - 10, 6, 30);

  fill(255, 255, 255);
  ellipse(x, y, 40, 30);
  fill(245, 218, 223);
  circle(x - 12, y - 1, 6);
  circle(x + 12, y - 1, 6);
  fill(139, 69, 19);
  circle(x - 10, y - 4, 6);
  circle(x + 10, y - 4, 6);
  stroke(139, 69, 19);
  strokeWeight(1);
  line(x, y - 4, x - 3, y - 1);
  line(x, y - 4, x + 3, y - 1);
  noStroke();
  fill(133, 168, 159);
  ellipse(x, y + 16, 60, 20);
}

ship(100, 100);
