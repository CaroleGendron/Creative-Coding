
const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [ 1080, 1080 ],
  //for the animation
  animate: true
};


const sketch = ({width, height}) => {

  //ORIGINAL RANDOM / THEN agents array / Then arrays of array
  const agents = [];

  for (let i = 0; i <40; i++) {

    const xList = [20,30,10,40,20,30,10,40,20,30,10,40,20,30,10,40,20,30,10,40,20,30,10,40,20,30,10,40,20,30,10,40,20,30,10,40,20,30,10,40];
    const x = xList[i]

    const yList = [1000,1010, 1000,900,1000,1010, 1000,900,1000,1010, 1000,900,1000,1010, 1000,900,1000,1010, 1000,900,1000,1010, 1000,900,1000,1010, 1000,900,1000,1010, 1000,900,1000,1010, 1000,900,1000,1010, 1000,900];
    const y = yList[i]

    const namingList = ['union','european', 'treaty', 'member',
    'state', 'council', 'court', 'functioning', 'provision',
    'decision', 'bank', 'national', 'accordance', 'general',
    'protocol', 'parliament', 'justice', 'commission', 'policy',
    'security', 'measure',  'kingdom', 'act', 'procedure',  'referred',
    'declaration',  'case', 'central', 'united',
    'right', 'republic',  'part',  'common', 'high',
    'foreign', 'president', 'institution',
    'representative', 'take', 'majority', ];
    const naming = namingList[i]


    const radiusList =  [994,933,681,650,548,
    540,336,305,283,254,246,218,209,158,178,178,
    176,169,164,162,161,156,154,153,151,146,138,139,
    136,134,131,124,114,112,110,104,105,105,101,101]
    const scaleRadius = radiusList[i]
    const radius=math.mapRange(scaleRadius, 101,999, 5, 30)

    const velList = [0.44,0.42,0.3,0.29,0.25,0.24,0.15,0.14,0.13,0.12,0.11,0.1,0.09,0.09,0.08,0.08,0.08,0.08,0.07,0.07,0.07,0.07,0.07,0.07,0.07,0.07,0.06,0.06,0.06,0.06,0.06,0.06,0.05,0.05,0.05,0.05,0.05,0.05,0.05,0.05]
    const scaleVel = velList[i]
    const vel=math.mapRange(scaleVel, 0.05,0.4, -1, 1)
    console.log ("vel", vel)

    const colorList = ["#004479",'#ee5d6c',"#004479","#004479","#004479","#004479","#004479",'#ee5d6c',"#004479","#004479","#004479",'#ee5d6c',"#004479",'#ee5d6c',"#004479","#004479","#004479","#004479","#004479","#004479","#004479","#004479","#004479","#004479",'#ee5d6c',"#004479","#004479",'#ee5d6c','#ee5d6c','#ee5d6c',"#004479","#004479",'#ee5d6c','#ee5d6c','#ee5d6c',"#004479","#004479",'#ee5d6c',"#375346","#004479",]
    const color = colorList[i];

    agents.push(new Agent(x, y, naming, radius, color,vel)); // (x, y, naming, radius, vel, color) adding velocity TF-idf
  }


  return ({ context, width, height }) => {

    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < agents.length; i++) {
      context.fillStyle = 'white';
      let agent = agents[i];


      // for performance :  j = i + 1 / and not j =0 / to avoid doble loop
      for (let j = i + 1; j < agents.length; j++) {
        const other = agents[j];
        const dist = agent.pos.getDistance(other.pos);
        if (dist > 200) continue; //number bigrams -1

        context.lineWidth = math.mapRange(dist, 0, 300, 4, 1);

        //everything after continue is ignored
        context.beginPath();
        context.moveTo (agent.pos.x, agent.pos.y);
        context.lineTo (other.pos.x, other.pos.y); //distance with bigrams
        context.strokeStyle = "#292833";
        context.stroke();
        context.lineWidth = "4";
        context.strokeStyle =  "rgba(1, 1, 1, 0)";
      }
    }

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
      agent.bounce(width , height )
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
  constructor(x, y, naming, radius, color){
    //each coordinates/vector has a position, velocity and radius
    this.pos = new Vector(x, y);
    this.vel = new Vector(random.range(-1,1), random.range(-1,1));//position x and y = TF IDF
    this.radius = radius//random.range(4,20) //FREQUENCY
    this.naming = naming
    this.color = color
    // this.vel = vel //??Almo

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
    context.fillStyle = this.color;
    context.arc(0, 0,this.radius, 0, Math.PI * 2 );
    // context.fillStyle = 'darkgrey';
    context.fill();
    context.font = "32px futura";
    context.fillText(this.naming, 30 , 10)

    context.stroke();
    context.restore();

    context.font = "35px futura";

    // context.fillText("ⓒHumAIn_Art",600, 770)


  }

};
