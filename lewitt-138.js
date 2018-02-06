
stroke(100)
function concentricCircles(x, y) {
  for (var i=0; i <= 2*width; i+=40) {
  	ellipse(x, y, i)
  }
}

noFill();

concentricCircles(width/2, height/2);
concentricCircles(0, height/2);
concentricCircles(width/2, 0);
concentricCircles(width, height/2);
concentricCircles(width/2, height);

