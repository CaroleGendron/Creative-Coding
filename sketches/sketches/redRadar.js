const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const degToRad = (degrees) => {
      return degrees / 180 * Math.PI;
    };

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.003;
    const h = height * 0.3;
    var grd = context.createLinearGradient(0, 0, 250, 0);
    grd.addColorStop(0, "RED");
    grd.addColorStop(1, "BLACK");

    let x,y;

    const num =120;
    const radius = width * 0.10;

    for (let i =0; i <num; i++){

      const slice = degToRad(300/num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle* Math.PI+6);
      y = cy + radius * Math.cos(angle* Math.PI);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      context.scale(Math.random(), 3)

      context.beginPath();
      context.rect(-w*0.9,- h*0.9, w, h);
      context.shadowBlur = 20;
      context.shadowColor = "black";
      context.fillStyle = grd;
      context.fill();
      context.restore()
    }
  };
};

canvasSketch(sketch, settings);
