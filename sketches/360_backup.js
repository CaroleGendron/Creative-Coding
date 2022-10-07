//TODO : dynamic result per indicators /  per country
// 'use strict';
const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math'); //to map values




const settings = {
  dimensions: [ 1080, 1080 ],
};

const sketch = () => {
  return ({ context, width, height }) => {

    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);
    context.fillStyle = 'black';

    const degToRad = (degrees) => {
      return degrees / 180 * Math.PI;
    };

    const cx = width * 0.5;
    const cy = height * 0.45;
    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;

    const radius = width * 0.1;

    // const indicator = {'FRA': 3, 'NLD': 6, 'ESP' : 4, 'USA': 9, 'IND': 2, 'SAF' : 2, 'UKI': 7, 'RUS': 6, 'CHI' : 4,'JAP': 3, 'IDI': 6, 'BRA' : 4};
    const CO2 ={"AUT": 7,"BEL" : 9,"BGR" : 5,"CYP" : 8,"CZE" : 10,"DEU" : 9,"DNK" : 6,"ESP" : 4,"EST" : 9,"FIN" : 4,"FRA" : 3,"GRC" : 6,"HRV" : 2,"HUN" : 4,"IRL" : 8,"ITA" : 5,"LTU" : 2,"LUX" : 10,"LVA" : 1,"MLT" : 2,"NLD" : 10,"POL" : 7,"PRT" : 3,"ROU" : 1,"SVK" : 6,"SVN" : 7,"SWE" : 0};
    const GDP ={"AUT": 8,"BEL" : 7,"BGR" : 0,"CYP" : 6,"CZE" : 4,"DEU" : 8,"DNK" : 10,"ESP" : 6,"EST" : 5,"FIN" : 9,"FRA" : 7,"GRC" : 2,"HRV" : 1,"HUN" : 2,"IRL" : 10,"ITA" : 7,"LTU" : 4,"LUX" : 10,"LVA" : 3,"MLT" : 6,"NLD" : 9,"POL" : 2,"PRT" : 4,"ROU" : 1,"SVK" : 3,"SVN" : 5,"SWE" : 9}
    const Happy ={"AUT": 9,"BEL" : 7,"BGR" : 0,"CYP" : 3,"CZE" : 7,"DEU" : 8,"DNK" : 10,"ESP" : 6,"EST" : 2,"FIN" : 10,"FRA" : 6,"GRC" : 1,"HRV" : 1,"HUN" : 2,"IRL" : 8,"ITA" : 6,"LTU" : 4,"LUX" : 9,"LVA" : 3,"MLT" : 7,"NLD" : 10,"POL" : 5,"PRT" : 2,"ROU" : 4,"SVK" : 5,"SVN" : 4,"SWE" : 9}
    const Land ={"AUT": 6,"BEL" : 2,"BGR" : 7,"CYP" : 1,"CZE" : 5,"DEU" : 9,"DNK" : 3,"ESP" : 10,"EST" : 3,"FIN" : 9,"FRA" : 10,"GRC" : 7,"HRV" : 6,"HUN" : 7,"IRL" : 5,"ITA" : 8,"LTU" : 4,"LUX" : 1,"LVA" : 4,"MLT" : 0,"NLD" : 2,"POL" : 9,"PRT" : 6,"ROU" : 8,"SVK" : 4,"SVN" : 2,"SWE" : 10}
    const Pop ={"AUT": 6,"BEL" : 8,"BGR" : 5,"CYP" : 1,"CZE" : 7,"DEU" : 10,"DNK" : 5,"ESP" : 9,"EST" : 2,"FIN" : 4,"FRA" : 10,"GRC" : 7,"HRV" : 3,"HUN" : 6,"IRL" : 4,"ITA" : 10,"LTU" : 3,"LUX" : 1,"LVA" : 2,"MLT" : 0,"NLD" : 8,"POL" : 9,"PRT" : 6,"ROU" : 9,"SVK" : 4,"SVN" : 2,"SWE" : 7}

    const listLen =Object.keys(Pop).length;
    console.log("listLen : ", listLen);
    console.log("listLentype : ", typeof listLen)

    const indicator_list = ["CO2", "GDP", "Happy", "Land", "Pop"];
    const indicator = indicator_list[Math.floor(Math.random()*indicator_list.length)];
    console.log("indic : ", indicator)


    //Creating empty array for country_id
    const indic_len = Object.keys(indicator_list).length;
    console.log("indic_len : ", indic_len)

    let country_ids = [];
    let new_id = 0
    console.log("country_ids : ", country_ids)

    let newIndic;
    if (indicator== "CO2"){
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

    const rangeScore = math.mapRange(score, 1, 10, -200, -400) // map range (const to map, origin base, origin top, new base, new top)
    console.log("mapScore : ", rangeScore)
    const slice = degToRad(360/listLen);
    console.log("slice : ", slice)
    const angle = slice * (lastItem);
    console.log("angle : ", angle)



    if (score > 5){
      color =  "#CE2921"; // "#28604F" ; //"#7D011B";

    }
    else{
    color = "#01583D" // "#951734"; //#016050";
    }

    //rotations and print
    x = cx + radius * Math.sin(angle);
    y = cy + radius * Math.cos(angle);

    const font_size = (score * 2.9) + "px"

    context.save();
    context.translate(x,y);
    context.rotate(-angle-2.8);
    context.fillStyle = "grey";
    context.font = "30px Calibri";
    context.fillText( country_name , -161, 100)

    context.beginPath()
    context.moveTo( rangeScore, 100); //map 1 => -200 to 10 => -400
    context.lineTo(-192,99);
    context.lineCap ="round"; //[ 'round', 'square']
    context.strokeStyle = color;
    context.lineWidth = 20;
    context.stroke();
    context.restore()
      };

  context.fillStyle = "#2D3F3C";
  context.font = "60px futura";
  context.fillText(indicator + " per Capita", width/4, 1020);
  context.shadowBlur = 60;

    };

  };

