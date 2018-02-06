function draw() {
  
	noFill();
}
function mousePressed() {
	background(255);
  var x=mouseX
  var y=mouseY
	for (var i = 0; i <= width; i += 10) {
  line(x, y, i, height);
}
}

