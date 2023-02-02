const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const degToRad = (degrees) => {
      return degrees / 180 * Math.PI;
    };

    const x = width * 0.5;
    const y = height * 0.5;
    const w = width * 0.18;
    const h = height * 0.1;


    const num =12;

    for (let i =0; i <num; i++){

      const slice = degToRad(360/num);
      const angle = slice * i;

      // x = cx + radius * Math.sin(angle);
      // y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x,y);
      context.rotate(angle);
      context.transform(1,5,0,1,0,0)

      context.beginPath();
      context.rect(w*0.35, h*0.45, w, h);
      context.fill();
      context.restore()
    }
      const name_serie = "City"
      context.font = "180px futura";

      const len_serie = context.measureText(name_serie).width;
      const x_center = width/2 - (len_serie /2);
      context.fillText(name_serie,x_center, 400)
      context.fillStyle = "#2D3F3C";

      const text1 = "Artificial Intelligence"
      context.font = "60px futura";
      const len_text1 = context.measureText(text1).width;
      const x_center1 = width/2 - (len_text1 /2);
      context.fillText(text1,x_center1, 550)

      const text2 = "imagines"
      context.font = "60px futura";
      const len_text2 = context.measureText(text2).width;
      const x_center2 = width/2 - (len_text2 /2);
      context.fillText(text2,x_center2, 650)

      const text3 = "new urban realities"
      const len_text3 = context.measureText(text3).width;
      const x_center3 = width/2 - (len_text3 /2);
      context.fillText(text3,x_center3, 750)
      context.font = "40px futura";
      const humain = "ⓒHumAIn_Art"
      const len_hum = context.measureText(humain).width;
      const x_centerHum = width/2 - (len_hum /2);
      context.fillText("ⓒ HumAIn_Art",x_centerHum, 900)
  };
};

canvasSketch(sketch, settings);
