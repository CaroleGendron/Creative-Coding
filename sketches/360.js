
// TODO : order country based on geography.
// TODO : put ISO3 on EU map 2D

const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math'); //to map values
const Tweakpane = require('tweakpane');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true,
  playbackRate: 'throttle',
  loop : true,
  duration: 3,
  fps: 1, // frame rate, defaults to 30
};

const params= {
   indic: "Average", //set default value in the pane
}

const sketch = () => {
  return ({ context, width, height }) => {

    //set background
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';

    //convert units : degrees to radiant
    const degToRad = (degrees) => {
      return degrees / 180 * Math.PI;
    };

    //create positions
    const cx = width * 0.5;
    const cy = height * 0.45;
    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;

    const radius = width * 0.1;

    // list of data variables;
    const avg ={"AUT": 5,"BEL" : 5,"BGR" : 5,"CYP" : 5,"CZE" : 5,"DEU" : 5,"DNK" : 5,"ESP" : 5,"EST" : 5,"FIN" : 5,"FRA" : 5,"GRC" : 5,"HRV" : 5,"HUN" : 5,"IRL" : 5,"ITA" : 5,"LTU" : 5,"LUX" : 5,"LVA" : 5,"MLT" : 5,"NLD" : 5,"POL" : 5,"PRT" : 5,"ROU" : 5,"SVK" : 5,"SVN" : 5,"SWE" : 5};
    const CO2 ={"AUT": 7,"BEL" : 9,"BGR" : 5,"CYP" : 8,"CZE" : 10,"DEU" : 9,"DNK" : 6,"ESP" : 4,"EST" : 9,"FIN" : 4,"FRA" : 3,"GRC" : 6,"HRV" : 2,"HUN" : 4,"IRL" : 8,"ITA" : 5,"LTU" : 2,"LUX" : 10,"LVA" : 1,"MLT" : 2,"NLD" : 10,"POL" : 7,"PRT" : 3,"ROU" : 1,"SVK" : 6,"SVN" : 7,"SWE" : 0};
    const GDP ={"AUT": 8,"BEL" : 7,"BGR" : 0,"CYP" : 6,"CZE" : 4,"DEU" : 8,"DNK" : 10,"ESP" : 6,"EST" : 5,"FIN" : 9,"FRA" : 7,"GRC" : 2,"HRV" : 1,"HUN" : 2,"IRL" : 10,"ITA" : 7,"LTU" : 4,"LUX" : 10,"LVA" : 3,"MLT" : 6,"NLD" : 9,"POL" : 2,"PRT" : 4,"ROU" : 1,"SVK" : 3,"SVN" : 5,"SWE" : 9}
    const Happy ={"AUT": 9,"BEL" : 7,"BGR" : 0,"CYP" : 3,"CZE" : 7,"DEU" : 8,"DNK" : 10,"ESP" : 6,"EST" : 2,"FIN" : 10,"FRA" : 6,"GRC" : 1,"HRV" : 1,"HUN" : 2,"IRL" : 8,"ITA" : 6,"LTU" : 4,"LUX" : 9,"LVA" : 3,"MLT" : 7,"NLD" : 10,"POL" : 5,"PRT" : 2,"ROU" : 4,"SVK" : 5,"SVN" : 4,"SWE" : 9}
    const Land ={"AUT": 6,"BEL" : 2,"BGR" : 7,"CYP" : 1,"CZE" : 5,"DEU" : 9,"DNK" : 3,"ESP" : 10,"EST" : 3,"FIN" : 9,"FRA" : 10,"GRC" : 7,"HRV" : 6,"HUN" : 7,"IRL" : 5,"ITA" : 8,"LTU" : 4,"LUX" : 1,"LVA" : 4,"MLT" : 0,"NLD" : 2,"POL" : 9,"PRT" : 6,"ROU" : 8,"SVK" : 4,"SVN" : 2,"SWE" : 10}
    const Pop ={"AUT": 6,"BEL" : 8,"BGR" : 5,"CYP" : 1,"CZE" : 7,"DEU" : 10,"DNK" : 5,"ESP" : 9,"EST" : 2,"FIN" : 4,"FRA" : 10,"GRC" : 7,"HRV" : 3,"HUN" : 6,"IRL" : 4,"ITA" : 10,"LTU" : 3,"LUX" : 1,"LVA" : 2,"MLT" : 0,"NLD" : 8,"POL" : 9,"PRT" : 6,"ROU" : 9,"SVK" : 4,"SVN" : 2,"SWE" : 7}

    //number of slices of viz. n# key-value per array of variable.
    const listLen =Object.keys(avg).length; //length of the variable array. then serves the number of slices

    //creation indicator list to be able to loop
    const indicator_list = ["Europe","CO2", "GDP", "Happy", "Land", "Pop"];
    const indicator = params.indic// indicator_list[Math.floor(Math.random()*indicator_list.length)];

    //Creating empty array for country_id
    const indic_len = Object.keys(indicator_list).length;
    console.log("indic_len : ", indic_len)

    let country_ids = [];
    let new_id = 0
    console.log("country_ids : ", country_ids)

    let newIndic;
    if (indicator== "Europe"){
      console.log("indic avg : ", avg)
      newIndic = avg ;
    }
    else if (indicator== "CO2"){
      console.log("indic CO22 : ", CO2)
      newIndic = CO2 ;
    }
    else if  (indicator== "GDP"){
      console.log("indic GDP2: ", GDP)
      newIndic =GDP;
    }
    else if  (indicator== "Happy"){
      console.log("Happy2: ", Happy)
      newIndic =Happy;
    }
    else if  (indicator== "Land"){
      console.log("indic Land2: ", Land)
      newIndic =Land;
    }
    else if  (indicator== "Pop"){
      console.log("indic Pop2: ",  Pop)
      newIndic = Pop;
    }

    console.log("newIndic : ", newIndic)

    for (const [key, value] of Object.entries(newIndic)) {

    //incremental id
    new_id += 1;
    country_ids.push(new_id);
    const lastItem = country_ids[country_ids.length - 1];
    console.log("index lastiten incre : ", lastItem)

    //creating variables
    const country_name = `${key}`;
    const score_str = `${value}`;
    const score = parseInt(score_str)
    console.log("country name: ", country_name)
    console.log("score : ", score)

    //mapping score and bar length
    const rangeScore = math.mapRange(score, 1, 10, -200, -400) // map range (const to map, origin base, origin top, new base, new top)
    console.log("mapScore : ", rangeScore)
    const slice = degToRad(360/listLen);
    console.log("slice : ", slice)
    const angle = slice * (lastItem);
    console.log("angle : ", angle)


    //rotations and print
    x = cx + radius * Math.sin(angle);
    y = cy + radius * Math.cos(angle);

    const font_size = (params.score * 2.9) + "px"

    context.save();
    context.translate(x,y);
    context.rotate(-angle-2.8);
    context.fillStyle = "#E0C602" //"#E0C602"; //color of country name
    context.font = "30px Calibri";
    context.fillText( country_name , -161, 100)


    context.beginPath()
    context.moveTo( rangeScore, 100); //map 1 => -200 to 10 => -400
    context.lineTo(-192,99);
    context.lineCap ="round"; //[ 'round', 'square']
    context.strokeStyle = "#051B80";
    context.lineWidth = 20;
    context.stroke();
    context.restore()

    context.beginPath();
    context.strokeStyle = 'green';
    context.arc(540, 485, 335, 0, Math.PI * 2); //(x,y,radius,,startangle,endangle,counterclockwise);Set start angle to 0 and end angle to Math.PI*2
    context.stroke();
    context.restore()
      };

  //center the title
  const len_text = context.measureText(indicator).width;
  const x_center = width/2 - (len_text /2);
  context.fillStyle = "#2D3F3C";
  context.font = "60px futura";
  context.fillText(indicator, x_center, 1000);
  context.shadowBlur = 60;
    };
  };

const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "360_Europe"});
  folder.addInput(params, "indic", { options : { avg : "Europe", CO2 : "CO2", Land: "Land", Pop: "Pop", Happy: "Happy"}});
};

createPane();

canvasSketch(sketch, settings);
