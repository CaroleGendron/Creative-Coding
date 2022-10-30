//The Wizard Bear CC-BY-SA 2019 https://www.openprocessing.org/sketch/713379

var string = "data-feelings.com"; //words to be displayed intially
const size = 55; //font size
const fontFile = "Muli-Black.ttf";
const showText = true; //whether or not to have an overlay of the original text (in the background color)
const textAlpha = 5; //the alpha of the text if displayed (low value will make it slowly fade in)
const backgroundColor = 255; //kinda self-explanatory
const strokeAlpha = 130; // //the alpha of the lines (lower numbers are more transparent)
const strokeColor = 254; //254 the line color


const fontSampleFactor = 0.3; //How many points there are: the higher the number, the closer together they are (more detail)

const noiseZoom = 0.006; //how zoomed in the perlin noise is
const noiseOctaves = 4; //The number of octaves for the noise
const noiseFalloff = 0.5; //The falloff for the noise layers

const zOffsetChange = 0; //How much the noise field changes in the z direction each frame
const individualZOffset = 0; //how far away the points/lines are from each other in the z noise axies (the bigger the number, the more chaotic)

const lineSpeed = 14; //the maximum amount each point can move each frame

const newPointsCount = 9; //the number of new points added when the mouse is dragged

var seed;
var font;
var points = [];
var startingPoints;

function preload() {
	font = loadFont(fontFile);

}

function setup() {
	createCanvas(500, 500); //createCanvas(windowWidth, windowHeight);
	textFont(font);
	fill(200,200,200, textAlpha);//fill(200,200,200, textAlpha);
	stroke(0,0,250, strokeAlpha);//stroke(0,0,250, strokeAlpha);
	noiseDetail(noiseOctaves, noiseFalloff);
	seed = floor(random(1000000));
	//textSize(size);
		background(0,0,0,backgroundColor);//background(5,15,230,backgroundColor);

	start();
}

function start(){

	textSize(size);

	randomSeed(seed);
	noiseSeed(seed);
	frameCount = 0;
	startingPoints = font.textToPoints(string, width / 2 - textWidth(string) / 2, height / 2, size, {"sampleFactor": fontSampleFactor});

	points = [];
	for (let p = 0; p < startingPoints.length; p++) {
		points[p] = startingPoints[p];
		points[p].zOffset = random();
	}

}

function draw() {
	if(showText){
		noStroke();//stroke(100,100,100);
		text(string, width /2  - textWidth(string)/2 , height/2 );//text(string, width / 2 - textWidth(string) / 2, height / 2);
		stroke(200,50,50, strokeAlpha);
	}
	for (let pt = 0; pt < points.length; pt++) {
		let p = points[pt];
		let noiseX = p.x * noiseZoom;
		let noiseY = p.y * noiseZoom;
		let noiseZ = frameCount * zOffsetChange + p.zOffset*individualZOffset;
		let newPX = p.x + map(noise(noiseX, noiseY, noiseZ), 0, 1, -lineSpeed, lineSpeed);
		let newPY = p.y + map(noise(noiseX, noiseY, noiseZ + 214), 0, 1, -lineSpeed, lineSpeed);
		line(p.x, p.y, newPX, newPY);
		p.x = newPX;
		p.y = newPY;
	}

}

function keyPressed() {
	if (key == 's') {
		save();
	}else if(keyCode === RETURN){
		seed = floor(random(1000000));
		start();

	}
}

