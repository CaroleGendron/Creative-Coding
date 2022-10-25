
const canvasSketch = require('canvas-sketch');
const load = require('load-asset');


// We create an 'async' sketch
canvasSketch(async ({ update }) => {
  // Await the image loader, it returns the loaded <img>
  const image = await load('media/o2.jpg');
  console.log("image",image)
  // Once the image is loaded, we can update the output
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
    context.drawImage(image, 150, 135, width*0.7, height*0.67);
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

    const title = "City";
    context.fillStyle = '#212021';
    context.font = "70px futura";
    const titleCenter = centerX(title);
    context.fillText(title, titleCenter, 910);

    context.font = "italic 30px futura";
    const subtitle = "by Artificial Intelligence"
    const subtitleCenter = centerX(subtitle)
    context.fillText(subtitle, subtitleCenter, 960)

    //Title serie name + font
    const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
    context.fillStyle = 'grey';
    context.font = "20px futura";
    const serieCenter = centerX(serie)
    context.fillText(serie, serieCenter, 1000)
  };
  });

//----------------//--Hypnose-//---


// const canvasSketch = require('canvas-sketch');
// const load = require('load-asset');

// const settings = {
//   dimensions: [ 1080, 1080 ],

// };

// const sketch = () => {
//   return ({ context, width, height }) => {

//     context.fillStyle = '#F6F3E1'; //1
    // context.fillRect(0, 0, width, height);

    // context.fillStyle = 'blue'; //1
    // context.fillRect(100, 100, 880, 800);

    // const degToRad = (degrees) => {
    //   return degrees / 360 * Math.PI;
    // };

    // context.fillStyle = "black";

    // const cx = width * 0.5;
    // const cy = height * 0.4;
    // const w = width * 0.001;
    // const h = height * 0.3;

    // let x,y;

    // const num =520;
    // const radius = width * 0.35;

    // for (let i =0; i <num; i++){

    //   const slice = degToRad(350/num);
    //   const angle = slice * i;

    //   x = cx +10 + radius * Math.sin(angle * Math.PI  * 1000);
    //   y = cy-300 + radius * Math.cos(angle * Math.PI * 0);

    //   context.save();
    //   context.translate(x,y);
    //   context.rotate(angle * -Math.PI +270);
    //   context.shadowBlur = 1.618

    //   context.beginPath();
    //   context.rect(-w /Math.PI,- h * 0.90, w, h);
    //   context.fill();
    //   context.restore()
    // }

  //   //Function "centerX" to find center position x, automatically
  //   const centerX = (text) => {
  //   const metrics = context.measureText(text);
  //   const textWidth =  metrics.width;
  //   return (width/2) - (textWidth/2)
  // };

//   //Title cosmetics and center
//   const title = "Twitter"
//   context.fillStyle = 'black';
//   context.font = "70px futura";
//   const titleCenter = centerX( title)
//   context.fillText(title, titleCenter, 1010)

//   //Title serie name + font
//   const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
//   context.fillStyle = 'grey';
//   context.font = "20px futura";
//   const serieCenter = centerX(serie)
//   context.fillText(serie, serieCenter, 1055)

    // };
// };

// canvasSketch(sketch, settings);


//---------------------//-----------------

// const canvasSketch = require('canvas-sketch');

// const settings = {
//   dimensions: [ 1080, 1080 ]
// };

// const sketch = () => {
//   return ({ context, width, height }) => {

//     context.fillStyle = '#F6F3E1';
//     context.fillRect(0, 0, width, height);

//     context.fillStyle = 'black';

//     const degToRad = (degrees) => {
//       return degrees / 180 * Math.PI;
//     };

//     const cx = width * 0.5;
//     const cy = height * 0.47;
//     const w = width * 0.001;
//     const h = height * 0.2;
//     let x,y;

//     const num =2520;
//     const radius = width * 0.08;

//     for (let i =0; i <num; i++){

//       const slice = degToRad(360/num);
//       const angle = slice * i;

//       x = cx + radius * Math.sin(angle * Math.PI * -500);
//       y = cy + radius * Math.cos(angle  * Math.PI * -10);

//       context.save();
//       context.translate(x,y);
//       context.rotate(-angle);

//       context.beginPath();
//       context.rect(-w*10,- h*-0.5, w, h);
//       context.fill();
//       context.restore()
//     }

//   //Function "centerX" to find center position x, automatically
//   const centerX = (text) => {
//     const metrics = context.measureText(text);
//     const textWidth =  metrics.width;
//     return (width/2) - (textWidth/2)
//   };

//   //Title cosmetics and center
//   const title = "Hypnose"
//   context.fillStyle = 'black';
//   context.font = "70px futura";
//   const titleCenter = centerX( title)
//   context.fillText(title, titleCenter, 1010)

//   //Title serie name + font
//   const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
//   context.fillStyle = 'grey';
//   context.font = "25px futura";
//   const serieCenter = centerX(serie)
//   context.fillText(serie, serieCenter, 1055)

//   };
// };

// canvasSketch(sketch, settings);
