function square(x, y, radius) {
  rect(x-radius, y-radius, radius*2, radius*2)
}

background(255);
noFill();
for (var i=0; i < 5; i++) {
  for (var j=1; j<5; j++) {
    var x = (width/5 * i) + (width/10);
    square(x, height/2, j*5);
  }
}

