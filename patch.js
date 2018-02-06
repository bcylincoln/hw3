function rbPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 50, 300);
  colorMode(HSB);
  
  for (var l = 0; l < 300; l+=30) {
   	stroke(l,50, 80); 
    for (var r = 0; r<300; r+=30) {
    	
      line(x, l + y, x+300, r+y); 
    }
  }
	
}


background(255);
zamfiPatch(0, 0); // draw patch at upper-left

background(255);
zamfiPatch(width-301, height-301); // draw patch at lower-right
