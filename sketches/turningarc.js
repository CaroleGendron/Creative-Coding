const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 800, 800 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const degToRad = (degrees) => {
      return degrees / 180 * Math.PI;
    };

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.001;
    const h = height * 0.3;
    let x,y;

    const num =320;
    const radius = width * 0.1;

    for (let i =0; i <num; i++){

      const slice = degToRad(360/num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle * Math.PI  * 100);
      y = cy - 40+ radius * Math.cos(angle * Math.PI * -0.1);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);

      context.beginPath();
      context.rect(-w*0.9,- h*0.9, w, h);
      context.fill();
      context.restore()
    };
    context.fillStyle = 'grey';
    context.fillText("ⓒHumAIn_Art. Making Data more Human",560, 770)
  };
};

canvasSketch(sketch, settings);


x = cx + radius * Math.sin(angle * Math.PI  * -.880);
y = cy - 40+ radius * Math.cos(angle * Math.PI * -0.1);

context.save();
context.translate(x,y);
context.rotate(-angle);

context.beginPath();
context.rect(-w*0.9,- h*0.9, w, h);
context.fill();
context.restore()
