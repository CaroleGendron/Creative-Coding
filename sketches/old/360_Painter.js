//TODO : change ''population' for 'community'
const canvasSketch = require('canvas-sketch');
const Tweakpane = require('tweakpane');
const math = require("canvas-sketch-util/math") //for mapRange

const settings = {
  dimensions: [ 1080, 1080 ], //2 times insta
  animate: true, //to allow Tweakpane to work
};

//Setting Title Name
const country_name = "Germany"

//Default values Tweakpane
const params= {
  Population: 9, //'community' //density lines
  Land: 10, //'people look the same/int'//width
  Age: 7, //greyscale color
  Happy: 6, //neat-blur
  CO2: 3 ,//blue

}

//Variable setting random starting point the canvas
const variable = Math.floor(Math.random() * 6000);

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    const Population = params.Population;
    const Land = params.Land;
    const Age = params.Age;
    const Happy = params.Happy;
    const CO2 = params.CO2;

    // const Austria= {'Population' :  6, 'Land' :  6, 'Age' :  9, 'Happy' :  9, 'CO2' :  7}
    // const Belgium= {'Population' :  8, 'Land' :  2, 'Age' :  2, 'Happy' :  7, 'CO2' :  8}
    // const Bulgaria= {'Population' :  5, 'Land' :  7, 'Age' :  7, 'Happy' :  1, 'CO2' :  5}
    // const Croatia= {'Population' :  3, 'Land' :  4, 'Age' :  7, 'Happy' :  2, 'CO2' :  3}
    // const Cyprus= {'Population' :  1, 'Land' :  1, 'Age' :  1, 'Happy' :  3, 'CO2' :  9}
    // const Czechia= {'Population' :  7, 'Land' :  6, 'Age' :  6, 'Happy' :  7, 'CO2' :  10}
    // const Denmark= {'Population' :  5, 'Land' :  3, 'Age' :  4, 'Happy' :  10, 'CO2' :  6}
    // const Estonia= {'Population' :  2, 'Land' :  3, 'Age' :  7, 'Happy' :  4, 'CO2' :  7}
    // const Finland= {'Population' :  4, 'Land' :  9, 'Age' :  5, 'Happy' :  10, 'CO2' :  7}
    // const France= {'Population' :  10, 'Land' :  10, 'Age' :  2, 'Happy' :  7, 'CO2' :  3}
    // const Germany= {'Population' :  10, 'Land' :  9, 'Age' :  10, 'Happy' :  8, 'CO2' :  8}
    // const Greece= {'Population' :  7, 'Land' :  7, 'Age' :  10, 'Happy' :  1, 'CO2' :  5}
    // const Hungary= {'Population' :  6, 'Land' :  6, 'Age' :  6, 'Happy' :  2, 'CO2' :  4}
    // const Ireland= {'Population' :  4, 'Land' :  5, 'Age' :  1, 'Happy' :  8, 'CO2' :  10}
    // const Italy= {'Population' :  10, 'Land' :  8, 'Age' :  10, 'Happy' :  5, 'CO2' :  4}
    // const Latvia= {'Population' :  2, 'Land' :  4, 'Age' :  8, 'Happy' :  3, 'CO2' :  1}
    // const Lithuania= {'Population' :  3, 'Land' :  5, 'Age' :  9, 'Happy' :  4, 'CO2' :  6}
    // const Luxembourg= {'Population' :  1, 'Land' :  1, 'Age' :  1, 'Happy' :  9, 'CO2' :  10}
    // const Malta= {'Population' :  1, 'Land' :  1, 'Age' :  4, 'Happy' :  5, 'CO2' :  1}
    // const Netherlands= {'Population' :  8, 'Land' :  2, 'Age' :  5, 'Happy' :  10, 'CO2' :  9}
    // const Poland= {'Population' :  9, 'Land' :  9, 'Age' :  3, 'Happy' :  2, 'CO2' :  9}
    // const Portugal= {'Population' :  6, 'Land' :  7, 'Age' :  9, 'Happy' :  1, 'CO2' :  2}
    // const Romania= {'Population' :  9, 'Land' :  8, 'Age' :  4, 'Happy' :  6, 'CO2' :  2}
    // const Slovakia= {'Population' :  4, 'Land' :  4, 'Age' :  3, 'Happy' :  4, 'CO2' :  4}
    // const Slovenia= {'Population' :  2, 'Land' :  2, 'Age' :  9, 'Happy' :  6, 'CO2' :  6}
    // const Spain= {'Population' :  9, 'Land' :  10, 'Age' :  7, 'Happy' :  6, 'CO2' :  3}
    // const Sweden= {'Population' :  7, 'Land' :  10, 'Age' :  2, 'Happy' :  9, 'CO2' :  1}