canvasSketch(sketch, settings);

//----------//-----------

// //TODO : dynamic result per indicators /  per country
// // 'use strict';
// const canvasSketch = require('canvas-sketch');
// const math = require('canvas-sketch-util/math'); //to map values


// const settings = {
//   dimensions: [ 1080, 1080 ],

// };

// const sketch = () => {
//   return ({ context, width, height }) => {

//     context.fillStyle = '#F6F3E1';
//     context.fillRect(0, 0, width, height);
//     context.fillStyle = 'black';

//     const degToRad = (degrees) => {
//       return degrees / 180 * Math.PI;
//     };

//     const cx = width * 0.5;
//     const cy = height * 0.45;
//     const w = width * 0.01;
//     const h = height * 0.1;
//     let x,y;

//     const radius = width * 0.1;

//     // const indicator = {'FRA': 3, 'NLD': 6, 'ESP' : 4, 'USA': 9, 'IND': 2, 'SAF' : 2, 'UKI': 7, 'RUS': 6, 'CHI' : 4,'JAP': 3, 'IDI': 6, 'BRA' : 4};
//     const CO2 ={"AUT": 7,"BEL" : 9,"BGR" : 5,"CYP" : 8,"CZE" : 10,"DEU" : 9,"DNK" : 6,"ESP" : 4,"EST" : 9,"FIN" : 4,"FRA" : 3,"GRC" : 6,"HRV" : 2,"HUN" : 4,"IRL" : 8,"ITA" : 5,"LTU" : 2,"LUX" : 10,"LVA" : 1,"MLT" : 2,"NLD" : 10,"POL" : 7,"PRT" : 3,"ROU" : 1,"SVK" : 6,"SVN" : 7,"SWE" : 0};
//     const GDP ={"AUT": 8,"BEL" : 7,"BGR" : 0,"CYP" : 6,"CZE" : 4,"DEU" : 8,"DNK" : 10,"ESP" : 6,"EST" : 5,"FIN" : 9,"FRA" : 7,"GRC" : 2,"HRV" : 1,"HUN" : 2,"IRL" : 10,"ITA" : 7,"LTU" : 4,"LUX" : 10,"LVA" : 3,"MLT" : 6,"NLD" : 9,"POL" : 2,"PRT" : 4,"ROU" : 1,"SVK" : 3,"SVN" : 5,"SWE" : 9}
//     const Happy ={"AUT": 9,"BEL" : 7,"BGR" : 0,"CYP" : 3,"CZE" : 7,"DEU" : 8,"DNK" : 10,"ESP" : 6,"EST" : 2,"FIN" : 10,"FRA" : 6,"GRC" : 1,"HRV" : 1,"HUN" : 2,"IRL" : 8,"ITA" : 6,"LTU" : 4,"LUX" : 9,"LVA" : 3,"MLT" : 7,"NLD" : 10,"POL" : 5,"PRT" : 2,"ROU" : 4,"SVK" : 5,"SVN" : 4,"SWE" : 9}
//     const Land ={"AUT": 6,"BEL" : 2,"BGR" : 7,"CYP" : 1,"CZE" : 5,"DEU" : 9,"DNK" : 3,"ESP" : 10,"EST" : 3,"FIN" : 9,"FRA" : 10,"GRC" : 7,"HRV" : 6,"HUN" : 7,"IRL" : 5,"ITA" : 8,"LTU" : 4,"LUX" : 1,"LVA" : 4,"MLT" : 0,"NLD" : 2,"POL" : 9,"PRT" : 6,"ROU" : 8,"SVK" : 4,"SVN" : 2,"SWE" : 10}
//     const Pop ={"AUT": 6,"BEL" : 8,"BGR" : 5,"CYP" : 1,"CZE" : 7,"DEU" : 10,"DNK" : 5,"ESP" : 9,"EST" : 2,"FIN" : 4,"FRA" : 10,"GRC" : 7,"HRV" : 3,"HUN" : 6,"IRL" : 4,"ITA" : 10,"LTU" : 3,"LUX" : 1,"LVA" : 2,"MLT" : 0,"NLD" : 8,"POL" : 9,"PRT" : 6,"ROU" : 9,"SVK" : 4,"SVN" : 2,"SWE" : 7}



