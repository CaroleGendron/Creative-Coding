//------------- DOCUMENTATION ------------//
//library : https://github.com/mattdesl/canvas-sketch
// documentation canvas-sketch : https://github.com/mattdesl/canvas-sketch/blob/master/docs/api.md
// canvas element which is a rectangular map of pixels in the window browser
//it is programable, with an API creating a context we can interact with ( =p5.js, two.js = libraries on top of canvas element)
//API gives access to pre build functions : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas

//-------------  CANVAS-SKETCH BOILER PLATE ------------//

//in terminal
  // !file! canvas-sketch sketches/basicsJS.js --new --open --output=media/Europe

//canvas-sketch boiler-plate (created by  --new )
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ] //"A4" or "Letter"
};

const sketch = () => {

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);

//sketch only runs once and settings in continus, that's why you have animate in settings
