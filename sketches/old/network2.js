
// const canvasSketch = require('canvas-sketch');
// const random = require('canvas-sketch-util/random');
// const math = require('canvas-sketch-util/math');

// const settings = {
//   dimensions: [ 1080, 1080 ],
//   //for the animation
//   animate: true
// };


// const sketch = ({width, height}) => {

//   const agents = [];
//   console.log("agent", agents)

//   for (let i = 0; i < 40; i++) {
//     const x = 20//random.range(0, width); //fixed number start from angle
//     const y = 1000//random.range(0, height);//fixed number start from angle
//     const naminglist =  ['union', 'european', 'treaty',  'member',  'state',  'council',  'court',
//     'functioning', 'provision', 'decision',  'bank',  'national',  'accordance',
//     'protocol', 'parliament', 'justice','commission',
//     'policy', 'security', 'measure', 'general', 'kingdom','act',  'procedure', 'referred',
//  'declaration', 'central', 'case', 'united', 'right', 'republic', 'part', 'common',
//     'high',  'foreign',  'institution', 'representative', 'president', 'take', 'majority']

//     const radiusList =  [16,20,9]

//     const randomWord = Math.floor(Math.random() * naminglist.length);
//     const naming =  naminglist[randomWord]
//     console.log("naming", naming)

//     const randomRadius= Math.floor(Math.random() * radiusList.length);
//     const radius =  radiusList[randomRadius]
//     console.log("radius", radius)

//     agents.push(new Agent(x, y, naming, radius));
//   }



//   return ({ context, width, height }) => {
//     context.fillStyle = '#F6F3E1';
//     context.fillRect(0, 0, width, height);

//     for (let i = 0; i < agents.length; i++) {
//       const agent = agents[i];

//       // for performance :  j = i + 1 / and not j =0 / to avoid doble loop
//       for (let j = i + 1; j < agents.length; j++) {
//         const other = agents[j];
//         const dist = agent.pos.getDistance(other.pos);

//         if (dist > 200) continue;

//         context.lineWidth = math.mapRange(dist, 0, 300, 4, 1);

//         //everything after continue is ignored
//         context.beginPath();
//         context.moveTo (agent.pos.x, agent.pos.y);
//         context.lineTo (other.pos.x, other.pos.y);
//         context.stroke();
//       }
//     }

//     agents.forEach(agent => {
//       agent.update();
//       agent.draw(context);
//       agent.bounce(width, height)
//     })
//   };
// };

// canvasSketch(sketch, settings);

// class Vector{
//   //constructor = instance variable data model. Coordinates
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//   }

//   //getDistance method  for a given 'v' (=vector2)/
//   getDistance(v){
//     const dx = this.x - v.x;
//     const dy = this.y - v.y;
//     //returns Pythagoras Theorem
//     return Math.sqrt(dx * dx + dy * dy);
//   }
// }



// class Agent {
//   constructor(x, y,naming, radius){
//     //each coordinates/vector has a position, velocity and radius
//     this.pos = new Vector(x, y);
//     this.vel = new Vector (random.range(-1,1), random.range(-1,1));//TF IDF
//     this.radius = radius//random.range(4,20) //FREQUENCY
//     this.naming = naming
//   }

//   //which can't go out of the frame width and height
//   bounce(width, height){
//     if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
//     if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
//   }

//   //creates an animation with position increment / +=
//   update(){
//     this.pos.x += this.vel.x;
//     this.pos.y += this.vel.y;
//   }

// //draws the position into circle with black border
//   draw(context){

//     context.save();
//     context.translate(this.pos.x, this.pos.y);
//     console.log("this.pos.x:",this.pos.x)
//     console.log("this.pos.y:",this.pos.y)

//     context.beginPath();
//     context.fillStyle = 'red';
//     context.arc(0, 0,this.radius, 0, Math.PI * 2 );
//     context.fill();
//     context.font = "30px futura";
//     // context.fillStyle = 'black';
//     context.fillText(this.naming, 25, 10)

//     context.stroke();
//     context.restore();


//     context.font = "30px futura";
//     context.fillText("size = frequency | velocity = tfIDF | position x,y = bigrams",10, 1000)
//     context.fillStyle = 'black';
//     // context.fillText("ⓒHumAIn_Art",600, 770)


//   }

// }

//----------------------------//-----------



// const canvasSketch = require('canvas-sketch');
// const random = require('canvas-sketch-util/random');
// const math = require('canvas-sketch-util/math');

