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
  indic: "Country", //set default value in the pane
}
const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';

    const country = ["France"];
    const a_co2 = [480];
    const b_wealth = [1400];
    const c_happy= [0.16];
    const d_land = [1000];
    const f_pop = [32];

    // const country = ["Germany"];
    // const a_co2 = [240]; //works
    // const b_wealth = [1600];
    // const c_happy= [0.08]; //works
    // const d_land = [900]; //works
    // const f_pop = [32];//works

    // const country = ["Netherlands"];
    // const a_co2 = [250]; //works
    // const b_wealth = [1700];
    // const c_happy= [0]; //works
    // const d_land = [200]; //works
    // const f_pop = [25.6];//works


    // const country = ["Spain"];
    // const a_co2 = [440]; //works
    // const b_wealth = [1200];
    // const c_happy= [0.16]; //works
    // const d_land = [1000]; //works
    // const f_pop = [28.8];//works


    // const country = ["Portugal"];
    // const a_co2 = [480]; //works
    // const b_wealth = [800];
    // const c_happy= [0.24]; //works
    // const d_land = [600]; //works
    // const f_pop = [19.2];//works

    // const country = ["Finland"];
    // const a_co2 = [440]; //works
    // const b_wealth = [1800];
    // const c_happy= [0]; //works
    // const d_land = [900]; //works
    // const f_pop = [12.8];//works

    // const country = ["Luxembourg"];
    // const a_co2 = [200]; //works
    // const b_wealth = [2000];
    // const c_happy= [0.04]; //works
    // const d_land = [100]; //works
    // const f_pop = [3.2];//works

    // const country = ["Ireland"];
    // const a_co2 = [280]; //works
    // const b_wealth = [1000];
    // const c_happy= [0.08]; //works
    // const d_land = [640]; //works
    // const f_pop = [12.8];//works

    // const country = ["Italy"];
    // const a_co2 = [400]; //works
    // const b_wealth = [1400];
    // const c_happy= [0.16]; //works
    // const d_land = [800]; //works
    // const f_pop = [32];//works

    // const country = ["Austria"];
    // const a_co2 = [320]; //works
    // const b_wealth = [1600];
    // const c_happy= [0.04]; //works
    // const d_land = [600]; //works
    // const f_pop = [19.2];//works


    // const country = ["Belgium"];
    // const a_co2 = [240]; //works
    // const b_wealth = [1400];
    // const c_happy= [0.12]; //works
    // const d_land = [200]; //works
    // const f_pop = [25.6];//works

    // const country = ["Bulgaria"];
    // const a_co2 = [400]; //works
    // const b_wealth = [400];
    // const c_happy= [0.4]; //works
    // const d_land = [700]; //works
    // const f_pop = [16];//works


    // const country = ["Cyprus"];
    // const a_co2 = [280]; //works
    // const b_wealth = [1200];
    // const c_happy= [0.28]; //works
    // const d_land = [100]; //works
    // const f_pop = [3.2];//works

    // const country = ["Czechia"];
    // const a_co2 = [200]; //works
    // const b_wealth = [800];
    // const c_happy= [0.12]; //works
    // const d_land = [500]; //works
    // const f_pop = [22.4];//works


    // const country = ["Denmark"];
    // const a_co2 = [360]; //works
    // const b_wealth = [2000];
    // const c_happy= [0]; //works
    // const d_land = [300]; //works
    // const f_pop = [16];//works


    // const country = ["Estonia"];
    // const a_co2 = [240]; //works
    // const b_wealth = [1000];
    // const c_happy= [0.32]; //works
    // const d_land = [300]; //works
    // const f_pop = [6.4];//works

    // const country = ["Greece"];
    // const a_co2 = [360]; //works
    // const b_wealth = [400];
    // const c_happy= [0.36]; //works
    // const d_land = [700]; //works
    // const f_pop = [22.4];//works

    // const country = ["Croatia"];
    // const a_co2 = [520]; //works
    // const b_wealth = [200];
    // const c_happy= [0.36]; //works
    // const d_land = [600]; //works
    // const f_pop = [9.6];//works

    // const country = ["Hungary"];
    // const a_co2 = [440]; //works
    // const b_wealth = [400];
    // const c_happy= [0.32]; //works
    // const d_land = [700]; //works
    // const f_pop = [19.6];//works


    // const country = ["Lithuania"];
    // const a_co2 = [520]; //works
    // const b_wealth = [800];
    // const c_happy= [0.24]; //works
    // const d_land = [400]; //works
    // const f_pop = [9.6];//works


    // const country = ["Latvia"];
    // const a_co2 = [560]; //works
    // const b_wealth = [600];
    // const c_happy= [0.28]; //works
    // const d_land = [400]; //works
    // const f_pop = [6.4];//works

    // const country = ["Malta"];
    // const a_co2 = [520]; //works
    // const b_wealth = [1200];
    // const c_happy= [0.12]; //works
    // const d_land = [2]; //works
    // const f_pop = [2];//works


    // const country = ["Poland"];
    // const a_co2 = [320]; //works
    // const b_wealth = [400];
    // const c_happy= [0.2]; //works
    // const d_land = [900]; //works
    // const f_pop = [28.8];//works


    // const country = ["Romania"];
    // const a_co2 = [560]; //works
    // const b_wealth = [200];
    // const c_happy= [0.24]; //works
    // const d_land = [800]; //works
    // const f_pop = [28.8];//works


    // const country = ["Slovakia"];
    // const a_co2 = [360]; //works
    // const b_wealth = [600];
    // const c_happy= [0.2]; //works
    // const d_land = [400]; //works
    // const f_pop = [12.8];//works


    // const country = ["Slovenia"];
    // const a_co2 = [320]; //works
    // const b_wealth = [1000];
    // const c_happy= [0.24]; //works
    // const d_land = [200]; //works
    // const f_pop = [6.4];//works

    // const country = ["Sweden"];
    // const a_co2 = [600]; //works
    // const b_wealth = [1800];
    // const c_happy= [0.04]; //works
    // const d_land = [1000]; //works
    // const f_pop = [22.4];//works

    const degToRad = (degrees) => {
      return degrees / f_pop * Math.PI; //f_pop 1 DEFINITION DENTELLE. 1 TO 360
    };

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.003; //
    const h = height * 0.3; // f_pop W 0.1 to 1
    let x,y;

    const num = d_land ; //d_land DEFINITION DENTELLE. FROM 1 TO 2000
    const radius = width * c_happy //c_happy  from 0.1 to 1

    for (let i =0; i <num; i++){

     // const slice = degToRad(360/num);
      const slice = degToRad(a_co2/num); //a_co2 27 to 360
      const angle = slice * i;


      x = cx + radius * Math.sin(angle / Math.PI );
      y = cy + radius * Math.cos(angle * Math.PI );

      context.save();
      context.translate(x,y);
      context.rotate(-angle);
      context.shadowBlur =  b_wealth;//b / /_wealth  +1 to +1000 /
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
  folder.addInput(params, "Country", { options : { country: 5,"BEL" : 5,"BGR" : 5,"CYP" : 5,"CZE" : 5,"DEU" : 5,"DNK" : 5,"ESP" : 5,"EST" : 5,"FIN" : 5,"FRA" : 5,"GRC" : 5,"HRV" : 5,"HUN" : 5,"IRL" : 5,"ITA" : 5,"LTU" : 5,"LUX" : 5,"LVA" : 5,"MLT" : 5,"NLD" : 5,"POL" : 5,"PRT" : 5,"ROU" : 5,"SVK" : 5,"SVN" : 5,"SWE" : 5}});
};

createPane();

// # Save animations to MP4 file
// canvas-sketch sketches/animation.js --output=media/--stream

// # Save animations to GIF file instead
// canvas-sketch sketches/animation.js --output=media/ --stream=gif

// # Save animations to GIF but scale it down to 512 px wide
// canvas-sketch sketches/animation.js --output=tmp --stream [ gif --scale=512:-1 ]
