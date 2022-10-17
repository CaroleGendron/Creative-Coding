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
//     // const Europe ={'CO2': 5 ,'Footprint': 5 ,'Land_polluted': 5 ,'Waste': 5 ,'Water_stress': 5 }
//     // const AUT ={'CO2': 7 ,'Footprint': 8 ,'Land_polluted': 7 ,'Waste': 8 ,'Water_stress': 4 }
//     // const BEL ={'CO2': 9 ,'Footprint': 9 ,'Land_polluted': 7 ,'Waste': 7 ,'Water_stress': 10 }
//     // const BGR ={'CO2': 5 ,'Footprint': 2 ,'Land_polluted': 7 ,'Waste': 10 ,'Water_stress': 9 }
//     // const CYP ={'CO2': 8 ,'Footprint': 0 ,'Land_polluted': 10 ,'Waste': 3 ,'Water_stress': 8 }
//     // const CZE ={'CO2': 10 ,'Footprint': 7 ,'Land_polluted': 3 ,'Waste': 4 ,'Water_stress': 7 }
//     // const DEU ={'CO2': 9 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 6 ,'Water_stress': 9 }
//     // const DNK ={'CO2': 6 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 5 ,'Water_stress': 6 }
//     // const ESP ={'CO2': 4 ,'Footprint': 1 ,'Land_polluted': 10 ,'Waste': 4 ,'Water_stress': 10 }
//     // const EST ={'CO2': 9 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 10 ,'Water_stress': 6 }
//     //const FIN ={'CO2': 4 ,'Footprint': 9 ,'Land_polluted': 0 ,'Waste': 10 ,'Water_stress': 5 }
    // const FRA ={'CO2': 3 ,'Footprint': 5 ,'Land_polluted': 8 ,'Waste': 7 ,'Water_stress': 7 }
//     // const GRC ={'CO2': 6 ,'Footprint': 4 ,'Land_polluted': 9 ,'Waste': 6 ,'Water_stress': 7 }
//     // const HRV ={'CO2': 2 ,'Footprint': 3 ,'Land_polluted': 7 ,'Waste': 1 ,'Water_stress': 1 }
//     // const HUN ={'CO2': 4 ,'Footprint': 2 ,'Land_polluted': 9 ,'Waste': 2 ,'Water_stress': 4 }
//     // const IRL ={'CO2': 8 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 3 ,'Water_stress': 2 }
//     // const ITA ={'CO2': 5 ,'Footprint': 5 ,'Land_polluted': 9 ,'Waste': 4 ,'Water_stress': 8 }
//     // const LTU ={'CO2': 2 ,'Footprint': 7 ,'Land_polluted': 1 ,'Waste': 2 ,'Water_stress': 1 }
    // const LUX ={'CO2': 10 ,'Footprint': 1 ,'Land_polluted': 2 ,'Waste': 9 ,'Water_stress': 3 }
//     // const LVA ={'CO2': 1 ,'Footprint': 9 ,'Land_polluted': 9 ,'Waste': 0 ,'Water_stress': 0 }
    // const MLT ={'CO2': 2 ,'Footprint': 8 ,'Land_polluted': 7 ,'Waste': 7 ,'Water_stress': 10 }
    // const NLD ={'CO2': 10 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 8 ,'Water_stress': 5 }
//     // const POL ={'CO2': 7 ,'Footprint': 4 ,'Land_polluted': 3 ,'Waste': 6 ,'Water_stress': 9 }
//     // const PRT ={'CO2': 3 ,'Footprint': 3 ,'Land_polluted': 10 ,'Waste': 1 ,'Water_stress': 6 }
//     // const ROU ={'CO2': 1 ,'Footprint': 2 ,'Land_polluted': 1 ,'Waste': 9 ,'Water_stress': 4 }
//     // const SVK ={'CO2': 6 ,'Footprint': 4 ,'Land_polluted': 2 ,'Waste': 2 ,'Water_stress': 2 }
    // const SVN ={'CO2': 7 ,'Footprint': 7 ,'Land_polluted': 3 ,'Waste': 5 ,'Water_stress': 3 }
    // const SWE ={'CO2': 0 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 9 ,'Water_stress': 2 }



