const canvasSketch = require('canvas-sketch');
const math = require ('canvas-sketch-util/math')
const random = require ('canvas-sketch-util/random')

const settings = {
  dimensions: [ 1080, 1080 ]
};


const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';


    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;

    const num =400;
    const radius = width * 0.3; //circle width


    for (let i =0; i <num; i++){

      const slice = math.degToRad(6600/num);
      const angle = slice * i;

      // x = cx + radius * Math.sin(angle);
      // y = cy + radius * Math.cos(angle);

      // context.rotate(-angle);

      // context.save();
      // context.translate(x,y);
      // context.rotate(-angle);
      // context.scale(random.range(0.1,2),random.range(0.1, 0.5));

      // context.beginPath();
      // context.rotate(-angle);
      // context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      // context.fill();
      // context.restore()

      // context.save();
      // context.translate(cx, cy);
      // context.rotate(-angle);

      // context.lineWidth = random.range(5,20);

      context.beginPath();
      context.arc(110, 100,radius * random.range(2.7, 5), slice * random.range(6,-8), slice * random.range(0,10));
      context.stroke();
//
      // context.restore()

    }
  };
};

canvasSketch(sketch, settings);
