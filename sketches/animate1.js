const canvasSketch = require('canvas-sketch');
const math = require ('canvas-sketch-util/math')
const random = require ('canvas-sketch-util/random')

const settings = {
  dimensions: [ 800, 800 ],
  animate : true,// Set loop duration to 3
  duration: 3,
  // Use a small size for better GIF file size
  // Optionally specify a frame rate, defaults to 30
  fps: 0.5,
  animate: true,
  playbackRate: 'throttle'
};



const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const cx = width * 0.15;
    const cy = height * 0.05;
    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;

    const num =100;
    const radius = width * 0.25;

    for (let i =0; i <num; i++){

      const slice = math.degToRad(360/num);
      const angle = slice * i;

      x = cx + radius *1.8 * Math.sin(angle);
      y = cy + radius *2 * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      context.scale(random.range(0.1,2),random.range(0.9, 5));
      context.shadowBlur = 15;
      context.shadowColor = "GREY";

      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      var grd = context.createLinearGradient(0, 0, 70, 100);
      grd.addColorStop(0, "RED");
      grd.addColorStop(1, "black");
      context.fillStyle = grd;
      context.fill();
      context.restore()

      context.save();
      context.translate(cx, cy);
      context.rotate(-angle);

      context.lineWidth = random.range(2,10);

      context.beginPath();
      context.arc(0, 0,radius*2.5 * random.range(0.7, 1.3), slice * random.range(1,-8), slice * random.range(0,5));
      var grd = context.createLinearGradient(0, 0, 70, 100);
      grd.addColorStop(0, "RED");
      grd.addColorStop(1, "black");


      context.stroke();
      context.strokeStyle =grd;
      context.restore()
    };
    context.fillStyle = 'grey';
    context.font = "15px futura";
    context.fillText("Making Data more Human",560, 750)
    context.fillText("ⓒHumAIn_Art",600, 770)
  };
};

canvasSketch(sketch, settings);
