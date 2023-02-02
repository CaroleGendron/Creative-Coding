
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1000, 1000 ],
};

// random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const sketch = () => {
  return ({ context, width, height }) => {

    // background canvas
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    //Random Color for Circle
    context.beginPath();
    var randomColor = getRandomColor();
    context.arc(700, 650,100, 0, Math.PI *2 );
    context.fillStyle = randomColor;
    context.fill();
    context.restore();

    // Fill with image repeated pattern
    context.beginPath();
    img = new Image();
    img.src = 'media/arc.png';
    pattern = context.createPattern(img, "repeat");
    context.save()
    context.rect(40, 600, 450, 400);
    context.fillStyle = pattern;
    context.fill();
    context.restore()

    //RGBA , HEX https://www.shutterstock.com/colors
    context.fillStyle = 'orange';
    context.fillStyle = '#FFA500';
    context.fillStyle = 'rgb(255, 165, 0)';
    context.fillStyle = 'rgba(255, 165, 0, 0.7)'; //The alpha  is a number between 0.0 (fully transparent) and 1.0 (fully opaque)


    // Shadow (before rectangle)
    context.shadowOffsetX = 60;
    context.shadowOffsetY = 6;
    context.shadowColor = "grey"
    context.shadowBlur = 45;


    // Fill plain rectangle
    context.fillRect(250, 200, 300, 300);//strokeRect(x, y, width, height).Draws a rectangular outline.
    context.restore()

    // Stroke Rectangle Red border : 	context.rect(x,y,width,height);
    context.lineWidth = "6";
    context.strokeStyle = "red";
    context.strokeRect(180, 405, 350, 140) //strokeRect(x, y, width, height). Draws a rectangular outline.
    context.restore()


    // Create gradient
    var gradient = context.createLinearGradient(100, 0, 420, 0);//(x,y,x1,y1)
    // var gradient = context.createRadialGradient(100, 150, 5, 100, 200, 300);
    gradient.addColorStop(0, "green");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "green");

    // Fill with gradient
    context.beginPath();
    context.fillStyle = gradient;
    context.fillRect(100, 80, 300, 300);
    context.restore()

    //text
    context.beginPath();
    context.fillStyle = 'black';
    context.font = "30px Arial";
    context.fillText("Text plain", 920, 900); //fillText(text,x,y) - draws "filled" text on the canvas
    context.shadowColor = "grey"
    context.shadowBlur = 45;
    context.restore()


  };

};


canvasSketch(sketch, settings);
