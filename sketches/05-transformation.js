const canvasSketch = require('canvas-sketch');
const math = require ('canvas-sketch-util/math')
const random = require ('canvas-sketch-util/random')

const settings = {

dimensions: [  1080, 1080],
// animate : true, starts a requestAnimationFrame loop once your sketch is loaded.
// animate : true, normally 60 frames per seconds
// duration: 3,  loop duration
// // // Optionally specify a frame rate, defaults to 30
// fps: 1,
// //throttle to slow down animation
// playbackRate: 'throttle',
// loop : true
};


const sketch = () => {
  return ({ context, width, height }) => {

context.fillStyle = "#F6F3E1";
context.fillRect(0, 0, width, height)
//transform : copy paste in new postion  / context.transform(a,b,c,d,e,f);
//a	Horizontal scaling, b	Horizontal skewing, c	Vertical skewing, d	Vertical scaling
//e	Horizontal moving, f	Vertical moving

context.fillStyle = "black";

const degToRad = (degrees)=>{
  return degrees / 180 * Math.PI;
}

const cx = width * 0.5;
const cy = height * 0.5;
const w = width * 0.01;
const h = width * 0.1;

const num = 12;
const radius = width * 0.3;

for (let i =0; i <num; i++){

  const slice = degToRad(360/ num); //To calculate from degrees to radians: degrees*Math.PI/180.
  const angle = slice * i;

  x = cx + radius * Math.sin(angle);
  y = cy + radius * Math.cos(angle);


  context.save();
  context.translate(x, y);
  context.rotate(-angle) //clock round : positive clockwise, negative counterclock. context.rotate(angle);, in radians.


  context.beginPath();
  context.rect(-w*0.5,- h*0.5, w, h);
  context.fill();
  context.restore();

    };
  };
};
canvasSketch(sketch, settings);

// # Save animations to MP4 file
// canvas-sketch sketches/animation.js --output=media/--stream

// # Save animations to GIF file instead
// canvas-sketch sketches/animation.js --output=media/ --stream=gif

// # Save animations to GIF but scale it down to 512 px wide
// canvas-sketch sketches/animation.js --output=tmp --stream [ gif --scale=512:-1 ]
