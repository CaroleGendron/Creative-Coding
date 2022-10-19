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
    const cy = height * 0.47;
    const w = width * 0.001;
    const h = height * 0.2;
    let x,y;

    const num =2520;
    const radius = width * 0.08;

    for (let i =0; i <num; i++){

      const slice = degToRad(360/num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle * Math.PI * -500);
      y = cy + radius * Math.cos(angle  * Math.PI * -10);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);

      context.beginPath();
      context.rect(-w*10,- h*-0.5, w, h);
      context.fill();
      context.restore()
    }

  //Function "centerX" to find center position x, automatically
  const centerX = (text) => {
    const metrics = context.measureText(text);
    const textWidth =  metrics.width;
    return (width/2) - (textWidth/2)
  };

  //Title cosmetics and center
  const title = "Hypnose"
  context.fillStyle = 'black';
  context.font = "70px futura";
  const titleCenter = centerX( title)
  context.fillText(title, titleCenter, 1010)

  //Title serie name + font
  const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
  context.fillStyle = 'grey';
  context.font = "25px futura";
  const serieCenter = centerX(serie)
  context.fillText(serie, serieCenter, 1055)

  };
};

canvasSketch(sketch, settings);
