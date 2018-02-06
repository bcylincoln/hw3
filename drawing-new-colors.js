function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(165, 2, 6);
  } else if (key == 'G') {
    fill(3, 122, 58);
  } else if (key == 'B') {
    fill(55, 72, 172); 
  } else if (key == 'P') {
  	fill(155,114,117)
  } else if (key == 'T') {
  	fill(20, 136, 154)
  }
}

