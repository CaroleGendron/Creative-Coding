//https://www.domestika.org/en/courses/3862-creative-coding-2-0-in-js-animation-sound-color/units/14952-curves

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  let x, y, w , h

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    x = width * 0.5;
    y = height * 0.5;
    w = width * 0.6;
    h = height * 0.1;

    //FIRST OPTION  using point after points
    context.save(); //save the current state
    context.translate(x,y);//moving canvas from original point
    context.strokeStyle = "blue";

    context.beginPath();//activate action
    context.moveTo(w* -0.5, h* -0.5); //tells where to start to draw
    context.lineTo (w * 0.5, h* -0.5);
    context.lineTo (w * 0.5, h* 0.5);
    context.lineTo (w * -0.5, h* 0.5);
    context.lineTo (w * -0.5, h* -0.5);
    context.closePath();
    context.stroke(); //make the actual line print

    context.restore(); //to avoid messing up when we get back to original point in loop

    //SECOND OPTION  using translate (replicate patterns)
    x = width * 0.1;
    y = height * 0.1;
    w = width * 0.5;
    h = height * 0.08;

    context.save(); //save the current state
    context.translate(x* 0.5,y* 0.5);//moving canvas from original point
    context.strokeStyle = "red";

    context.beginPath();//activate action
    context.moveTo(0,0); //tells where to start to draw
    context.lineTo (w,0);
    context.lineTo (w,h);
    context.lineTo (0,h);
    context.closePath();
    context.stroke(); //make the actual line print

    context.restore(); //to avoid messing up when we get back to original point in loop

  };
};

canvasSketch(sketch, settings);
