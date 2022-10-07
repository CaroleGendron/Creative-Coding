const canvasSketch = require('canvas-sketch'); //container for graphics
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [ 1048, 1048 ],
  //Insta : 1080/1080 pixels wide. Portrait 1080 x 1350 pixels / landscape 1080 x 566 .
  //  GIF file size [ 256, 256 ]
  //print = minimum of 3300 by 2550 pixels
  //poster size = 6000 pixels on the long side
  //Phone wallpapers: 1920x1080
  //Personal Website recommended 1920 x1080 pixels
  //Twitter post image size: 1024 x 512 pixels
  //Facebook image post: 1200 x 630 pixels

  exportPixelRatio: 2,  // Export at a higher resolution than what we see in the browser
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

   //restore canvas
    context.restore()

    //center a rectangle
    context.beginPath()
    var recWidth = 200
    var recHeight = 200
    var xPos = (width/2) - (recWidth/2);
    var yPos = (height/2) - (recHeight/2);
    context.fillRect(xPos,yPos,recWidth,recHeight);
    context.restore()


    // //Position thDraw a red line at y = 100
    context.save()
    context.strokeStyle = "red";
    context.moveTo(5, 700);
    context.lineTo(700, 700);
    context.stroke();

    context.font = "40px Arial"
    context.fillStyle = 'black';

    //Place each word at y = 100 with different textBaseline values
    context.textBaseline = "top";
    context.fillText("Top", 15, 700);
    context.textBaseline = "bottom";
    context.fillText("Bottom", 150, 700);
    context.textBaseline = "middle";
    context.fillText("Middle", 320, 700);
    context.restore()
  };
};

canvasSketch(sketch, settings);

// # Save animations to MP4 file
// canvas-sketch sketches/animation.js --output=media/--stream

// # Save animations to GIF file instead
// canvas-sketch sketches/animation.js --output=media/ --stream=gif

// # Save animations to GIF but scale it down to 512 px wide
// canvas-sketch sketches/animation.js --output=tmp --stream [ gif --scale=512:-1 ]
