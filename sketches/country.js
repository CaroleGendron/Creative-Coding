const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],

};

const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = '#F6F3E1'; //1
    context.fillRect(0, 0, width, height);

    const degToRad = (degrees) => {
      return degrees / 360 * Math.PI;
    };

    context.fillStyle = "black";

    const cx = width * 0.5;
    const cy = height * 0.4;
    const w = width * 0.001;
    const h = height * 0.3;
    let x,y;

    const num =520;
    const radius = width * 0.35;

    for (let i =0; i <num; i++){

      const slice = degToRad(350/num);
      const angle = slice * i;


      // x = cx + radius/1.5 * Math.sin(angle * Math.PI  + 1000);
      // y = cy -1500+ radius * Math.cos(angle * Math.PI * 0);

      x = cx +10 + radius * Math.sin(angle * Math.PI  * 1000);
      y = cy-300 + radius * Math.cos(angle * Math.PI * 0);

      context.save();
      context.translate(x,y);
      context.rotate(angle * -Math.PI +270);
      context.shadowBlur = 1.618

      context.beginPath();
      context.rect(-w /Math.PI,- h * 0.90, w, h);
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
  const title = "France"
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
