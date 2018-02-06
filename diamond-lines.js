background(255);
noFill();

for (var i=0; i < height/2; i+=10) {
	line((width/2)-i, i, (width/2)+i, i);
}
for (var i=0; i <= height/2; i+=10) {
 	line((width/2)-i, height - i, (width/2)+i, height - i); 
}

