//bring real values into params per defaut
const canvasSketch = require('canvas-sketch');
const Tweakpane = require('tweakpane');

const settings = {
  dimensions: [ 6080, 6080 ],
  animate: true,
  playbackRate: 'throttle',
  loop : true,
  duration: 3,
  fps: 1,
};

const params= {
  CO2: 5,
  footprint: 5,
  landPolluted: 5,
  waste: 5,
  waterStress: 5
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const CO2 = params.CO2;
    const footprint = params.footprint;
    const landPolluted = params.landPolluted;
    const waste = params.waste;
    const waterStress = params.waterStress;

    //create country dictionnary - 27 countries - , 5 indics
    // const Europe ={'CO2': 5 ,'Footprint': 5 ,'Land_polluted': 5 ,'Waste': 5 ,'Water_stress': 5 }
    // const AUT ={'CO2': 7 ,'Footprint': 8 ,'Land_polluted': 7 ,'Waste': 8 ,'Water_stress': 4 }
    // const BEL ={'CO2': 9 ,'Footprint': 9 ,'Land_polluted': 7 ,'Waste': 7 ,'Water_stress': 10 }
    // const BGR ={'CO2': 5 ,'Footprint': 2 ,'Land_polluted': 7 ,'Waste': 10 ,'Water_stress': 9 }
    // const CYP ={'CO2': 8 ,'Footprint': 0 ,'Land_polluted': 10 ,'Waste': 3 ,'Water_stress': 8 }
    // const CZE ={'CO2': 10 ,'Footprint': 7 ,'Land_polluted': 3 ,'Waste': 4 ,'Water_stress': 7 }
    // const DEU ={'CO2': 9 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 6 ,'Water_stress': 9 }
    // const DNK ={'CO2': 6 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 5 ,'Water_stress': 6 }
    // const ESP ={'CO2': 4 ,'Footprint': 1 ,'Land_polluted': 10 ,'Waste': 4 ,'Water_stress': 10 }
    // const EST ={'CO2': 9 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 10 ,'Water_stress': 6 }
    // const FIN ={'CO2': 4 ,'Footprint': 9 ,'Land_polluted': 0 ,'Waste': 10 ,'Water_stress': 5 }
    // const FRA ={'CO2': 3 ,'Footprint': 5 ,'Land_polluted': 8 ,'Waste': 7 ,'Water_stress': 7 }
    // const GRC ={'CO2': 6 ,'Footprint': 4 ,'Land_polluted': 9 ,'Waste': 6 ,'Water_stress': 7 }
    const HRV ={'CO2': 2 ,'Footprint': 3 ,'Land_polluted': 7 ,'Waste': 1 ,'Water_stress': 1 }
    // const HUN ={'CO2': 4 ,'Footprint': 2 ,'Land_polluted': 9 ,'Waste': 2 ,'Water_stress': 4 }
    // const IRL ={'CO2': 8 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 3 ,'Water_stress': 2 }
    // const ITA ={'CO2': 5 ,'Footprint': 5 ,'Land_polluted': 9 ,'Waste': 4 ,'Water_stress': 8 }
    // const LTU ={'CO2': 2 ,'Footprint': 7 ,'Land_polluted': 1 ,'Waste': 2 ,'Water_stress': 1 }
    // const LUX ={'CO2': 10 ,'Footprint': 1 ,'Land_polluted': 2 ,'Waste': 9 ,'Water_stress': 3 }
    // const LVA ={'CO2': 1 ,'Footprint': 9 ,'Land_polluted': 9 ,'Waste': 0 ,'Water_stress': 0 }
    // const MLT ={'CO2': 2 ,'Footprint': 8 ,'Land_polluted': 7 ,'Waste': 7 ,'Water_stress': 10 }
    // const NLD ={'CO2': 10 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 8 ,'Water_stress': 5 }
    // const POL ={'CO2': 7 ,'Footprint': 4 ,'Land_polluted': 3 ,'Waste': 6 ,'Water_stress': 9 }
    // const PRT ={'CO2': 3 ,'Footprint': 3 ,'Land_polluted': 10 ,'Waste': 1 ,'Water_stress': 6 }
    // const ROU ={'CO2': 1 ,'Footprint': 2 ,'Land_polluted': 1 ,'Waste': 9 ,'Water_stress': 4 }
    // const SVK ={'CO2': 6 ,'Footprint': 4 ,'Land_polluted': 2 ,'Waste': 2 ,'Water_stress': 2 }
    // const SVN ={'CO2': 7 ,'Footprint': 7 ,'Land_polluted': 3 ,'Waste': 5 ,'Water_stress': 3 }
    // const SWE ={'CO2': 0 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 9 ,'Water_stress': 2 }


//creation indicator list to be able to loop
const indicator_list = ["CO2","Footprint", "Land_polluted", "Waste", "Water_stress"];
const indicator =  indicator_list[Math.floor(Math.random()*indicator_list.length)];//params.indic
console.log("indicator", indicator)


const degToRad = (degrees) => {
  return degrees / 180 * Math.PI; //f_pop 1 DEFINITION DENTELLE. 1 TO 360
};

// //Creating empty array for country_id
// const indic_len = Object.keys(indicator_list).length;
// console.log("indic_len : ", indic_len)

// let country_ids = [];
// let new_id = 0
// console.log("country_ids : ", country_ids)

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

console.log("newIndic : ", newIndic)

const cx = width * 0.5;
const cy = height * 0.5;
const w = width * 0.003; //
const h = height * 0.5; // CO2 W 0.1 to 1

let x,y;

const num = 1000 ; //d_land DEFINITION DENTELLE. FROM 1 TO 2000
const radius = width * footprint/3 //c_happy  from 0.1 to 1
console.log("radius", radius)

for (let i =0; i <num; i++){

  // const slice = degToRad(360/num);
  const slice = degToRad(landPolluted*100/num); //a_co2 27 to 360 //work really well
  const angle = slice * i+CO2;


  x = cx + radius * Math.sin(angle / Math.PI  -waterStress);
  y = cy + radius * Math.cos(angle * Math.PI -waterStress);

  context.save();
  context.translate(x,y);
  context.rotate(-angle);
  context.shadowBlur =  waste*1000;//b / /_wealth  +1 to +1000 /
  context.shadowColor = "grey";


  context.beginPath();
  context.rect(-w * 0.9 ,- h * 0.9, w, h);
  context.fill();
  context.restore();

}
context.fillStyle = 'BLACK';
context.font = "250px futura";
context.fillText("France", 4900, 5350)
context.fillStyle = 'BLACK';
context.font = "90px futura";
context.fillText("Variations of π (pi)  ",4900, 5550)
context.font = "70px futura";
context.fillText("ⓒHumAIn_Art",5060, 5650);


  };
};

canvasSketch(sketch, settings);

const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "Indicators"});
  // folder.addInput(params, "indicator", { options : { indicator: 5,"CO2": CO2,"Footprint": footprint, "Land_polluted": landPolluted, "Waste":waste, "Water_stress":waterStress}});
  folder.addInput(params, 'CO2', { min: 1, max: 10 });
  folder.addInput(params, 'footprint', { min: 0, max: 1 });
  folder.addInput(params, 'landPolluted', { min: 0, max: 50 });
  folder.addInput(params, 'waste', { min: 0, max: 360 });
  folder.addInput(params, 'waterStress', { min: 0, max: 360 });

};

createPane();

// # Save animations to MP4 file
// canvas-sketch sketches/animation.js --output=media/--stream

// # Save animations to GIF file instead
// canvas-sketch sketches/animation.js --output=media/ --stream=gif

// # Save animations to GIF but scale it down to 512 px wide
// canvas-sketch sketches/animation.js --output=tmp --stream [ gif --scale=512:-1 ]