// creation indicator list to be able to loop
const indicator_list = ["Happy","Land", "Age", "Population",  "CO2"];
const indicator =  indicator_list[Math.floor(Math.random()*indicator_list.length)];//params.indic
console.log("indicator", indicator)

const degToRad = (degrees) => {
  return degrees / 180 * Math.PI; //f_pop 1 DEFINITION DENTELLE. 1 TO 360
};

let newIndic;

if (indicator== "Happy"){
  console.log("indic Happy* : ", Happy)
  newIndic = Happy ;
}
else if  (indicator== "Land"){
  console.log("indic Land*: ", Land)
  newIndic =Land;
}
else if  (indicator== "Age"){
  console.log("indic Age*: ", Age)
  newIndic =Age;
}
else if  (indicator== "Population"){
  console.log("indic Population*: ", Population)
  newIndic =Population;
}
else if  (indicator== "CO2"){
  console.log("indic CO2*: ",  CO2)
  newIndic = CO2;
}

//scaling
const scaleAge=math.mapRange(Age, 1,10, 1, 150)
const scalePop=math.mapRange(Population, 1,10, 1, 600)
const happyInverse =math.mapRange(Happy, 1,10, 10, 1)
const scaleHappy=math.mapRange(happyInverse, 1,10, 0.10, 0.9)
const scaleCO2=math.mapRange(CO2, 1,10,  0.0003, 0.005)
const scaleLand=math.mapRange(Land, 1,10,  0.1, 0.6)
const color = scaleAge
const colorRGB = `rgb(${color},${color},${color})`

console.log("color::", color)
console.log("colorRGB::", colorRGB)

//positioning
const cx = width /2;
const cy = height * 0.45;
const w = width * scaleCO2//0.0003; //0.01
const h = height * scaleLand //0.5; //0.1

let x,y;

const radius = width * scaleHappy/4 // from 0.1 to 1

for (let i =0; i <scalePop; i++){

  const slice = degToRad(360/scalePop);// 27 to 360 //work really well
  const angle = slice * i;

  x = cx + radius * Math.sin(angle * Math.PI + variable);
  y = cy + radius * Math.cos(angle * Math.PI);

  context.save();
  context.translate(x,y);
  context.rotate(-angle+ variable );
  context.shadowOffsetX = 10;
  context.shadowOffsetY = 10;
  context.shadowBlur =  CO2*10;//
  context.shadowColor = "#211BBD";

  context.beginPath();
  context.rect(-w * 1 ,- h , w , h);
  context.fillStyle = colorRGB;
  context.fill();
  context.restore();
}
  //Function "centerX" to find center position x, automatically
  const centerX = (text) => {
  const metrics = context.measureText(text);
  const textWidth =  metrics.width;
  return (width/2) - (textWidth/2)
  };

  //Title cosmetics and center
  const title = `${country_name}`;
  // const title = "Autoportrait";
  context.fillStyle = '#313131';
  context.font = "70px futura";
  const titleCenter = centerX(title);
  context.fillText(title, titleCenter, 1000);
  context.restore()


  //Title serie name + font
  const serie = "ⓒ HumAIn_Art" //"Variations of π (pi)"
  context.font = "20px futura";
  const serieCenter = centerX(serie)
  context.fillText(serie, serieCenter, 1050)
  context.restore()
  };
};

canvasSketch(sketch, settings);

const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "Scale: from 1 (Little) to 10 (Big)"});
  folder.addInput(params, 'Population', { min: 1, max: 10 });
  folder.addInput(params, 'Land', { min: 1, max: 10 });
  folder.addInput(params, 'Age', { min: 1, max: 10 });
  folder.addInput(params, 'Happy', { min: 1, max: 10 });
  folder.addInput(params, 'CO2', { min: 1, max: 10 });
};

createPane();



//-----------------------------//---------------------------

// //bring real values into params per defaut
// const canvasSketch = require('canvas-sketch');
// const Tweakpane = require('tweakpane');
// const math = require("canvas-sketch-util/math") //for mapRange

// const settings = {
//   dimensions: [ 1080, 1080 ], //2 times insta
//   animate: true, //to allow Tweakpane to work
//   playbackRate: 'throttle',
//   // loop : true,
//   // duration: 3,
//   fps: 100,
// };

// const params= { //default values Tweakpane
//   Happy: 10, //neat-blur
//   Land: 2,
//   Age: 7,
//   Population: 1, //density lines
//   CO2:10 //NEAT-BLUR
// }

// const country_name = "Netherlands"
// const variable = Math.floor(Math.random() * 6000);

// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = '#F6F3E1';
//     context.fillRect(0, 0, width, height);

    // context.fillStyle = 'black';

    // const Happy = params.Happy; //working very well
    // const Land = params.Land; //line density in number
    // const Age = params.Age;
    // const Population = params.Population; //Blur. TODO change for happy
    // const CO2 = params.CO2;

    //create country dictionnary - 27 countries - , 5 indics
    // const Europe ={'Happy': 5 ,'Land': 5 ,'Age': 5 ,'Population': 5 ,'CO2': 5 }
    // const Austria= {'Happy' :  9, 'Land' :  6, 'Age' :  9, 'Population' :  6,  'CO2' :  7}
    // const Belgium= {'Happy' :  7, 'Land' :  2, 'Age' :  6, 'Population' :  8,  'CO2' :  9}
    // const Bulgaria= {'Happy' :  1, 'Land' :  7, 'Age' :  10, 'Population' :  5,  'CO2' :  5}
    // const Cyprus= {'Happy' :  3, 'Land' :  1, 'Age' :  0, 'Population' :  1,  'CO2' :  8}
    // const Czechia= {'Happy' :  7, 'Land' :  5, 'Age' :  3, 'Population' :  7, 'CO2' :  10}
    // const Germany= {'Happy' :  8, 'Land' :  9, 'Age' :  10, 'Population' :  10,  'CO2' :  9}
    // const Denmark= {'Happy' :  10, 'Land' :  3, 'Age' :  6, 'Population' :  5,  'CO2' :  6}
    // const Spain= {'Happy' :  6, 'Land' :  10, 'Age' :  6, 'Population' :  9,  'CO2' :  4}
    // const Estonia= {'Happy' :  2, 'Land' :  3, 'Age' :  5, 'Population' :  2,  'CO2' :  9}
    // const Finland= {'Happy' :  10, 'Land' :  9, 'Age' :  8, 'Population' :  4,  'CO2' :  4}
    // const France= {'Happy' :  6, 'Land' :  10, 'Age' :  4, 'Population' :  10,  'CO2' :  3}
    // const Greece= {'Happy' :  1, 'Land' :  7, 'Age' :  9, 'Population' :  7, 'CO2' :  6}
    // const Croatia= {'Happy' :  1, 'Land' :  6, 'Age' :  9, 'Population' :  3, 'CO2' :  2}
    // const Hungary= {'Happy' :  2, 'Land' :  7, 'Age' :  4, 'Population' :  6,  'CO2' :  4}
    // const Ireland= {'Happy' :  8, 'Land' :  5, 'Age' :  1, 'Population' :  4,  'CO2' :  8}
    // const Italy= {'Happy' :  6, 'Land' :  8, 'Age' :  10, 'Population' :  10,  'CO2' :  5}
    // const Lithuania= {'Happy' :  4, 'Land' :  4, 'Age' :  3, 'Population' :  3,  'CO2' :  2}
    // const Luxembourg= {'Happy' :  9, 'Land' :  1, 'Age' :  2, 'Population' :  1, 'CO2' :  10}
    // const Latvia= {'Happy' :  3, 'Land' :  4, 'Age' :  7, 'Population' :  2,  'CO2' :  1}
    // const Malta= {'Happy' :  7, 'Land' :  0, 'Age' :  4, 'Population' :  0, 'CO2' :  2}
    // const Netherlands= {'Happy' :  10, 'Land' :  2, 'Age' :  7, 'Population' :  8,  'CO2' :  10}
    // const Poland= {'Happy' :  5, 'Land' :  9, 'Age' :  2, 'Population' :  9,  'CO2' :  7}
    // const Portugal= {'Happy' :  2, 'Land' :  6, 'Age' :  7, 'Population' :  6, 'CO2' :  3}
    // const Romania= {'Happy' :  4, 'Land' :  8, 'Age' :  3, 'Population' :  9,  'CO2' :  1}
    // const Slovakia= {'Happy' :  5, 'Land' :  4, 'Age' :  1, 'Population' :  4,  'CO2' :  6}
    // const Slovenia= {'Happy' :  4, 'Land' :  2, 'Age' :  8, 'Population' :  2,  'CO2' :  7}
    // const Sweden= {'Happy' :  9, 'Land' :  10, 'Age' :  5, 'Population' :  7,  'CO2' :  3}


// // creation indicator list to be able to loop
// const indicator_list = ["Happy","Land", "Age", "Population",  "CO2"];
// const indicator =  indicator_list[Math.floor(Math.random()*indicator_list.length)];//params.indic
// console.log("indicator", indicator)


// const degToRad = (degrees) => {
//   return degrees / 180 * Math.PI; //f_pop 1 DEFINITION DENTELLE. 1 TO 360
// };

// //Creating empty array for country_id
// const indic_len = Object.keys(indicator_list).length;
// console.log("indic_len : ", indic_len)

