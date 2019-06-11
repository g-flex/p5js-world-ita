let angle = 0;
let newAngle = 0;
let texture1, graphic1, graphic2, graphic3, graphic4, halfWidth, halfHeight;
function preload(){
	texture1 = loadImage('./ionew.png');
}
function stringToImg(string){
	let grf = createGraphics(width, height);
	grf.background(97, 80, 108);
	grf.fill(200);
	grf.textAlign(CENTER);
	grf.textSize(50);
	grf.text(string, width/2, height/2);
	return grf;
}
function setup() {
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	halfHeight = height/2;
	halfWidth = width/2;
	graphic1 = stringToImg('G-flex');
	graphic2 = stringToImg('3D experimenting');
	graphic3 = stringToImg('Mohole is where it all begun');
	graphic4 = stringToImg('To the stars');
}

function draw() {
	background(0);
	stroke(255);
	strokeWeight(2);
	fill(150,0,0);

	if (mouseIsPressed) {
		if(angle>.9){
			newAngle += 0.01;
			translate(0, 0, angle*100);
			rotateY(newAngle);
		} else {
			translate(0, 0, angle*100);
			angle += 0.01;
		}
	} else {
		translate(0, 0, 0);
		angle = radians(0);
	}
	//rotateX(PI);
	rotateY(-(((mouseX-halfWidth)/halfWidth)*(PI/2))/10);
	rotateX(-(((halfHeight-mouseY)/halfHeight)*(PI/2))/10);
	ambientLight(255);
	ambientMaterial(255);
	texture(texture1);
	drawSolid(width, height, width);
	//drawCube(300);
}