// const settings = {
//   dimensions: [ 1080, 1080 ],
//   //for the animation
//   animate: true
// };


// const sketch = ({width, height}) => {

//   //ORIGINAL RANDOM / THEN agents array of array
//   const agents = [
//     { x:20, y:1000, naming: 'union', radius : 994, vel : 0.44, color : "#004479"},
//     { x:20, y:1000, naming: 'european', radius : 933, vel : 0.42, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'treaty', radius : 681, vel : 0.3, color : "#004479"},
//     { x:20, y:1000, naming: 'member', radius : 650, vel : 0.29, color : "#004479"},
//     { x:20, y:1000, naming: 'state', radius : 548, vel : 0.25, color : "#004479"},
//     { x:20, y:1000, naming: 'council', radius : 540, vel : 0.24, color : "#004479"},
//     { x:20, y:1000, naming: 'court', radius : 336, vel : 0.15, color : "#004479"},
//     { x:20, y:1000, naming: 'functioning', radius : 305, vel : 0.14, color : "#375346"},
//     { x:20, y:1000, naming: 'provision', radius : 283, vel : 0.13, color : "#004479"},
//     { x:20, y:1000, naming: 'decision', radius : 254, vel : 0.12, color : "#004479"},
//     { x:20, y:1000, naming: 'bank', radius : 246, vel : 0.11, color : "#004479"},
//     { x:20, y:1000, naming: 'national', radius : 218, vel : 0.1, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'accordance', radius : 209, vel : 0.09, color : "#004479"},
//     { x:20, y:1000, naming: 'general', radius : 158, vel : 0.09, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'protocol', radius : 178, vel : 0.08, color : "#004479"},
//     { x:20, y:1000, naming: 'parliament', radius : 178, vel : 0.08, color : "#004479"},
//     { x:20, y:1000, naming: 'justice', radius : 176, vel : 0.08, color : "#004479"},
//     { x:20, y:1000, naming: 'commission', radius : 169, vel : 0.08, color : "#004479"},
//     { x:20, y:1000, naming: 'policy', radius : 164, vel : 0.07, color : "#004479"},
//     { x:20, y:1000, naming: 'security', radius : 162, vel : 0.07, color : "#004479"},
//     { x:20, y:1000, naming: 'measure', radius : 161, vel : 0.07, color : "#004479"},
//     { x:20, y:1000, naming: 'kingdom', radius : 156, vel : 0.07, color : "#004479"},
//     { x:20, y:1000, naming: 'act', radius : 154, vel : 0.07, color : "#004479"},
//     { x:20, y:1000, naming: 'procedure', radius : 153, vel : 0.07, color : "#004479"},
//     { x:20, y:1000, naming: 'referred', radius : 151, vel : 0.07, color : "#375346"},
//     { x:20, y:1000, naming: 'declaration', radius : 146, vel : 0.07, color : "#004479"},
//     { x:20, y:1000, naming: 'case', radius : 138, vel : 0.06, color : "#004479"},
//     { x:20, y:1000, naming: 'central', radius : 139, vel : 0.06, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'united', radius : 136, vel : 0.06, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'right', radius : 134, vel : 0.06, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'republic', radius : 131, vel : 0.06, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'part', radius : 124, vel : 0.06, color : "#004479"},
//     { x:20, y:1000, naming: 'common', radius : 114, vel : 0.05, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'high', radius : 112, vel : 0.05, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'foreign', radius : 110, vel : 0.05, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'president', radius : 104, vel : 0.05, color : "#004479"},
//     { x:20, y:1000, naming: 'institution', radius : 105, vel : 0.05, color : "#004479"},
//     { x:20, y:1000, naming: 'representative', radius : 105, vel : 0.05, color : '#ee5d6c'},
//     { x:20, y:1000, naming: 'take', radius : 101, vel : 0.05, color : "#375346"},
//     { x:20, y:1000, naming: 'majority', radius : 101, vel : 0.05, color : "#004479"}
//   ]
//   console.log("agent", agents)


//   for (let i = 0; i < 40; i++) {
// //     const x = 20//random.range(0, width); //fixed number start from angle
// //     const y = 1000//random.range(0, height);//fixed number start from angle
// //     const naminglist =  ['union', 'european', 'treaty',  'member',  'state',  'council',  'court',
// //     'functioning', 'provision', 'decision',  'bank',  'national',  'accordance',
// //     'protocol', 'parliament', 'justice','commission',
// //     'policy', 'security', 'measure', 'general', 'kingdom','act',  'procedure', 'referred',
// //  'declaration', 'central', 'case', 'united', 'right', 'republic', 'part', 'common',
// //     'high',  'foreign',  'institution', 'representative', 'president', 'take', 'majority']

