const canvasSketch = require('canvas-sketch');
const load = require('load-asset');


// We create an 'async' sketch
canvasSketch(async ({ update }) => {
  // Await the image loader, it returns the loaded <img>
  const image = await load('media/twitter/romance.jpg');
  console.log("image",image)
  // Once the image is loaded, we can uPdate the output
  // settings to match it
  update({
    dimensions: [ image.width, image.height ]
  });

  const width = 1080;
  const height = 1080;

  // Now render our sketch
  return ({ context, width, height }) => {

    //setting background

    context.fillStyle = '#F6F3E1'; //1
    context.fillRect(0, 0, width, height);

    // Draw the loaded image to the canvas
    context.shadowOffsetX = 6;
    context.shadowOffsetY = 6;
    context.shadowColor = "grey"
    context.shadowBlur = 20;
    // context.drawImage(image, 180, 120, width*0.65, height*0.65);
    context.restore()

    // Extract bitmap pixel data
    const pixels = context.getImageData(0, 0, width, height);

    // Manipulate pixel data
    // ... sort & glitch pixels ...


    // Put new pixels back into canvas
    context.putImageData(pixels, 0, 0);


    //Function "centerX" to find center position x, automatically
    const centerX = (text) => {
    const metrics = context.measureText(text);
    const textWidth =  metrics.width;
    return (width/2) - (textWidth/2)
  };

    //Title cosmetics and center
    context.font = "100px futura";
    const title1 = "Human";
    context.fillStyle = '#212021';
    const titleCenter1 = centerX(title1);
    context.fillText(title1, titleCenter1, 830);


    context.font = "50px futura";
    const title2 = "1950 - 2100";
    context.fillStyle = '#212021';
    const titleCenter2 = centerX(title2);
    context.fillText(title2, titleCenter2, 900);

    context.font = "italic 30px futura";
    const subtitle = " created with Artificial Intelligence"
    const subtitleCenter = centerX(subtitle)
    context.fillText(subtitle, subtitleCenter, 950)

    //Title serie name + font
    const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
    context.fillStyle = 'grey';
    context.font = "20px futura";
    const serieCenter = centerX(serie)
    context.fillText(serie, serieCenter, 1000)
  };
  });
