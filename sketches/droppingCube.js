const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ],
};

const sketch = () => {
  return ({ context, width, height }) => {


    // Off-white background
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;


    // Variable rectangles. Constant size / Varialbe position axis
    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width * 0.02;

    let x,y;

    //

    //4loop rectangles x 5
    for (let i =0; i < 10; i++){
      //4loop nested rectangles 5 x 5
      for(let j= 0; j < 10; j++) {

      x = ix + (w + gap) * i;
      y = iy + (h + gap) * j;

      context.beginPath();
      context.rect(x, y, w , h);
      context.stroke();
      context.rotate(10 * Math.PI / 180);

      // sub intra rectangles
      rand = (Math.random ()> 0.4)
      if (rand){
        context.beginPath();
        context.rect(x +8, y+8, w -16 , h-16);
        context.stroke();

        // Gradient foreground
        const fill = context.createRadialGradient(75, 50, width, width, height, 100);
        fill.addColorStop(0, 'cyan');
        fill.addColorStop(1, 'orange');


        // // Fill rectangle
        context.fillStyle = fill;
        context.fillRect(x +15, y+15, w -36 , h-30);
        context.shadowBlur = 20;
        context.shadowColor = "black";
        context.shadowOffsetX = 20;

        }
      };
    };
  };
};
canvasSketch(sketch, settings);
