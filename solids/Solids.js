function drawSolid(x, y, z){
	translate(-x/2, -y/2, -2*z/3);

	//back
	quad(x,0,0, 0,0,0, 0,y,0, x,y,0);

	texture(graphic3);
	//left
	quad(0,0,z, 0,0,0, 0,y,0, 0,y,z);

	texture(graphic4);
	//top
	quad(0,0,z, x,0,z, x,0,0, 0,0,0);

	texture(graphic1);
	//bottom
	quad(0,y,0, x,y,0, x,y,z, 0,y,z);

	texture(graphic2);
	//right
	quad(x,0,0, x,0,z, x,y,z, x,y,0);

	//front
	//quad(x,0,z, 0,0,z, 0,y,z, x,y,z);
}

function drawCube(l){
	translate(-l/2, -l/2, 0);

	//back
	quad(l,0,0, 0,0,0, 0,l,0, l,l,0);

	//left
	quad(0,0,0, 0,0,l, 0,l,l, 0,l,0);

	//top
	quad(l,0,l, 0,0,l, 0,0,0, l,0,0);

	//bottom
	quad(0,l,0, l,l,0, l,l,l, 0,l,l);

	//left
	quad(l,0,0, l,0,l, l,l,l, l,l,0);

	//front
	//quad(l,0,l, 0,0,l, 0,l,l, l,l,l);
}

function drawPyramid(l) {
	beginShape(TRIANGLES);
  
	vertex(-l, -l, -l);
	vertex( l, -l, -l);
	vertex( 0, 0, l);
  
	vertex( l, -l, -l);
	vertex( l, l, -l);
	vertex( 0, 0, l);
  
	vertex( l, l, -l);
	vertex(-l, l, -l);
	vertex( 0, 0, l);
  
	vertex(-l, l, -l);
	vertex(-l, -l, -l);
	vertex( 0, 0, l);
  
	endShape();
  }


  function createPyramid(x,y,z){
	beginShape(TRIANGLE_STRIP);
	vertex(-x/2, y/2, -z/2);
	vertex(x/2, y/2, -z/2);
	vertex(0, -y/2, 0);
	vertex(-x/2, y/2, -z/2);
	vertex(-x/2, y/2, z/2);
	vertex(0, -y/2, 0);
	vertex(-x/2, y/2, z/2);
	vertex(x/2, y/2, z/2);
	vertex(0, -y/2, 0);
	vertex(x/2, y/2, z/2);
	vertex(x/2, y/2, -z/2);
	vertex(0, -y/2, 0);
	endShape(CLOSE);
}