// //     const radiusList =  [16,20,9] //frequency word
//       const radius = Agent.radius
//       const color = Agent.color
//       const naming = Agent.naming
//       const x = Agent.x
//       const y = Agent.y

// //     const velList = [random.range(-1,1)]

// //     const colorList =["#004479 ", '#ee5d6c', "#375346"]//["#004479 ", '#ee5d6c', '#728464']//for POS naming, adjective, verb = thing, caracteristic, action

// //     const randomWord = Math.floor(Math.random() * naminglist.length);
// //     const naming =  naminglist[randomWord]
// //     // console.log("naming", naming)

// //     const randomRadius= Math.floor(Math.random() * radiusList.length);
// //     const radius =  radiusList[randomRadius]
// //     // console.log("radius", radius)

// //     // const randomVel= Math.floor(Math.random() * velList.length);
// //     // const vel =  velList[randomVel]
// //     // console.log("vel", vel)

// //     const randomColor= Math.floor(Math.random() * colorList.length);
// //     const color =  colorList[randomColor]
// //     // console.log("color", color)

//     agents.push(new Agent(x, y, naming, radius,  color)); // (x, y, naming, radius, vel, color) adding velocity TF-idf
//   }


//   return ({ context, width, height }) => {
//     context.fillStyle = '#F6F3E1';
//     context.fillRect(0, 0, width, height);

//     for (let i = 0; i < agents.length; i++) {
//       const agent = agents[i];

//       // for performance :  j = i + 1 / and not j =0 / to avoid doble loop
//       for (let j = i + 1; j < agents.length; j++) {
//         const other = agents[j];
//         console.log("other", other)
//         const dist = agent.pos.getDistance(other.pos);
//         console.log("agent", agent)
//         if (dist > 200) continue; //number bigrams -1

//         context.lineWidth = math.mapRange(dist, 0, 300, 4, 1);

//         //everything after continue is ignored
//         context.beginPath();
//         context.moveTo (agent.pos.x, agent.pos.y);
//         context.lineTo (other.pos.x, other.pos.y); //distance with bigrams
//         context.strokeStyle = "#292833";
//         context.stroke();
//         context.lineWidth = "4";
//         context.strokeStyle =  "rgba(1, 1, 1, 0)";
//       }
//     }

//     agents.forEach(agent => {
//       agent.update();
//       agent.draw(context);
//       agent.bounce(width , height )
//     })
//   };
// };

// canvasSketch(sketch, settings);

// class Vector{
//   //constructor = instance variable data model. Coordinates
//   constructor(x, y){
//     this.x = x;
//     this.y = y;
//   }
//   //getDistance method  for a given 'v' (=vector2)/
//   getDistance(v){
//     const dx = this.x - v.x;
//     const dy = this.y - v.y;
//     //returns Pythagoras Theorem
//     return Math.sqrt(dx * dx + dy * dy);
//   }
// }


// class Agent {
//   constructor(x, y,naming, radius, color){
//     //each coordinates/vector has a position, velocity and radius
//     this.pos = new Vector(x, y);
//     this.vel = new Vector(random.range(-1,1), random.range(-1,1));//position x and y = TF IDF
//     this.radius = radius//random.range(4,20) //FREQUENCY
//     this.naming = naming
//     this.color = color
//     // this.vel = (vel, vel) //??Almo

//   }

//   //which can't go out of the frame width and height
//   bounce(width, height){
//     if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
//     if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
//   }

//   //creates an animation with position increment / +=
//   update(){
//     this.pos.x += this.vel.x;
//     this.pos.y += this.vel.y;
//   }

// //draws the position into circle with black border
//   draw(context){

//     context.save();
//     context.translate(this.pos.x, this.pos.y);

//     context.beginPath();
//     context.fillStyle = this.color;
//     context.arc(0, 0,this.radius, 0, Math.PI * 2 );
//     // context.fillStyle = 'darkgrey';
//     context.fill();
//     context.font = "32px futura";
//     context.fillText(this.naming, 25, 10)

//     context.stroke();
//     context.restore();

//     context.font = "35px futura";
//     // context.fillText("size = frequency | velocity = tfIDF | position x,y = bigrams",10, 1000)
//     context.fillStyle = 'black';
//     // context.fillText("ⓒHumAIn_Art",600, 770)


//   }

// }


//------------------------//-----------//


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
