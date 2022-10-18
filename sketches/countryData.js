//bring real values into params per defaut
const canvasSketch = require('canvas-sketch');
const Tweakpane = require('tweakpane');
const math = require("canvas-sketch-util/math")

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
  playbackRate: 'throttle',
  loop : true,
  duration: 3,
  fps: 1,
};

//     //create country dictionnary - 27 countries - , 5 indics
// const AUT=  {  "CO2" :  7, "GDP" :  8, "Happy" :  9, "Land" :  6, "Pop" :  6 }
// const HUN=  {  "CO2" :  4, "GDP" :  2, "Happy" :  2, "Land" :  7, "Pop" :  6 }
// const SVK=  {  "CO2" :  6, "GDP" :  3, "Happy" :  5, "Land" :  4, "Pop" :  4 }
// const CZE=  {  "CO2" :  10, "GDP" :  4, "Happy" :  7, "Land" :  5, "Pop" :  7 }
// const POL=  {  "CO2" :  7, "GDP" :  2, "Happy" :  5, "Land" :  9, "Pop" :  9 }
// const LTU=  {  "CO2" :  2, "GDP" :  4, "Happy" :  4, "Land" :  4, "Pop" :  3 }
// const LVA=  {  "CO2" :  1, "GDP" :  3, "Happy" :  3, "Land" :  4, "Pop" :  2 }
// const EST=  {  "CO2" :  9, "GDP" :  5, "Happy" :  2, "Land" :  3, "Pop" :  2 }
// const FIN=  {  "CO2" :  4, "GDP" :  9, "Happy" :  10, "Land" :  9, "Pop" :  4 }
// const SWE=  {  "CO2" :  1, "GDP" :  9, "Happy" :  9, "Land" :  10, "Pop" :  7 }
// const DNK=  {  "CO2" :  6, "GDP" :  10, "Happy" :  10, "Land" :  3, "Pop" :  5 }
// const DEU=  {  "CO2" :  9, "GDP" :  8, "Happy" :  8, "Land" :  9, "Pop" :  10 }
// const LUX=  {  "CO2" :  10, "GDP" :  10, "Happy" :  9, "Land" :  1, "Pop" :  1 }
// const NLD=  {  "CO2" :  10, "GDP" :  9, "Happy" :  10, "Land" :  2, "Pop" :  8 }
// const BEL=  {  "CO2" :  9, "GDP" :  7, "Happy" :  7, "Land" :  2, "Pop" :  8 }
// const IRL=  {  "CO2" :  8, "GDP" :  10, "Happy" :  8, "Land" :  5, "Pop" :  4 }
// const FRA=  {  "CO2" :  3, "GDP" :  7, "Happy" :  6, "Land" :  10, "Pop" :  10 }
// const PRT=  {  "CO2" :  3, "GDP" :  4, "Happy" :  2, "Land" :  6, "Pop" :  6 }
// const ESP=  {  "CO2" :  4, "GDP" :  6, "Happy" :  6, "Land" :  10, "Pop" :  9 }
// const ITA=  {  "CO2" :  5, "GDP" :  7, "Happy" :  6, "Land" :  8, "Pop" :  10 }
// const MLT=  {  "CO2" :  2, "GDP" :  6, "Happy" :  7, "Land" :  1, "Pop" :  1 }
// const GRC=  {  "CO2" :  6, "GDP" :  2, "Happy" :  1, "Land" :  7, "Pop" :  7 }
// const CYP=  {  "CO2" :  8, "GDP" :  6, "Happy" :  3, "Land" :  1, "Pop" :  1 }
// const BGR=  {  "CO2" :  5, "GDP" :  1, "Happy" :  1, "Land" :  7, "Pop" :  5 }
// const ROU=  {  "CO2" :  1, "GDP" :  1, "Happy" :  4, "Land" :  8, "Pop" :  9 }
// const HRV=  {  "CO2" :  2, "GDP" :  1, "Happy" :  1, "Land" :  6, "Pop" :  3 }
// const SVN=  {  "CO2" :  7, "GDP" :  5, "Happy" :  4, "Land" :  2, "Pop" :  2 }

const params= {
  CO2: 2,
  GDP: 7,
  Happy: 6,
  Land:8,
  Pop: 10,

}