//     //Creating empty array for country_id
//     const indic_len = Object.keys(CO2).length;
//     let country_ids = [];
//     let new_id = 0

//     for (const [key, value] of Object.entries(CO2)) {

//     //incremental id
//     new_id += 1;
//     country_ids.push(new_id);
//     const lastItem = country_ids[country_ids.length - 1];

//     const country_name = `${key}`;
//     const score_str = `${value}`;
//     const score = parseInt(score_str)
//     const rangeScore = math.mapRange(score, 1, 10, -200, -400) // map range (const to map, origin base, origin top, new base, new top)
//     const slice = degToRad(360/indic_len);
//     const angle = slice * (lastItem);

//     if (score > 5){
//       color =  "#CE2921"; // "#28604F" ; //"#7D011B";

//     }
//     else{
//     color = "#01583D" // "#951734"; //#016050";
//     }

//     //rotations and print
//     x = cx + radius * Math.sin(angle);
//     y = cy + radius * Math.cos(angle);

//     const font_size = (score * 2.9) + "px"

//     context.save();
//     context.translate(x,y);
//     context.rotate(-angle-2.8);
//     context.fillStyle = "grey";
//     context.font = "30px Calibri";
//     context.fillText( country_name , -161, 100)

  //   context.beginPath()
  //   context.moveTo( rangeScore, 100); //map 1 => -200 to 10 => -400
  //   context.lineTo(-192,99);
  //   context.lineCap ="round"; //[ 'round', 'square']
  //   context.strokeStyle = color;
  //   context.lineWidth = 20;
  //   context.stroke();
  //   context.restore()

  //     };

  // context.fillStyle = "#2D3F3C";
  // context.font = "60px futura";
  // context.fillText("CO2 per EU citizen", width/4, 1020);
  // context.shadowBlur = 60;


  //   };
  // };


// canvasSketch(sketch, settings);


// //TODO : dynamic result per indicators /  per country
// // 'use strict';
// const canvasSketch = require('canvas-sketch');


// const settings = {
//   dimensions: [ 1080, 1080 ]
// };

// const sketch = () => {
//   return ({ context, width, height }) => {

//     context.fillStyle = '#F6F3E1';
//     context.fillRect(0, 0, width, height);

//     context.fillStyle = 'black';

//     const degToRad = (degrees) => {
//       return degrees / 180 * Math.PI;
//     };

//     const cx = width * 0.5;
//     const cy = height * 0.45;
//     const w = width * 0.01;
//     const h = height * 0.1;
//     let x,y;

//     const radius = width * 0.12;

