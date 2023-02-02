const canvasSketch = require('canvas-sketch');

const settings = {

  dimensions: [ 800, 800 ],
  animate: true
};


const sketch = () => {
  return ({ context, width, height }) => {

    // Off-white background
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    //text
    context.fillStyle = 'black';
    context.font = "30px Arial";
    context.fillText("Text plain", 220, 100); //fillText(text,x,y) - draws "filled" text on the canvas
    context.restore()
    context.font = "30px Arial";
    context.strokeText("Text stroke", 220, 70);//strokeText(text,x,y) - draws text on the canvas (no fill)
    context.strokeStyle = '#808000';
    context.textAlign = "center";
    context.restore()

    // Rectangle Red border : 	context.rect(x,y,width,height);
    context.lineWidth = "6";
    context.strokeStyle = "red";
    context.strokeRect(295, 45, 200, 100) //strokeRect(x, y, width, height). Draws a rectangular outline.
    context.restore()

    // Rectangle blue fill rectangle : context.fillRect(x,y,width,height);
    context.save()
    context.fillStyle = 'blue';
    context.fillRect(40, 200, 150, 100); //Draws a filled rectangle.
    context.clearRect(50, 210, 100, 50); // empty the fill rect
    context.restore()

    //arc : context.arc(x,y,radius,,startangle,endangle,counterclockwise);Set start angle to 0 and end angle to Math.PI*2
    context.beginPath();
    context.strokeStyle = 'green';
    context.arc(350, 255, 50, 0, Math.PI * 2); //Math.PI * 2 for full circle
    context.arc(350, 255, 35, 0, Math.PI, false); // Mouth (clockwise)
    context.stroke();
    context.restore()

    //Lines : move to => line to / context.lineTo(x,y);
    context.save()
    context.beginPath();
    context.moveTo(500, 400);
    context.lineTo(300, 400);
    context.lineCap = "round"; //[ 'round', 'square']
    context.strokeStyle = '#808000';
    context.lineWidth = 25;
    context.stroke();

    //Lines angles : move to => line to / context.lineTo(x,y);
    context.beginPath();
    context.lineJoin = "bevel"; //"round", "bevel", "miter"
    context.moveTo(150, 350);
    context.lineTo(100, 350);
    context.lineTo(100, 420);
    context.stroke();
    context.restore()

    //triangle
    context.beginPath();
    context.fillStyle = 'black';
    context.moveTo(550, 550);
    context.lineTo(400, 725); //lineTo(x, y)
    context.lineTo(700, 725);
    context.fill();
    context.restore();


    //Lines angles Bubble speech
    context.beginPath();
    context.moveTo(575, 25);
    context.quadraticCurveTo(525, 25, 525, 62.5);
    context.quadraticCurveTo(525, 100, 550, 100);
    context.quadraticCurveTo(550, 120, 530, 125);
    context.quadraticCurveTo(560, 120, 565, 100);
    context.quadraticCurveTo(625, 100, 625, 62.5);
    context.quadraticCurveTo(625, 25, 575, 25);
    context.stroke();
    context.restore();

    //Lines angles Heart
    context.beginPath();
    context.fillStyle = 'red';
    context.moveTo(75, 40);
    context.bezierCurveTo(75, 37, 70, 25, 50, 25);
    context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    context.bezierCurveTo(20, 80, 40, 102, 75, 120);
    context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    context.bezierCurveTo(85, 25, 75, 37, 75, 40);
    context.fill();
    context.restore();


    // elipse :
    context.fillStyle = 'purple';
    context.beginPath();
    context.ellipse(100, 505, 75, 50, Math.PI * 2, 0, Math.PI * 4);
    context.fill();
    context.restore();

    //TODO add image / link with html?
    window.onload = function() {
      var img = document.getElementById("arc");
      context.drawImage(img, 10, 10);
    };

    // countdown :
    today = new Date();
    let s = today.getSeconds();
    var m = today.getMinutes();
    var h = today.getHours();
    var d = today.getDate()
    var n = today.getMonth()+1
    let y = today.getFullYear();
    context.fillText(("Time: " + h +":" + m), 525, 300);
    context.fillText(("Date: " + d + "/" + n + "/" + y), 525, 350);
    context.fillText("Countdown C02: " + (s +1000 ), 525, 500);
    };

};

canvasSketch(sketch, settings);

    //arc : units degrees to radiant
    // const degToRad = (degrees) => {
    //   return degrees / 180 * Math.PI;
    // };
    // const slice = degToRad(360/num);
