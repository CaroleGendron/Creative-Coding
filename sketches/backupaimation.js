const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1000, 1000 ]
};

const sketch = ({context, width, height}) => {

  const agents = [];

  for (let i =0; i < 40; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    agents.push(new Agent(x, y));
  }

  return ({ context, width, height }) => {
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    agents.forEach(agent => {
      agent.draw(context);
    })
  };
};

canvasSketch(sketch, settings);

class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x, y){
    this.pos = new Point( x, y);
    this.radius = random.range(1,30)
  }

  draw(context){
    var randomColor = getRandomColor();
    context.beginPath();
    context.arc(this.pos.x, this.pos.y,this.radius, 0, Math.PI *2 );
    context.fillStyle = randomColor;
    context.fill();
    context.strokeStyle = randomColor;
    context.stroke();

  }
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
