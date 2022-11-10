const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ], //2 times insta
  animate: true, //to allow Tweakpane to work
};

const sketch = () => {
  return ({ context, width, height }) => {

    //setting background

    context.fillStyle = '#F6F3E1'; //1
    context.fillRect(0, 0, width, height);

    //Function "centerX" to find center position x, automatically
    const centerX = (text) => {
    const metrics = context.measureText(text);
    const textWidth =  metrics.width;
    return (width/2) - (textWidth/2)
  };

    //Title cosmetics and center
    context.font = "100px futura";
    const title1 = "The Next Human";
    context.fillStyle = '#212021';
    const titleCenter1 = centerX(title1);
    context.fillText(title1, titleCenter1, 860);


    context.font = "60px futura";
    const title2 = "1950 - 2100";
    context.fillStyle = '#212021';
    const titleCenter2 = centerX(title2);
    context.fillText(title2, titleCenter2, 930);

    context.font = "italic 30px futura";
    const subtitle = " created with Artificial Intelligence"
    const subtitleCenter = centerX(subtitle)
    context.fillText(subtitle, subtitleCenter, 980)

    //Title serie name + font
    const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
    context.fillStyle = 'grey';
    context.font = "20px futura";
    const serieCenter = centerX(serie)
    context.fillText(serie, serieCenter, 1030)
  };
};

canvasSketch(sketch, settings);
