const canvasSketch = require('canvas-sketch');
const math = require ('canvas-sketch-util/math')
const random = require ('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    const grd = context.createRadialGradient(0, 0, 0, 90, 60, 1000);
    grd.addColorStop(0, "yellow");
    grd.addColorStop(1, "red");// Fill with gradient
    context.fillStyle = grd;
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.025;
    const h = height * 0.1;
    let x,y;

    const num =400;
    const radius = width * 0.27; //circle width

    for (let i =0; i <num; i++){

      const slice = math.degToRad(6600/num);
      const angle = slice * i;

      context.beginPath();
      context.arc(110, 100,radius * random.range(2.7, 5), slice * random.range(6,-8), slice * random.range(0,10));
      context.shadowBlur = 20;
      context.shadowColor = "black";
      context.stroke();
    }
  };
};

canvasSketch(sketch, settings);
