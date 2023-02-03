//https://www.domestika.org/en/courses/3862-creative-coding-2-0-in-js-animation-sound-color/units/14950-the-setup#_=_

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 800, 800 ],
  animate: true,
  fps: 60
};

const sketch = ({context, width, height}) => {

  let x = 0; //will happen just once,to set up point de depart
  let y = 0;

  context.fillStyle = 'white';
  context.fillRect(0, 0, width, height);

  return ({ context, width, height, frame }) => {

    if (frame > 138) return; //to make it stop after 3 lines, 138 frames

    x += 10  //speed of movement

    //to bounce house when it hits the max
    if (x > 460) {  //460 = 800 size canvas - 50%house
      y += 240;
      x = 0
    }

    //set line settings
    context.fillStyle = (frame % 2) ? 'black': "white";
    context.lineWidth = 10;
    context.strokeStyle = context.fillStyle ;

    context.strokeRect(x + 75, y + 140, 150, 110); //walls
    context.fillRect(x + 130, y + 190, 40, 60); //door
    context.beginPath(); //roof
    context.moveTo(x + 50, y + 140);
    context.lineTo(x + 150, y + 60);
    context.lineTo(x + 250, y + 140);
    context.closePath();
    context.stroke();
  };
};

canvasSketch(sketch, settings);