//     // const indicator = {'FRA': 3, 'NLD': 6, 'ESP' : 4, 'USA': 9, 'IND': 2, 'SAF' : 2, 'UKI': 7, 'RUS': 6, 'CHI' : 4,'JAP': 3, 'IDI': 6, 'BRA' : 4};
//     const CO2 ={"AUT": 7,"BEL" : 9,"BGR" : 5,"CYP" : 8,"CZE" : 10,"DEU" : 9,"DNK" : 6,"ESP" : 4,"EST" : 9,"FIN" : 4,"FRA" : 3,"GRC" : 6,"HRV" : 2,"HUN" : 4,"IRL" : 8,"ITA" : 5,"LTU" : 2,"LUX" : 10,"LVA" : 1,"MLT" : 2,"NLD" : 10,"POL" : 7,"PRT" : 3,"ROU" : 1,"SVK" : 6,"SVN" : 7,"SWE" : 0}
//     const GDP ={"AUT": 8,"BEL" : 7,"BGR" : 0,"CYP" : 6,"CZE" : 4,"DEU" : 8,"DNK" : 10,"ESP" : 6,"EST" : 5,"FIN" : 9,"FRA" : 7,"GRC" : 2,"HRV" : 1,"HUN" : 2,"IRL" : 10,"ITA" : 7,"LTU" : 4,"LUX" : 10,"LVA" : 3,"MLT" : 6,"NLD" : 9,"POL" : 2,"PRT" : 4,"ROU" : 1,"SVK" : 3,"SVN" : 5,"SWE" : 9}
//     const Happy ={"AUT": 9,"BEL" : 7,"BGR" : 0,"CYP" : 3,"CZE" : 7,"DEU" : 8,"DNK" : 10,"ESP" : 6,"EST" : 2,"FIN" : 10,"FRA" : 6,"GRC" : 1,"HRV" : 1,"HUN" : 2,"IRL" : 8,"ITA" : 6,"LTU" : 4,"LUX" : 9,"LVA" : 3,"MLT" : 7,"NLD" : 10,"POL" : 5,"PRT" : 2,"ROU" : 4,"SVK" : 5,"SVN" : 4,"SWE" : 9}
//     const Land ={"AUT": 6,"BEL" : 2,"BGR" : 7,"CYP" : 1,"CZE" : 5,"DEU" : 9,"DNK" : 3,"ESP" : 10,"EST" : 3,"FIN" : 9,"FRA" : 10,"GRC" : 7,"HRV" : 6,"HUN" : 7,"IRL" : 5,"ITA" : 8,"LTU" : 4,"LUX" : 1,"LVA" : 4,"MLT" : 0,"NLD" : 2,"POL" : 9,"PRT" : 6,"ROU" : 8,"SVK" : 4,"SVN" : 2,"SWE" : 10}
//     const Pop ={"AUT": 6,"BEL" : 8,"BGR" : 5,"CYP" : 1,"CZE" : 7,"DEU" : 10,"DNK" : 5,"ESP" : 9,"EST" : 2,"FIN" : 4,"FRA" : 10,"GRC" : 7,"HRV" : 3,"HUN" : 6,"IRL" : 4,"ITA" : 10,"LTU" : 3,"LUX" : 1,"LVA" : 2,"MLT" : 0,"NLD" : 8,"POL" : 9,"PRT" : 6,"ROU" : 9,"SVK" : 4,"SVN" : 2,"SWE" : 7}
//     const indic_len = Object.keys(CO2).length;

//     //Creating empty array for country_id
//     let country_ids = [];
//     let new_id = 0

//   for (const [key, value] of Object.entries(CO2)) {

//     //incremental id
//     new_id += 1;
//     country_ids.push(new_id);
//     const lastItem = country_ids[country_ids.length - 1];
//     console.log( "lastItem",  lastItem);



//     const country_name = `${key}`;
//     const score_str = `${value}`;
//     const score = parseInt(score_str)
//     const slice = degToRad(360/indic_len);

//     const dash = '-';
//     const lines = `${dash.repeat(score * 2.8)}`

//     const angle = slice * (lastItem);

//     if (score < 5){
//        color = "#016050";
//     }
//     else{
//       color = "#7D011B";
//    }
//     //rotations and print
//     x = cx + radius * Math.sin(angle);
//     y = cy + radius * Math.cos(angle);

//     const font_size = (score * 3) + "px"


//     context.save();
//     context.translate(x,y);
//     context.rotate(-angle +7.7);
//     context.fillStyle = color;
//     context.font = "30px Arial";

//     context.fillText( country_name , 0, 0)
//     const font = String(`${font_size} Arial`);
//     context.font = font;
//     context.fillText(lines, 70, 0);
//     context.restore()
//       };

//   context.fillStyle = 'grey';
//   context.font = "60px futura";
//   context.fillText("CO2 per EU citizen", width/4, 1020);


//     };
//   };


// canvasSketch(sketch, settings);