// let country_ids = [];
// let new_id = 0
// console.log("country_ids : ", country_ids)

// let newIndic;


// if (indicator== "Happy"){
//   console.log("indic Happy* : ", Happy)
//   newIndic = Happy ;
// }
// else if  (indicator== "Land"){
//   console.log("indic Land*: ", Land)
//   newIndic =Land;
// }
// else if  (indicator== "Age"){
//   console.log("indic Age*: ", Age)
//   newIndic =Age;
// }
// else if  (indicator== "Population"){
//   console.log("indic Population*: ", Population)
//   newIndic =Population;
// }
// else if  (indicator== "CO2"){
//   console.log("indic CO2*: ",  CO2)
//   newIndic = CO2;
// }

// console.log("newIndic : ", newIndic)

// //scaling
// const scaleCO2=math.mapRange(CO2, 1,10, 0, 0.5) //blur
// const scalePop=math.mapRange(Population, 1,10, 1, 600) // = line density
// const happyInverse =math.mapRange(Happy, 1,10, 10, 1)
// const scaleHappy=math.mapRange(happyInverse, 1,10, 0.10, 0.99) // = from round to cahos
// const ageInverse =math.mapRange(Age, 1,10, 10, 1)
// const scaleAge=math.mapRange(ageInverse, 1,10,  0.0003, 0.005) // = from round to cahos
// const scaleLand=math.mapRange(Land, 1,10,  0.1, 0.6)
// console.log("CO2" , CO2)
// console.log("scaleCO2" , scaleCO2)


// const cx = width /2;
// const cy = height * 0.5;
// const w = width * scaleAge//0.0003; //0.01
// const h = height * scaleLand //0.5; //0.1

// let x,y;

// const radius = width * scaleHappy/4 // from 0.1 to 1
// console.log("radius", radius)

// for (let i =0; i <scalePop; i++){

//   const slice = degToRad(360/scalePop);// 27 to 360 //work really well
//   const angle = slice * i;

//   x = cx + radius * Math.sin(angle * Math.PI + variable);
//   y = cy + radius * Math.cos(angle * Math.PI);

//   context.save();
//   context.translate(x,y);
//   context.rotate(-angle);
//   context.shadowOffsetX = 10;
//   context.shadowOffsetY = 10;
//   context.shadowColor = "#424242";


//   context.beginPath();
//   context.rect(-w * scaleAge ,- h , w , h);
//   context.fill();
//   context.restore();
// }
//   //Function "centerX" to find center position x, automatically
//   const centerX = (text) => {
//   const metrics = context.measureText(text);
//   const textWidth =  metrics.width;
//   return (width/2) - (textWidth/2)
//   };

//   //Title cosmetics and center
//   const title = `${country_name}`;
//   context.fillStyle = '#212021';
//   context.font = "70px futura";
//   const titleCenter = centerX(title);
//   context.fillText(title, titleCenter, 1000);
//   context.restore()

//   //Title serie name + font
//   const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
//   context.fillStyle = 'grey';
//   context.font = "20px futura";
//   const serieCenter = centerX(serie)
//   context.fillText(serie, serieCenter, 1050)
//   context.restore()
//   };
// };

// canvasSketch(sketch, settings);

// const createPane = () => {
//   const pane = new Tweakpane.Pane(); //create a new slider pane
//   let folder;

//   folder = pane.addFolder({ title : "Indicators"});
//   folder.addInput(params, 'Population', { min: 1, max: 10 });
//   folder.addInput(params, 'Land', { min: 1, max: 10 });
//   folder.addInput(params, 'Age', { min: 1, max: 10 });
//   folder.addInput(params, 'Happy', { min: 1, max: 10 });
//   folder.addInput(params, 'CO2', { min: 1, max: 10 });

// };

// createPane();


//----------------------//--------------


// //bring real values into params per defaut
// const canvasSketch = require('canvas-sketch');
// const Tweakpane = require('tweakpane');
// const math = require("canvas-sketch-util/math") //for mapRange

// const settings = {
//   dimensions: [ 1080, 1080 ], //2 times insta
//   animate: true, //to allow Tweakpane to work
//   playbackRate: 'throttle',
//   // loop : true,
//   // duration: 3,
//   fps: 100,
// };

// const params= { //default values Tweakpane
//   Happy: 1, //neat-blur
//   Land: 1,
//   Age: 1,
//   Population: 1, //density lines
//   // Urban: 1,
//   CO2: 1
// }

// const variable = Math.floor(Math.random() * 6000);

// const sketch = () => {
//   return ({ context, width, height }) => {
//     context.fillStyle = '#F6F3E1';
//     context.fillRect(0, 0, width, height);

