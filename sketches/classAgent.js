const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1000, 1000 ],
  //for the animation
  animate: true
};

// //posibility to create a function to animate
// const animate = ()=>{
//   requestAnimationFrame(animate)
// }
// animate()

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
      agent.update();
      agent.draw(context);
      agent.bounce(width, height)
    })
  };
};

canvasSketch(sketch, settings);

//change class name to Vector because we add velocity
class Vector{
  //constructor = instance variable data model. Coordinates
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

class Agent {
  constructor(x, y,){
    //each coordinates/vector has a position, velocity and radius
    this.pos = new Vector(x, y);
    this.vel = new Vector (random.range(-1,1), random.range(-1,1));
    this.radius = random.range(4,12)

  }

  //which can't go out of the frame width and height
  bounce(width, height){
    if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
  }

  //creates an animation with position increment / +=
  update(){
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;
  }

//draws the position into circle with black border
  // draw(context){

  //   context.save();
  //   context.translate(this.pos.x, this.pos.y);

  //   context.beginPath();
  //   context.arc(0, 0,this.radius, 0, Math.PI * 2 );
  //   context.fill();
  //   context.stroke();

  //   context.restore();

  // }

  //draws the position into circle with random fill
  draw(context){
    var randomColor = getRandomColor();

    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.beginPath();
    context.arc(0, 0,this.radius, 0, Math.PI * 2 );
    context.fillStyle = "black";
    context.fillStyle = randomColor;

    context.fill();
    context.strokeStyle = randomColor;
    context.stroke();

    context.restore();

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
