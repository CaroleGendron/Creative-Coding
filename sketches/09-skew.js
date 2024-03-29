//https://www.domestika.org/en/courses/3862-creative-coding-2-0-in-js-animation-sound-color/units/14952-curves
//documentation : https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#reference


const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  let x, y, w , h

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

   x = width *0.5;
   y = height * 0.5;
   w = width * 0.6;
   h = height * 0.1;

   context.save();
   context.translate (x,y);
   context.translate (w * -0.5, h * -0.5);
   context.strokeStyle = 'blue';

   context.beginPath();
   context.moveTo (0,0);
   context.lineTo(w,0);
   context.lineTo(w,h);
   context.lineTo(0,h);
   context.closePath();
   context.stroke()

   context.restore()
  };
};

canvasSketch(sketch, settings);
