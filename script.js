let texture1, planet, halfWidth, halfHeight;
function preload(){
	texture1 = loadImage('./obj/nlhn.png');
	planet = loadModel('./obj/Globe.obj', true, function(){console.log('successfully loaded')}, function(){console.log('error loading 3d obj')});
}
function setup() {
	createCanvas(window.innerWidth, window.innerHeight, WEBGL);
	halfHeight = height/2;
	halfWidth = width/2;
}

function draw() {
	background(0);
	noStroke();
	ambientMaterial(255);

	directionalLight(0, 146, 70, 10, 10, .8);
	directionalLight(206, 43, 55, -10, -10, .8);

	push();
	scale(3.97);
	model(planet);
	pop();

	scale(4);

	rotateY((((mouseX-halfWidth)/halfWidth)*(PI/2))/70);
	rotateX((((halfHeight-mouseY)/halfHeight)*(PI/2))/70);

	rotateX(16*PI/20);
	rotateY(PI/6);
	rotateZ(3*PI/4);

	ambientLight(255);
	texture(texture1);
	model(planet);
}