//     context.fillStyle = 'black';

//     const Happy = params.Happy; //working very well
//     const Land = params.Land; //line density in number
//     const Age = params.Age;
//     const Population = params.Population; //Blur. TODO change for happy
//     // const Urban = params.Urban;
//     const CO2 = params.CO2;

    //create country dictionnary - 27 countries - , 5 indics
    const Europe ={'Happy': 5 ,'Land': 5 ,'Age': 5 ,'Population': 5 ,'Urban': 5 }
    const Austria= {'Happy' :  9, 'Land' :  6, 'Age' :  9, 'Population' :  6, 'Urban' :  5, 'CO2' :  5}
    const Belgium= {'Happy' :  7, 'Land' :  2, 'Age' :  6, 'Population' :  8, 'Urban' :  10, 'CO2' :  5}
    const Bulgaria= {'Happy' :  0, 'Land' :  7, 'Age' :  10, 'Population' :  5, 'Urban' :  8, 'CO2' :  5}
    const Cyprus= {'Happy' :  3, 'Land' :  1, 'Age' :  0, 'Population' :  1, 'Urban' :  1, 'CO2' :  5}
    const Czechia= {'Happy' :  7, 'Land' :  5, 'Age' :  3, 'Population' :  7, 'Urban' :  6, 'CO2' :  5}
    const Germany= {'Happy' :  8, 'Land' :  9, 'Age' :  10, 'Population' :  10, 'Urban' :  9, 'CO2' :  5}
    const Denmark= {'Happy' :  10, 'Land' :  3, 'Age' :  6, 'Population' :  5, 'Urban' :  2, 'CO2' :  5}
    const Spain= {'Happy' :  6, 'Land' :  10, 'Age' :  6, 'Population' :  9, 'Urban' :  9, 'CO2' :  5}
    const Estonia= {'Happy' :  2, 'Land' :  3, 'Age' :  5, 'Population' :  2, 'Urban' :  7, 'CO2' :  5}
    const Finland= {'Happy' :  10, 'Land' :  9, 'Age' :  8, 'Population' :  4, 'Urban' :  7, 'CO2' :  5}
    const France= {'Happy' :  6, 'Land' :  10, 'Age' :  4, 'Population' :  10, 'Urban' :  9, 'CO2' :  5}
    const Greece= {'Happy' :  1, 'Land' :  7, 'Age' :  9, 'Population' :  7, 'Urban' :  8, 'CO2' :  5}
    const Croatia= {'Happy' :  1, 'Land' :  6, 'Age' :  9, 'Population' :  3, 'Urban' :  2, 'CO2' :  5}
    const Hungary= {'Happy' :  2, 'Land' :  7, 'Age' :  4, 'Population' :  6, 'Urban' :  7, 'CO2' :  5}
    const Ireland= {'Happy' :  8, 'Land' :  5, 'Age' :  1, 'Population' :  4, 'Urban' :  4, 'CO2' :  5}
    const Italy= {'Happy' :  6, 'Land' :  8, 'Age' :  10, 'Population' :  10, 'Urban' :  10, 'CO2' :  5}
    const Lithuania= {'Happy' :  4, 'Land' :  4, 'Age' :  3, 'Population' :  3, 'Urban' :  5, 'CO2' :  5}
    const Luxembourg= {'Happy' :  9, 'Land' :  1, 'Age' :  2, 'Population' :  1, 'Urban' :  0, 'CO2' :  5}
    const Latvia= {'Happy' :  3, 'Land' :  4, 'Age' :  7, 'Population' :  2, 'Urban' :  6, 'CO2' :  5}
    const Malta= {'Happy' :  7, 'Land' :  0, 'Age' :  4, 'Population' :  0, 'Urban' :  10, 'CO2' :  5}
    const Netherlands= {'Happy' :  10, 'Land' :  2, 'Age' :  7, 'Population' :  8, 'Urban' :  6, 'CO2' :  5}
    const Poland= {'Happy' :  5, 'Land' :  9, 'Age' :  2, 'Population' :  9, 'Urban' :  4, 'CO2' :  5}
    const Portugal= {'Happy' :  2, 'Land' :  6, 'Age' :  7, 'Population' :  6, 'Urban' :  4, 'CO2' :  5}
    const Romania= {'Happy' :  4, 'Land' :  8, 'Age' :  3, 'Population' :  9, 'Urban' :  3, 'CO2' :  5}
    const Slovakia= {'Happy' :  5, 'Land' :  4, 'Age' :  1, 'Population' :  4, 'Urban' :  2, 'CO2' :  5}
    const Slovenia= {'Happy' :  4, 'Land' :  2, 'Age' :  8, 'Population' :  2, 'Urban' :  3, 'CO2' :  5}
    const Sweden= {'Happy' :  9, 'Land' :  10, 'Age' :  5, 'Population' :  7, 'Urban' :  1, 'CO2' :  5}


