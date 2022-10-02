
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1000, 1000 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    function draw(startX, startY, len, angle, branchWidth) {
      context.lineWidth = branchWidth;

      context.beginPath();
      context.save();

      context.strokeStyle = "green";
      context.fillStyle = "green";

      context.translate(startX, startY);
      context.rotate(angle * Math.PI/180);
      context.moveTo(0, 0);
      context.lineTo(0, -len);
      context.stroke();

      context.shadowBlur = 15;
      context.shadowColor = "rgba(0,0,0,0.8)";

      if(len < 10) {
          context.restore();
          return;
      }

      draw(0, -len, len*0.8, angle-15, branchWidth*0.8);
      draw(0, -len, len*0.8, angle+15, branchWidth*0.8);

      context.restore();
  }
  draw(500, 750, 120, 0, 10)
  };
};

canvasSketch(sketch, settings);
