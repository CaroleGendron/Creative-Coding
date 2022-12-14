const canvasSketch = require('canvas-sketch');
const random = require("canvas-sketch-util/random")
const math = require("canvas-sketch-util/math")

const settings = {
  dimensions: [ 1080, 1080 ],
  animate : true

};

const sketch = () => {
  return ({ context, width, height, frame }) => { //declare frame to animae
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 10;
    const rows = 13;
    const numCells = cols * rows;

    const gridw = 0.8 * width;
    const gridh = 0.8 * height;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (let i = 0 ; i < numCells; i++) {

    //The remainder operator (%) returns the remainder left over when one operand is divided by a second operand.
    //It always takes the sign of the dividend. eg (13 % 5) => expected output: 3  10/5 closest fraction + 3 remaining
    const col = i % cols;

    //to find the end of the row we need to find th enb of cols, given by floor,
    //Math.floor : round down to the nearest integer
    //every 4 steps the value is incremented by one
    const row = Math.floor(i / cols);

    const x = col * cellw;
    const y = row * cellh;

    //we want to draw a line in each cell being smaller than the cell
    const w = cellw * 0.8;
    const h = cellh * 0.8;

    const n = random.noise2D(x + frame *13,y, 0.001);
    const angle = n * Math.PI * 0.2;
    const scale = math.mapRange(n, -1,1,1,30)

    context.save();
    context.translate(x,y);
    context.translate(margx,margy);
    context.translate(cellw * 0.5, cellh * 0.5);
    context.rotate(angle);

    context.lineWidth= scale;

    context.beginPath();
    context.moveTo (w * -0.5, 0);
    context.lineTo (w * 0.5, 0);
    context.stroke();

    context.restore();

    }

  };
};

canvasSketch(sketch, settings);