const params= {
  CO2: 5,
  footprint: 5,
  landPolluted: 5,
  waste: 5,
  waterStress: 5,

}

const sketch = () => {
  return ({ context, width, height }) => {

  //set background
  context.fillStyle = '#F6F3E1';
  context.fillRect(0, 0, width, height);
  context.fillStyle = 'black';

  //create params variables
  const CO2 = params.CO2; //num
  const footprint = params.footprint; //radius
  const landPolluted = params.landPolluted; //slice
  const waste = params.waste; //angle
  const waterStress = params.waterStress; //x
  const yParam = params.waterStress; //x

  //creation indicator list to be able to select/get random indicator and then loop
  const indicator_list = ["CO2","Footprint", "Land_polluted", "Waste", "Water_stress"];
  const indicator =  indicator_list[Math.floor(Math.random()*indicator_list.length)];//params.indic
  console.log("indicator", indicator)

  //get selected indicator value
  let newIndic;

  if (indicator== "CO2"){
    console.log("indic CO2 : ", CO2)
    newIndic = CO2 ;
  }
  else if  (indicator== "Footprint"){
    console.log("indic Footprint: ", footprint)
    newIndic =footprint;
  }
  else if  (indicator== "Land_polluted"){
    console.log("Land_polluted: ", landPolluted)
    newIndic =landPolluted;
  }
  else if  (indicator== "Waste"){
    console.log("indic Waste: ", waste)
    newIndic =waste;
  }
  else if  (indicator== "Water_stress"){
    console.log("indic Water_stress: ",  waterStress)
    newIndic = waterStress;
  }


  //position the drawing
  const cx = width * 0.5;
  const cy = height * 0.5;
  const w = width * 0.02;
  const h = height * 0.1;

  let x,y;

  const scaleNum=math.mapRange(CO2, 0,10, 100, 2000)
  const num = 50 ///scaleNum ; //line density

  const scaleRadius=math.mapRange(footprint, 0,10, 0, 1)
  const radius = width * 0.3 //scaleRadius //dispersion line


  //convert degree to radiant for slice and angle
  const scale360=math.mapRange(landPolluted, 0,10, 1, 360)
  console.log("scale360::", scale360 ,"landPolluted",landPolluted )
  const degToRad = (degrees) => {
    return degrees / 180  * Math.PI; // scale360 rounding
  };

  for (let i =0; i <num; i++){

  // const slice = degToRad(360/num);
  const slice = degToRad(360/num); ///scale360
  const angle = slice * i //*landPolluted; // close up details


  const scaleWaste=math.mapRange(waste, 0,10, -10, 10)
  const scalewaterStress=math.mapRange(waterStress, 0,10, -10, 10)
  x = cx + radius * Math.sin(angle * Math.PI  * 10); // * scaleWaste
  y = cy + radius * Math.cos(angle * Math.PI * -10 ); // / waterStress



  context.save();
  context.translate(x,y);
  context.rotate(angle);
  context.transform(1.2,5,0,Math.PI/2,0,0)
  context.shadowBlur =  1.616;
  context.shadowColor = "grey";

  context.beginPath();
  context.rect(w * 0.25 ,h * 0.7, w, h); //-w * 0.30 ,- h * 0.3, w, h
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
  const title = "Hypnose"
  context.fillStyle = 'grey';
  context.font = "70px futura";
  const titleCenter = centerX( title)
  context.fillText(title, titleCenter, 1010)

  //Title serie name + font
  const serie = "ⓒHumAIn_Art" //"Variations of π (pi)"
  context.font = "25px futura";
  const serieCenter = centerX(serie)
  context.fillText(serie, serieCenter, 1050)

  };
};

canvasSketch(sketch, settings);

const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "Indicators"});
  folder.addInput(params, 'CO2', { min: 1, max: 10 });
  folder.addInput(params, 'footprint', { min: 0, max: 10 });
  folder.addInput(params, 'landPolluted', { min: 0, max: 10 });
  folder.addInput(params, 'waste', { min: 0, max: 10 });
  folder.addInput(params, 'waterStress', { min: 0, max: 10 });


};

// createPane();