// // creation indicator list to be able to loop
// const indicator_list = ["Happy","Land", "Age", "Population",  "CO2"]; //"Urban",
// const indicator =  indicator_list[Math.floor(Math.random()*indicator_list.length)];//params.indic
// console.log("indicator", indicator)


// const degToRad = (degrees) => {
//   return degrees / 180 * Math.PI; //f_pop 1 DEFINITION DENTELLE. 1 TO 360
// };

// //Creating empty array for country_id
// const indic_len = Object.keys(indicator_list).length;
// console.log("indic_len : ", indic_len)

// let country_ids = [];
// let new_id = 0
// console.log("country_ids : ", country_ids)

// let newIndic;


// if (indicator== "Happy"){
//   console.log("indic Happy* : ", Happy)
//   newIndic = Happy ;
// }
// else if  (indicator== "Land"){
//   console.log("indic Land*: ", Land)
//   newIndic =Land;
// }
// else if  (indicator== "Age"){
//   console.log("indic Age*: ", Age)
//   newIndic =Age;
// }
// else if  (indicator== "Population"){
//   console.log("indic Population*: ", Population)
//   newIndic =Population;
// }
// // else if  (indicator== "Urban"){
// //   console.log("indic Urban*: ",  Urban)
// //   newIndic = Urban;
// // }
// else if  (indicator== "CO2"){
//   console.log("indic CO2*: ",  CO2)
//   newIndic = CO2;
// }

// console.log("newIndic : ", newIndic)

// //scaling
// const scaleCO2=math.mapRange(CO2, 1,10, 0, 300) //blur
// const scalePop=math.mapRange(Population, 1,10, 1, 600) // = line density
// const happyInverse =math.mapRange(Happy, 1,10, 10, 1)
// const scaleHappy=math.mapRange(happyInverse, 1,10, 0.10, 0.99) // = from round to cahos
// const ageInverse =math.mapRange(Age, 1,10, 10, 1)
// const scaleAge=math.mapRange(ageInverse, 1,10,  0.0003, 0.005) // = from round to cahos
// const scaleLand=math.mapRange(Land, 1,10,  0.1, 0.6)

// const cx = width /3;
// const cy = height * 0.5;
// const w = width * scaleAge//0.0003; //0.01
// const h = height * scaleLand //0.5; //0.1

// let x,y;

// const radius = width * scaleHappy/4 // from 0.1 to 1
// console.log("radius", radius)


// for (let i =0; i <scalePop; i++){


//   const slice = degToRad(360/scalePop);// 27 to 360 //work really well
//   const angle = slice * i;
//   const operatorArray = ["/","+", "*"];
//   const randOperator = operatorArray[Math.floor(Math.random() * operatorArray.length)];

//   x = cx + radius * Math.sin(angle * Math.PI + variable);
//   y = cy + radius * Math.cos(angle * Math.PI);

//   context.save();
//   context.translate(x,y);
//   context.rotate(-angle);
//   context.shadowOffsetX = 10;
//   context.shadowOffsetY = 10;
//   context.shadowBlur =  CO2*15;//
//   context.shadowColor = "#424242";

//   context.beginPath();
//   context.rect(-w * scaleAge ,- h , w , h);
//   // context.arc(-w * scaleAge ,- h /scaleHappy , w , h, Math.PI/2, false);
//   context.fill();
//   context.restore();
// }
//   //Function "centerX" to find center position x, automatically
//   const centerX = (text) => {
//   const metrics = context.measureText(text);
//   const textWidth =  metrics.width;
//   return (width/2) - (textWidth/2)
//   };

//   //Title cosmetics and center

//   const title = "France";
//   context.fillStyle = '#212021';
//   context.font = "70px futura";
//   const titleCenter = centerX(title);
//   context.fillText(title, titleCenter, 1000);
//   context.restore()

//   //Title serie name + font
//   const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
//   context.fillStyle = 'grey';
//   context.font = "20px futura";
//   const serieCenter = centerX(serie)
//   context.fillText(serie, serieCenter, 1050)
//   context.restore()
//   };
// };

// canvasSketch(sketch, settings);

// const createPane = () => {
//   const pane = new Tweakpane.Pane(); //create a new slider pane
//   let folder;

//   folder = pane.addFolder({ title : "Indicators"});
//   folder.addInput(params, 'Happy', { min: 1, max: 10 });
//   folder.addInput(params, 'Land', { min: 1, max: 10 });
//   folder.addInput(params, 'Age', { min: 1, max: 10 });
//   folder.addInput(params, 'Population', { min: 1, max: 10 });
//   // folder.addInput(params, 'Urban', { min: 1, max: 10 });
//   folder.addInput(params, 'CO2', { min: 1, max: 10 });

