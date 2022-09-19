const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ],
};

const sketch = () => {
  return ({ context, width, height }) => {


    // Off-white background
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.stroke();
    // context.strokeStyle = "white";
    context.lineWidth = width * 0.01;



    //4loop rectangles x 5
    for (let i = 0; i < 5; i++){
      //4loop nested rectangles 5 x 5
     for (let j = 0; j < 5; j++){
      let width =60;
      let height = 60;
      let gap = 20;
      let x = 100 + (width + gap) * i;
      let y = 100 + (height + gap) * j;

      context.beginPath();
      context.rect(x, y, width, height);
      context.stroke();
      // context.strokeStyle = "white";
      if (Math.random() > 0.5){
        context.beginPath();
        context.rect(x + 8, y + 8, width - 16, height - 16);
        context.stroke();

      };
     };
    };
  };
};
canvasSketch(sketch, settings);
