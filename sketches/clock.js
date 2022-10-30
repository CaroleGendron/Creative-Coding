const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
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
    const w = width * 0.02;
    const h = height * 0.2;
    let x,y;

    const num =27;
    const radius = width * 0.28;

    for (let i =0; i <num; i++){

      const slice = degToRad(360/num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);

      context.beginPath();
      context.rect(-w*0.5,- h*0.5, w, h);
      context.fill();
      context.restore()
    }
    context.fillStyle = "#2D3F3C";
    context.font = "80px futura";
    context.fillText("Europe", 780, 1010)
    context.fillStyle = "grey";
    context.font = "18px futura";
    context.fillText("ⓒHumAIn_Art",870, 1050)
  };
};

canvasSketch(sketch, settings);