// };

// createPane();


//----------//-----------------

// //bring real values into params per defaut
// const canvasSketch = require('canvas-sketch');
// const Tweakpane = require('tweakpane');
// const math = require("canvas-sketch-util/math")

// const settings = {
//   dimensions: [ 1080, 1080 ],
//   animate: true,
//   playbackRate: 'throttle',
//   loop : true,
//   duration: 3,
//   fps: 1,
// };

// //     //create country dictionnary - 27 countries - , 5 indics
// // const Austria=  {  "Happy" :  7, "GDP" :  8, "Happy" :  9, "Land" :  6, "Pop" :  6 }
// // const HUN=  {  "CO2" :  4, "GDP" :  2, "Happy" :  2, "Land" :  7, "Pop" :  6 }
// // const SVK=  {  "CO2" :  6, "GDP" :  3, "Happy" :  5, "Land" :  4, "Pop" :  4 }
// // const CZE=  {  "CO2" :  10, "GDP" :  4, "Happy" :  7, "Land" :  5, "Pop" :  7 }
// // const POL=  {  "CO2" :  7, "GDP" :  2, "Happy" :  5, "Land" :  9, "Pop" :  9 }
// // const LTU=  {  "CO2" :  2, "GDP" :  4, "Happy" :  4, "Land" :  4, "Pop" :  3 }
// // const LVA=  {  "CO2" :  1, "GDP" :  3, "Happy" :  3, "Land" :  4, "Pop" :  2 }
// // const EST=  {  "CO2" :  9, "GDP" :  5, "Happy" :  2, "Land" :  3, "Pop" :  2 }
// // const FIN=  {  "CO2" :  4, "GDP" :  9, "Happy" :  10, "Land" :  9, "Pop" :  4 }
// // const SWE=  {  "CO2" :  1, "GDP" :  9, "Happy" :  9, "Land" :  10, "Pop" :  7 }
// // const DNK=  {  "CO2" :  6, "GDP" :  10, "Happy" :  10, "Land" :  3, "Pop" :  5 }
// // const DEU=  {  "CO2" :  9, "GDP" :  8, "Happy" :  8, "Land" :  9, "Pop" :  10 }
// // const LUX=  {  "CO2" :  10, "GDP" :  10, "Happy" :  9, "Land" :  1, "Pop" :  1 }
// // const NLD=  {  "CO2" :  10, "GDP" :  9, "Happy" :  10, "Land" :  2, "Pop" :  8 }
// // const BEL=  {  "CO2" :  9, "GDP" :  7, "Happy" :  7, "Land" :  2, "Pop" :  8 }
// // const IRL=  {  "CO2" :  8, "GDP" :  10, "Happy" :  8, "Land" :  5, "Pop" :  4 }
// // const FRA=  {  "CO2" :  3, "GDP" :  7, "Happy" :  6, "Land" :  10, "Pop" :  10 }
// // const PRT=  {  "CO2" :  3, "GDP" :  4, "Happy" :  2, "Land" :  6, "Pop" :  6 }
// // const ESP=  {  "CO2" :  4, "GDP" :  6, "Happy" :  6, "Land" :  10, "Pop" :  9 }
// // const ITA=  {  "CO2" :  5, "GDP" :  7, "Happy" :  6, "Land" :  8, "Pop" :  10 }
// // const MLT=  {  "CO2" :  2, "GDP" :  6, "Happy" :  7, "Land" :  1, "Pop" :  1 }
// // const GRC=  {  "CO2" :  6, "GDP" :  2, "Happy" :  1, "Land" :  7, "Pop" :  7 }
// // const CYP=  {  "CO2" :  8, "GDP" :  6, "Happy" :  3, "Land" :  1, "Pop" :  1 }
// // const BGR=  {  "CO2" :  5, "GDP" :  1, "Happy" :  1, "Land" :  7, "Pop" :  5 }
// // const ROU=  {  "CO2" :  1, "GDP" :  1, "Happy" :  4, "Land" :  8, "Pop" :  9 }
// // const HRV=  {  "CO2" :  2, "GDP" :  1, "Happy" :  1, "Land" :  6, "Pop" :  3 }
// // const SVN=  {  "CO2" :  7, "GDP" :  5, "Happy" :  4, "Land" :  2, "Pop" :  2 }

// //set default values for indicators in the tweakpane
// const params= {
//   CO2: 3,
//   GDP: 7,
//   Happy: 6,
//   Land:10,
//   Pop: 10
// }

// const sketch = () => {
//   return ({ context, width, height }) => {

