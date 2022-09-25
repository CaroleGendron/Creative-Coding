const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ],
  animate:true
};



const sketch = () => {
  return ({ context, width, height }) => {

    // Off-white background
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    // Red line rectangle: 	context.rect(x,y,width,height);
    context.lineWidth = "6";
    context.strokeStyle = "red";
    context.rect(5, 5, 350, 140);
    context.stroke();
    context.restore()

    // blue fill rectangle : context.fillRect(x,y,width,height);
    context.fillRect(20, 20, 150, 100);
    context.restore();

    //arc : context.arc(x,y,radius,sAngle,eAngle,counterclockwise);
    context.beginPath();
    context.arc(250, 75, 50, 0, 2 * Math.PI);
    context.arc(250, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    context.stroke();

      };
};

canvasSketch(sketch, settings);