const sketch = () => {
  return ({ context, width, height }) => {

  //set background
  context.fillStyle = '#F6F3E1';
  context.fillRect(0, 0, width, height);
  context.fillStyle = 'black';

  //create params variables
  const CO2 = params.CO2; //blur lines
  const GDP = params.GDP; //radius => dispersion line
  const Happy = params.Happy; //slice => number of loops
  const Land = params.Land; // num => line density
  const Pop = params.Pop; //x
  const element4 = params.element4; //x

  //creation indicator list to be able to select/get random indicator and then loop
  const indicator_list = ["CO2","GDP", "Land_polluted", "Land", "Water_stress"];
  const indicator =  indicator_list[Math.floor(Math.random()*indicator_list.length)];//params.indic
  console.log("indicator", indicator)

  //get selected indicator value
  let newIndic;

  if (indicator== "CO2"){
    console.log("indic CO2 : ", CO2)
    newIndic = CO2 ;
  }
  else if  (indicator== "GDP"){
    console.log("indic GDP: ", GDP)
    newIndic =GDP;
  }
  else if  (indicator== "Land_polluted"){
    console.log("Land_polluted: ", Happy)
    newIndic =Happy;
  }
  else if  (indicator== "Land"){
    console.log("indic Land: ", Land)
    newIndic =Land;
  }
  else if  (indicator== "Water_stress"){
    console.log("indic Water_stress: ",  Pop)
    newIndic = Pop;
  }


  //position the drawing
  const cx = width * 0.5;
  const cy = height * 0.48;
  const w = width * 0.0025;
  const h = height * 0.15;

  let x,y;

  const scaleNum=math.mapRange(Land, 0,10, 100, 3000)
  const num = scaleNum ///scaleNum ; //line density
  console.log("num", num)

  const scaleRadius=math.mapRange(GDP, 0,10, 0, 1)
  const radius = width * scaleRadius //scaleRadius //dispersion line


  //convert degree to radiant for slice and angle
  const scale360=math.mapRange(Happy, 0,10, 200, 360)
  const degToRad = (degrees) => {
    return degrees / scale360  * Math.PI*2 ; // scale360 rounding -100/360
  };

  for (let i =0; i <num; i++){

  // const slice = degToRad(360/num);
  const slice = degToRad(scale360/num); ///scale360  NB VOLUTE 100 -500
  const factorPi=math.mapRange(Happy, 0,10, 0, 1)
  const angle = slice * i * factorPi //*Happy; // close up details

  const scaleCO2=math.mapRange(CO2, 0,10, 2, 5)
  const scalePop=math.mapRange(Pop, 0,10, 0.1, 1)
  x = cx + radius * Math.sin(angle * Math.PI  * scaleCO2); // * scaleLand
  y = cy + radius * Math.cos(angle * Math.PI  / scalePop ); // / Pop

  context.save();
  context.translate(x,y);
  context.rotate(angle);
  const scaleCO22=math.mapRange(CO2, 0,10, 1, 100)
  context.shadowBlur =  scaleCO22; //1 t0 50
  context.shadowColor = "grey";

  context.beginPath();
  const scaleLand=math.mapRange(Land, 0,10, 1, 500)
  context.rect(-w * 25 ,-h * 0.7, w-params.Land, h+scaleLand); //-w * 0.30 ,- h * 0.3, w, h
  context.fill()
  context.restore();
  }

  //Function "centerX" to find center position x, automatically
  const centerX = (text) => {
    const metrics = context.measureText(text);
    const textWidth =  metrics.width;
    return (width/2) - (textWidth/2)
  };

  //Title cosmetics and center
  const title = "Hungaria"
  context.fillStyle = 'black';
  context.font = "70px futura";
  const titleCenter = centerX( title)
  context.fillText(title, titleCenter, 1010)

  //Title serie name + font
  const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
  context.fillStyle = 'grey';
  context.font = "25px futura";
  const serieCenter = centerX(serie)
  context.fillText(serie, serieCenter, 1055)

  };
};

canvasSketch(sketch, settings);

const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "Indicators"});
  folder.addInput(params, 'CO2', { min: 1, max: 10 });
  folder.addInput(params, 'GDP', { min: 0, max: 10 });
  folder.addInput(params, 'Happy', { min: 0, max: 10 });
  folder.addInput(params, 'Land', { min: 0, max: 10 });
  folder.addInput(params, 'Pop', { min: 0, max: 10 });


};

// createPane();