//   //set background
//   context.fillStyle = '#F6F3E1';
//   context.fillRect(0, 0, width, height);
//   context.fillStyle = 'black';

//   //create params variables
//   const CO2 = params.CO2; //blur lines
//   const GDP = params.GDP; //radius => dispersion line
//   const Happy = params.Happy; //slice => number of loops
//   const Land = params.Land; // num => line density
//   const Pop = params.Pop; //x

//   //creation indicator list to be able to select/get random indicator and then loop
//   const indicator_list = ["CO2","GDP", "Happy", "Land", "Population"];
//   const indicator =  params.indic;//indicator_list[Math.floor(Math.random()*indicator_list.length)];//
//   console.log("indicator", indicator)

//   //get selected indicator value
//   let newIndic;

//   if (indicator== "CO2"){
//     console.log("indic CO2 : ", CO2)
//     newIndic = CO2 ;
//   }
//   else if  (indicator== "GDP"){
//     console.log("indic GDP: ", GDP)
//     newIndic =GDP;
//   }
//   else if  (indicator== "Happy"){
//     console.log("Population: ", Happy)
//     newIndic =Happy;
//   }
//   else if  (indicator== "Land"){
//     console.log("indic Land: ", Land)
//     newIndic =Land;
//   }
//   else if  (indicator== "Population"){
//     console.log("indic Population: ",  Pop)
//     newIndic = Pop;
//   }


//   //position the drawing
//   const cx = width * 0.5;
//   const cy = height * 0.4;
//   const w = width * 0.001;
//   const h = height * 0.3;

//   let x,y;

//   const scaleLand=math.mapRange(Land, 1,10, 100, 2000)
//   const num = 520 ///scaleLand ; //line density
//   console.log("num", num)

//   const scaleRadius=math.mapRange(GDP, 1,10, 0, 0.5)
//   const radius = width * 0.35 //scaleRadius //dispersion line


//   //convert degree to radiant for slice and angle
//   const scale360=math.mapRange(Happy, 1,10, 0, 360)
//   const degToRad = (degrees) => {
//     return degrees / 360 * Math.PI; // scale360 rounding -100/360
//   };

//   for (let i =0; i <num; i++){

//   // const slice = degToRad(360/num);
//   const slice = degToRad(350/num); ///scale360  NB VOLUTE 100 -500
//   // const factorPi=math.mapRange(Happy, 0, 10, 0, 0.5)
//   const angle = slice * i //*Happy; // close up details

//   const scaleCO2=math.mapRange(CO2, 1,10, 2, 5)
//   const scalePop=math.mapRange(Pop, 0,10, 0.1, 1)
//   x = cx +10+ radius * Math.sin(angle * Math.PI  ); // * scaleLand
//   y = cy + radius * Math.cos(angle * Math.PI  ); // / Pop

//   context.save();
//   context.translate(x,y);
//   context.rotate(angle * Math.PI +1000 );
//   const scaleCO22=math.mapRange(CO2, 1,10, 1, 100)
//   context.shadowBlur =  1.618; //1 t0 50
//   context.shadowColor = "grey";

//   context.beginPath();
//   const scaleLand=math.mapRange(Land, 1,10, 1, 500)
//   context.rect(-w /Math.PI,- h * 0.90, w, h); //-w * 0.30 ,- h * 0.3, w, h
//   context.fill()
//   context.restore();
//   }

//   //Function "centerX" to find center position x, automatically
//   const centerX = (text) => {
//     const metrics = context.measureText(text);
//     const textWidth =  metrics.width;
//     return (width/2) - (textWidth/2)
//   };

//   //Title cosmetics and center
//   const title = "France"
//   context.fillStyle = 'black';
//   context.font = "70px futura";
//   const titleCenter = centerX(title)
//   context.fillText(title, titleCenter, 1010)

//   //Title serie name + font
//   const serie = "ⓒHumAIn_Art"
//   context.fillStyle = 'grey';
//   context.font = "25px futura";
//   const serieCenter = centerX(serie)
//   context.fillText(serie, serieCenter, 1055)

//   };
// };

// canvasSketch(sketch, settings);

// const createPane = () => {
//   const pane = new Tweakpane.Pane(); //create a new slider pane
//   let folder;

//   folder = pane.addFolder({ title : "Indicators"});
//   folder.addInput(params, 'CO2', { min: 1, max: 10 });
//   folder.addInput(params, 'GDP', { min: 1, max: 10 });
//   folder.addInput(params, 'Happy', { min: 1, max: 10 });
//   folder.addInput(params, 'Land', { min: 1, max: 10 });
//   folder.addInput(params, 'Pop', { min: 1, max: 10 });


// };

// createPane();
