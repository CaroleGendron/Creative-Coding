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
  country: "Europe", //set default value in the pane
  CO2: "Europe",
  footprint: "Europe",
  landPolluted: "Europe",
  waste: "Europe",
  waterStress:"Europe"

}
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    //create country dictionnary - 27 countries - , 5 indics
    const Europe ={'CO2': 5 ,'Footprint': 5 ,'Land_polluted': 5 ,'Waste': 5 ,'Water_stress': 5 }
    const AUT ={'CO2': 7 ,'Footprint': 8 ,'Land_polluted': 7 ,'Waste': 8 ,'Water_stress': 4 }
    const BEL ={'CO2': 9 ,'Footprint': 9 ,'Land_polluted': 7 ,'Waste': 7 ,'Water_stress': 10 }
    const BGR ={'CO2': 5 ,'Footprint': 2 ,'Land_polluted': 7 ,'Waste': 10 ,'Water_stress': 9 }
    const CYP ={'CO2': 8 ,'Footprint': 0 ,'Land_polluted': 10 ,'Waste': 3 ,'Water_stress': 8 }
    const CZE ={'CO2': 10 ,'Footprint': 7 ,'Land_polluted': 3 ,'Waste': 4 ,'Water_stress': 7 }
    const DEU ={'CO2': 9 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 6 ,'Water_stress': 9 }
    const DNK ={'CO2': 6 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 5 ,'Water_stress': 6 }
    const ESP ={'CO2': 4 ,'Footprint': 1 ,'Land_polluted': 10 ,'Waste': 4 ,'Water_stress': 10 }
    const EST ={'CO2': 9 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 10 ,'Water_stress': 6 }
    const FIN ={'CO2': 4 ,'Footprint': 9 ,'Land_polluted': 0 ,'Waste': 10 ,'Water_stress': 5 }
    const FRA ={'CO2': 3 ,'Footprint': 5 ,'Land_polluted': 8 ,'Waste': 7 ,'Water_stress': 7 }
    const GRC ={'CO2': 6 ,'Footprint': 4 ,'Land_polluted': 9 ,'Waste': 6 ,'Water_stress': 7 }
    const HRV ={'CO2': 2 ,'Footprint': 3 ,'Land_polluted': 7 ,'Waste': 1 ,'Water_stress': 1 }
    const HUN ={'CO2': 4 ,'Footprint': 2 ,'Land_polluted': 9 ,'Waste': 2 ,'Water_stress': 4 }
    const IRL ={'CO2': 8 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 3 ,'Water_stress': 2 }
    const ITA ={'CO2': 5 ,'Footprint': 5 ,'Land_polluted': 9 ,'Waste': 4 ,'Water_stress': 8 }
    const LTU ={'CO2': 2 ,'Footprint': 7 ,'Land_polluted': 1 ,'Waste': 2 ,'Water_stress': 1 }
    const LUX ={'CO2': 10 ,'Footprint': 1 ,'Land_polluted': 2 ,'Waste': 9 ,'Water_stress': 3 }
    const LVA ={'CO2': 1 ,'Footprint': 9 ,'Land_polluted': 9 ,'Waste': 0 ,'Water_stress': 0 }
    const MLT ={'CO2': 2 ,'Footprint': 8 ,'Land_polluted': 7 ,'Waste': 7 ,'Water_stress': 10 }
    const NLD ={'CO2': 10 ,'Footprint': 6 ,'Land_polluted': 7 ,'Waste': 8 ,'Water_stress': 5 }
    const POL ={'CO2': 7 ,'Footprint': 4 ,'Land_polluted': 3 ,'Waste': 6 ,'Water_stress': 9 }
    const PRT ={'CO2': 3 ,'Footprint': 3 ,'Land_polluted': 10 ,'Waste': 1 ,'Water_stress': 6 }
    const ROU ={'CO2': 1 ,'Footprint': 2 ,'Land_polluted': 1 ,'Waste': 9 ,'Water_stress': 4 }
    const SVK ={'CO2': 6 ,'Footprint': 4 ,'Land_polluted': 2 ,'Waste': 2 ,'Water_stress': 2 }
    const SVN ={'CO2': 7 ,'Footprint': 7 ,'Land_polluted': 3 ,'Waste': 5 ,'Water_stress': 3 }
    const SWE ={'CO2': 0 ,'Footprint': 10 ,'Land_polluted': 7 ,'Waste': 9 ,'Water_stress': 2 }


    //creation indicator list to be able to loop
    const country_list = ['AUT','BEL','BGR','CYP','CZE','DEU','DNK','ESP','EST','FIN','FRA','GRC','HRV','HUN','IRL','ITA','LTU','LUX','LVA','MLT','NLD','POL','PRT','ROU','SVK','SVN','SWE'];
    const country = params.country// indicator_list[Math.floor(Math.random()*indicator_list.length)];

    const degToRad = (degrees) => {
      return degrees / 12 * Math.PI; //f_pop 1 DEFINITION DENTELLE. 1 TO 360
    };

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.003; //
    const h = height * 0.3; // f_pop W 0.1 to 1
    let x,y;

    const num = 12 ; //d_land DEFINITION DENTELLE. FROM 1 TO 2000
    const radius = width * 12 //c_happy  from 0.1 to 1

    for (let i =0; i <num; i++){

     // const slice = degToRad(360/num);
      const slice = degToRad(12/num); //a_co2 27 to 360
      const angle = slice * i;


      x = cx + radius * Math.sin(angle / Math.PI );
      y = cy + radius * Math.cos(angle * Math.PI );

      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      context.shadowBlur =  12;//b / /_wealth  +1 to +1000 /
      context.shadowColor = "grey";


      context.beginPath();
      context.rect(-w * 0.9 ,- h * 0.9, w, h); //e_expect = 0 to 200 /
      context.fill();
      context.restore()

    }
    context.fillStyle = 'BLACK';
    context.font = "250px futura";
    context.fillText(country, 4900, 5350)
    context.fillStyle = 'BLACK';
    context.font = "90px futura";
    context.fillText("Variations of π (pi)  ",4900, 5550)
    context.font = "70px futura";
    context.fillText("ⓒHumAIn_Art",5060, 5650)

  };
};

canvasSketch(sketch, settings);

const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "European Countries"});
  folder.addInput(params, "country", { options : { country: 5,"BEL" : 5,"BGR" : 5,"CYP" : 5,"CZE" : 5,"DEU" : 5,"DNK" : 5,"ESP" : 5,"EST" : 5,"FIN" : 5,"FRA" : 5,"GRC" : 5,"HRV" : 5,"HUN" : 5,"IRL" : 5,"ITA" : 5,"LTU" : 5,"LUX" : 5,"LVA" : 5,"MLT" : 5,"NLD" : 5,"POL" : 5,"PRT" : 5,"ROU" : 5,"SVK" : 5,"SVN" : 5,"SWE" : 5}});
  folder.addInput(params, 'CO2', { min: 0, max: 10, step: 1 });
};

createPane();

// # Save animations to MP4 file
// canvas-sketch sketches/animation.js --output=media/--stream

// # Save animations to GIF file instead
// canvas-sketch sketches/animation.js --output=media/ --stream=gif

// # Save animations to GIF but scale it down to 512 px wide
// canvas-sketch sketches/animation.js --output=tmp --stream [ gif --scale=512:-1 ]
