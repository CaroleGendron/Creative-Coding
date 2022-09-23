const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

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

  for (let i = 0; i < 40; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    agents.push(new Agent(x, y));
  }

  return ({ context, width, height }) => {
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i];

      // for performance :  j = i + 1 / and not j =0 / to avoid doble loop
      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j];

        const dist = agent.pos.getDistance(other.pos);

        if (dist > 200) continue;

        context.lineWidth = math.mapRange(dist, 0, 300, 4, 1);

        //everything after continue is ignored
        context. beginPath();
        context.moveTo (agent.pos.x, agent.pos.y);
        context.lineTo (other.pos.x, other.pos.y);
        context.stroke();
      }
    }

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
      agent.bounce(width, height)
    })
  };
};

canvasSketch(sketch, settings);

class Vector{
  //constructor = instance variable data model. Coordinates
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  //getDistance method  for a given 'v' (=vector2)/
  getDistance(v){
    const dx = this.x - v.x;
    const dy = this.y - v.y;

      //returns Pythagoras Theorem
    return Math.sqrt(dx * dx + dy * dy);
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
  draw(context){

    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.beginPath();
    context.arc(0, 0,this.radius, 0, Math.PI * 2 );
    context.fill();
    context.stroke();

    context.restore();

  }

}

