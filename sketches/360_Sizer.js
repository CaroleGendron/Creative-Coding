
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
  Indicator: "Average", //set default value in the pane
  Alcohol: 5,
  Artists: 5,
  Babies: 5,
  Cancer: 5,
  Centenary: 5,
  Christian: 5,
  Crimes: 5,
  CuLITre_budget: 5,
  Death: 5,
  Depression: 5,
  Divorce: 5,
  Doctor: 5,
  Drug_use: 5,
  Family_size: 5,
  Female: 5,
  Left_behind: 5,
  Life_expectancy: 5,
  Marriage: 5,
  Obesity: 5,
  Population: 5,
  Prisoners: 5,
  Retired: 5,
  Smoker: 5,
  Student: 5,
  Suicide: 5,
  University: 5,
  Urban: 5,
  Vegetables: 5,
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
    const Select=  {"AUT" :  5,"HUN" :  5,"SVK" :  5,"CZE" :  5,"POL" :  5,"LIT" :  5,"LAT" :  5,"EST" :  5,"FIN" :  5,"SWE" :  5,"DAN" :  5,"GER" :  5,"LUX" :  5,"HOL" :  5,"BEL" :  5,"IRL" :  5,"FRA" :  5,"POR" :  5,"ESP" :  5,"ITA" :  5,"MAL" :  5,"GRE" :  5,"CYP" :  5,"BUL" :  5,"ROU" :  5,"HRV" :  5,"SLO" :  5}
    const CO2=  {"AUT" :  7,"HUN" :  4,"SVK" :  6,"CZE" :  10,"POL" :  7,"LIT" :  2,"LAT" :  1,"EST" :  9,"FIN" :  4,"SWE" :  1,"DAN" :  6,"GER" :  9,"LUX" :  10,"HOL" :  10,"BEL" :  9,"IRL" :  8,"FRA" :  3,"POR" :  3,"ESP" :  4,"ITA" :  5,"MAL" :  2,"GRE" :  6,"CYP" :  8,"BUL" :  5,"ROU" :  1,"HRV" :  2,"SLO" :  7}
    const GDP=  {"AUT" :  8,"HUN" :  2,"SVK" :  3,"CZE" :  4,"POL" :  2,"LIT" :  4,"LAT" :  3,"EST" :  5,"FIN" :  9,"SWE" :  9,"DAN" :  10,"GER" :  8,"LUX" :  10,"HOL" :  9,"BEL" :  7,"IRL" :  10,"FRA" :  7,"POR" :  4,"ESP" :  6,"ITA" :  7,"MAL" :  6,"GRE" :  2,"CYP" :  6,"BUL" :  1,"ROU" :  1,"HRV" :  1,"SLO" :  5}
    const Happy=  {"AUT" :  9,"HUN" :  2,"SVK" :  5,"CZE" :  7,"POL" :  5,"LIT" :  4,"LAT" :  3,"EST" :  2,"FIN" :  10,"SWE" :  9,"DAN" :  10,"GER" :  8,"LUX" :  9,"HOL" :  10,"BEL" :  7,"IRL" :  8,"FRA" :  6,"POR" :  2,"ESP" :  6,"ITA" :  6,"MAL" :  7,"GRE" :  1,"CYP" :  3,"BUL" :  1,"ROU" :  4,"HRV" :  1,"SLO" :  4}
    const Land=  {"AUT" :  6,"HUN" :  7,"SVK" :  4,"CZE" :  5,"POL" :  9,"LIT" :  4,"LAT" :  4,"EST" :  3,"FIN" :  9,"SWE" :  10,"DAN" :  3,"GER" :  9,"LUX" :  1,"HOL" :  2,"BEL" :  2,"IRL" :  5,"FRA" :  10,"POR" :  6,"ESP" :  10,"ITA" :  8,"MAL" :  1,"GRE" :  7,"CYP" :  1,"BUL" :  7,"ROU" :  8,"HRV" :  6,"SLO" :  2}
    const Population=  {"AUT" :  6,"HUN" :  6,"SVK" :  4,"CZE" :  7,"POL" :  9,"LIT" :  3,"LAT" :  2,"EST" :  2,"FIN" :  4,"SWE" :  7,"DAN" :  5,"GER" :  10,"LUX" :  1,"HOL" :  8,"BEL" :  8,"IRL" :  4,"FRA" :  10,"POR" :  6,"ESP" :  9,"ITA" :  10,"MAL" :  1,"GRE" :  7,"CYP" :  1,"BUL" :  5,"ROU" :  9,"HRV" :  3,"SLO" :  2}

    const Alcohol= {'AUT' :  7, 'HUN' :  5, 'SVK' :  5, 'CZE' :  10, 'POL' :  6, 'LIT' :  10, 'LAT' :  9, 'EST' :  2, 'FIN' :  4, 'SWE' :  1, 'DAN' :  3, 'GER' :  9, 'LUX' :  10, 'HOL' :  2, 'BEL' :  4, 'IRL' :  9, 'FRA' :  7, 'POR' :  7, 'ESP' :  8, 'ITA' :  0, 'MAL' :  1, 'GRE' :  3, 'CYP' :  4, 'BUL' :  8, 'ROU' :  6, 'HRV' :  2, 'SLO' :  6}
    const Artists= {'AUT' :  7, 'HUN' :  7, 'SVK' :  4, 'CZE' :  8, 'POL' :  9, 'LIT' :  3, 'LAT' :  2, 'EST' :  2, 'FIN' :  6, 'SWE' :  8, 'DAN' :  6, 'GER' :  10, 'LUX' :  1, 'HOL' :  9, 'BEL' :  7, 'IRL' :  4, 'FRA' :  10, 'POR' :  6, 'ESP' :  9, 'ITA' :  10, 'MAL' :  0, 'GRE' :  5, 'CYP' :  1, 'BUL' :  5, 'ROU' :  5, 'HRV' :  3, 'SLO' :  2}
    const Babies= {'AUT' :  4, 'HUN' :  5, 'SVK' :  9, 'CZE' :  8, 'POL' :  5, 'LIT' :  6, 'LAT' :  6, 'EST' :  10, 'FIN' :  2, 'SWE' :  10, 'DAN' :  9, 'GER' :  4, 'LUX' :  7, 'HOL' :  6, 'BEL' :  8, 'IRL' :  10, 'FRA' :  7, 'POR' :  2, 'ESP' :  1, 'ITA' :  0, 'MAL' :  2, 'GRE' :  1, 'CYP' :  9, 'BUL' :  3, 'ROU' :  7, 'HRV' :  3, 'SLO' :  4}
    const Cancer= {'AUT' :  3, 'HUN' :  10, 'SVK' :  3, 'CZE' :  6, 'POL' :  7, 'LIT' :  7, 'LAT' :  8, 'EST' :  4, 'FIN' :  2, 'SWE' :  2, 'DAN' :  9, 'GER' :  10, 'LUX' :  1, 'HOL' :  9, 'BEL' :  5, 'IRL' :  0, 'FRA' :  6, 'POR' :  7, 'ESP' :  4, 'ITA' :  9, 'MAL' :  1, 'GRE' :  8, 'CYP' :  2, 'BUL' :  5, 'ROU' :  4, 'HRV' :  10, 'SLO' :  6}
    const Centenary= {'AUT' :  5, 'HUN' :  0, 'SVK' :  0, 'CZE' :  0, 'POL' :  6, 'LIT' :  0, 'LAT' :  0, 'EST' :  0, 'FIN' :  7, 'SWE' :  8, 'DAN' :  7, 'GER' :  9, 'LUX' :  0, 'HOL' :  6, 'BEL' :  7, 'IRL' :  9, 'FRA' :  10, 'POR' :  8, 'ESP' :  10, 'ITA' :  9, 'MAL' :  0, 'GRE' :  10, 'CYP' :  0, 'BUL' :  0, 'ROU' :  5, 'HRV' :  0, 'SLO' :  0}
    const Christian= {'AUT' :  3, 'HUN' :  10, 'SVK' :  2, 'CZE' :  0, 'POL' :  7, 'LIT' :  3, 'LAT' : 0 , 'EST' :  10, 'FIN' :  10, 'SWE' :  7, 'DAN' :  9, 'GER' :  2, 'LUX' :  5, 'HOL' :  8, 'BEL' :  3, 'IRL' :  5, 'FRA' :  1, 'POR' :  8, 'ESP' :  8, 'ITA' :  7, 'MAL' :  9, 'GRE' :  9, 'CYP' :  4, 'BUL' :  5, 'ROU' :  6, 'HRV' :  5, 'SLO' :  1}
    const Crimes= {'AUT' :  8, 'HUN' :  6, 'SVK' :  2, 'CZE' :  4, 'POL' :  4, 'LIT' :  3, 'LAT' :  3, 'EST' :  5, 'FIN' :  10, 'SWE' :  10, 'DAN' :  9, 'GER' :  9, 'LUX' :  7, 'HOL' :  9, 'BEL' :  10, 'IRL' :  2, 'FRA' :  8, 'POR' :  5, 'ESP' :  7, 'ITA' :  7, 'MAL' :  4, 'GRE' :  6, 'CYP' :  0, 'BUL' :  2, 'ROU' :  1, 'HRV' :  1, 'SLO' :  6}
    const CuLITre_budget= {'AUT' :  9, 'HUN' :  1, 'SVK' :  5, 'CZE' :  3, 'POL' :  3, 'LIT' :  4, 'LAT' : 1 , 'EST' :  4, 'FIN' :  9, 'SWE' :  10, 'DAN' :  10, 'GER' :  10, 'LUX' :  8, 'HOL' :  8, 'BEL' :  8, 'IRL' :  7, 'FRA' :  7, 'POR' :  3, 'ESP' :  5, 'ITA' :  6, 'MAL' :  5, 'GRE' :  2, 'CYP' :  7, 'BUL' :  0, 'ROU' :  1, 'HRV' :  2, 'SLO' :  6}
    const Death= {'AUT' :  4, 'HUN' :  9, 'SVK' :  5, 'CZE' :  6, 'POL' :  7, 'LIT' :  10, 'LAT' :  10, 'EST' :  8, 'FIN' :  6, 'SWE' :  2, 'DAN' :  4, 'GER' :  8, 'LUX' :  1, 'HOL' :  2, 'BEL' :  4, 'IRL' :  0, 'FRA' :  2, 'POR' :  7, 'ESP' :  3, 'ITA' :  6, 'MAL' :  1, 'GRE' :  7, 'CYP' :  3, 'BUL' :  10, 'ROU' :  9, 'HRV' :  9, 'SLO' :  5}
    const Depression= {'AUT' :  5, 'HUN' :  4, 'SVK' :  1, 'CZE' :  1, 'POL' :  4, 'LIT' :  5, 'LAT' :  5, 'EST' :  7, 'FIN' :  6, 'SWE' :  10, 'DAN' :  7, 'GER' :  10, 'LUX' :  9, 'HOL' :  8, 'BEL' :  7, 'IRL' :  3, 'FRA' :  10, 'POR' :  8, 'ESP' :  3, 'ITA' :  2, 'MAL' :  9, 'GRE' :  0, 'CYP' : 0 , 'BUL' :  3, 'ROU' :  2, 'HRV' :  9, 'SLO' :  6}
    const Divorce= {'AUT' :  6, 'HUN' :  6, 'SVK' :  4, 'CZE' :  8, 'POL' :  4, 'LIT' :  10, 'LAT' :  10, 'EST' :  8, 'FIN' :  9, 'SWE' :  9, 'DAN' :  6, 'GER' :  6, 'LUX' :  10, 'HOL' :  4, 'BEL' :  7, 'IRL' :  0, 'FRA' :  8, 'POR' :  7, 'ESP' :  6, 'ITA' :  2, 'MAL' :  0, 'GRE' :  6, 'CYP' :  9, 'BUL' :  3, 'ROU' :  3, 'HRV' :  2, 'SLO' :  1}
    const Doctor= {'AUT' :  10, 'HUN' :  5, 'SVK' :  5, 'CZE' :  8, 'POL' :  1, 'LIT' :  10, 'LAT' :  4, 'EST' :  9, 'FIN' :  6, 'SWE' :  7, 'DAN' :  7, 'GER' :  9, 'LUX' :  2, 'HOL' :  6, 'BEL' :  3, 'IRL' :  4, 'FRA' :  4, 'POR' :  9, 'ESP' :  6, 'ITA' :  7, 'MAL' :  1, 'GRE' :  10, 'CYP' :  0, 'BUL' :  8, 'ROU' :  2, 'HRV' :  2, 'SLO' :  3}
    const Drug_use= {'AUT' :  6, 'HUN' :  1, 'SVK' :  1, 'CZE' :  3, 'POL' :  1, 'LIT' :  10, 'LAT' :  7, 'EST' :  10, 'FIN' :  10, 'SWE' :  9, 'DAN' :  9, 'GER' :  7, 'LUX' :  8, 'HOL' :  3, 'BEL' :  7, 'IRL' :  9, 'FRA' :  8, 'POR' :  4, 'ESP' :  4, 'ITA' :  2, 'MAL' :  4, 'GRE' :  5, 'CYP' :  6, 'BUL' :  2, 'ROU' :  5, 'HRV' :  5, 'SLO' :  2}
    const Family_size= {'AUT' :  4, 'HUN' :  7, 'SVK' :  10, 'CZE' :  7, 'POL' :  10, 'LIT' :  2, 'LAT' :  4, 'EST' :  2, 'FIN' :  2, 'SWE' :  1, 'DAN' :  2, 'GER' :  1, 'LUX' :  7, 'HOL' :  4, 'BEL' :  7, 'IRL' :  10, 'FRA' :  4, 'POR' :  8, 'ESP' :  8, 'ITA' :  7, 'MAL' :  8, 'GRE' :  7, 'CYP' :  10, 'BUL' :  7, 'ROU' :  10, 'HRV' :  10, 'SLO' :  7}
    const Female= {'AUT' :  7, 'HUN' :  5, 'SVK' :  5, 'CZE' :  6, 'POL' :  3, 'LIT' :  9, 'LAT' :  1, 'EST' :  8, 'FIN' :  7, 'SWE' :  8, 'DAN' :  9, 'GER' :  10, 'LUX' :  4, 'HOL' :  10, 'BEL' :  3, 'IRL' :  4, 'FRA' :  5, 'POR' :  9, 'ESP' :  2, 'ITA' :  1, 'MAL' :  3, 'GRE' :  1, 'CYP' :  10, 'BUL' :  6, 'ROU' :  2, 'HRV' :  1, 'SLO' :  7}
    const Left_behind= {'AUT' :  4, 'HUN' :  7, 'SVK' :  6, 'CZE' :  1, 'POL' :  4, 'LIT' :  7, 'LAT' :  1, 'EST' :  3, 'FIN' :  6, 'SWE' :  2, 'DAN' :  4, 'GER' :  2, 'LUX' :  3, 'HOL' :  1, 'BEL' :  6, 'IRL' :  9, 'FRA' :  8, 'POR' :  5, 'ESP' :  9, 'ITA' :  10, 'MAL' :  5, 'GRE' :  9, 'CYP' :  10, 'BUL' :  7, 'ROU' :  10, 'HRV' :  8, 'SLO' :  2}
    const Life_expectancy= {'AUT' :  7, 'HUN' :  2, 'SVK' :  2, 'CZE' :  4, 'POL' :  3, 'LIT' :  2, 'LAT' :  1, 'EST' :  4, 'FIN' :  7, 'SWE' :  9, 'DAN' :  5, 'GER' :  5, 'LUX' :  9, 'HOL' :  8, 'BEL' :  6, 'IRL' :  8, 'FRA' :  10, 'POR' :  6, 'ESP' :  10, 'ITA' :  10, 'MAL' :  9, 'GRE' :  7, 'CYP' :  4, 'BUL' :  1, 'ROU' :  1, 'HRV' :  3, 'SLO' :  6}
    const Marriage= {'AUT' :  7, 'HUN' :  10, 'SVK' :  9, 'CZE' :  7, 'POL' :  6, 'LIT' :  10, 'LAT' :  10, 'EST' :  7, 'FIN' :  4, 'SWE' :  5, 'DAN' :  8, 'GER' :  7, 'LUX' :  2, 'HOL' :  3, 'BEL' :  3, 'IRL' :  4, 'FRA' :  3, 'POR' :  1, 'ESP' :  2, 'ITA' :  1, 'MAL' :  8, 'GRE' :  5, 'CYP' :  10, 'BUL' :  4, 'ROU' :  9, 'HRV' :  6, 'SLO' :  1}
    const Obesity= {'AUT' :  2, 'HUN' :  5, 'SVK' :  4, 'CZE' :  7, 'POL' :  3, 'LIT' :  2, 'LAT' :  3, 'EST' :  7, 'FIN' :  1, 'SWE' :  8, 'DAN' :  10, 'GER' :  4, 'LUX' :  9, 'HOL' :  1, 'BEL' :  1, 'IRL' :  10, 'FRA' :  3, 'POR' :  6, 'ESP' :  7, 'ITA' :  5, 'MAL' :  10, 'GRE' :  8, 'CYP' : 1 , 'BUL' :  9, 'ROU' :  5, 'HRV' :  6, 'SLO' :  9}
    // const Population= {'AUT' :  6, 'HUN' :  6, 'SVK' :  4, 'CZE' :  7, 'POL' :  9, 'LIT' :  3, 'LAT' :  2, 'EST' :  2, 'FIN' :  4, 'SWE' :  7, 'DAN' :  5, 'GER' :  10, 'LUX' :  1, 'HOL' :  8, 'BEL' :  8, 'IRL' :  4, 'FRA' :  10, 'POR' :  6, 'ESP' :  9, 'ITA' :  10, 'MAL' :  1, 'GRE' :  7, 'CYP' :  1, 'BUL' :  5, 'ROU' :  9, 'HRV' :  3, 'SLO' :  2}
    const Prisoners= {'AUT' :  5, 'HUN' :  8, 'SVK' :  7, 'CZE' :  9, 'POL' :  9, 'LIT' :  10, 'LAT' :  10, 'EST' :  10, 'FIN' :  1, 'SWE' :  2, 'DAN' :  1, 'GER' :  4, 'LUX' :  6, 'HOL' :  4, 'BEL' :  4, 'IRL' :  2, 'FRA' :  5, 'POR' :  7, 'ESP' :  7, 'ITA' :  3, 'MAL' :  3, 'GRE' :  6, 'CYP' :  2, 'BUL' :  9, 'ROU' :  8, 'HRV' :  6, 'SLO' :  1}
    const Retired= {'AUT' :  3, 'HUN' :  5, 'SVK' :  1, 'CZE' :  6, 'POL' :  2, 'LIT' :  5, 'LAT' :  8, 'EST' :  7, 'FIN' :  10, 'SWE' :  6, 'DAN' :  5, 'GER' :  9, 'LUX' :  1, 'HOL' :  4, 'BEL' :  2, 'IRL' :  1, 'FRA' :  7, 'POR' :  9, 'ESP' :  4, 'ITA' :  10, 'MAL' :  3, 'GRE' :  10, 'CYP' : 1 , 'BUL' :  9, 'ROU' :  3, 'HRV' :  8, 'SLO' :  7}
    const Smoker= {'AUT' :  7, 'HUN' :  8, 'SVK' :  9, 'CZE' :  8, 'POL' :  5, 'LIT' :  5, 'LAT' :  9, 'EST' :  7, 'FIN' :  1, 'SWE' :  5, 'DAN' :  1, 'GER' :  7, 'LUX' :  1, 'HOL' :  3, 'BEL' :  3, 'IRL' :  2, 'FRA' :  9, 'POR' :  6, 'ESP' :  6, 'ITA' :  3, 'MAL' :  4, 'GRE' :  10, 'CYP' :  1, 'BUL' :  10, 'ROU' :  4, 'HRV' :  10, 'SLO' :  2}
    const Student= {'AUT' :  6, 'HUN' :  6, 'SVK' :  4, 'CZE' :  1, 'POL' :  3, 'LIT' :  4, 'LAT' :  1, 'EST' :  2, 'FIN' :  7, 'SWE' :  8, 'DAN' :  10, 'GER' :  4, 'LUX' :  9, 'HOL' :  9, 'BEL' :  8, 'IRL' :  10, 'FRA' :  9, 'POR' :  6, 'ESP' :  3, 'ITA' :  2, 'MAL' :  7, 'GRE' :  5, 'CYP' :  10, 'BUL' :  1, 'ROU' :  5, 'HRV' :  7, 'SLO' :  2}
    const Suicide= {'AUT' :  7, 'HUN' :  10, 'SVK' :  4, 'CZE' :  6, 'POL' :  9, 'LIT' :  10, 'LAT' :  10, 'EST' :  7, 'FIN' :  7, 'SWE' :  5, 'DAN' :  4, 'GER' :  6, 'LUX' :  3, 'HOL' :  3, 'BEL' :  9, 'IRL' :  2, 'FRA' :  8, 'POR' :  5, 'ESP' :  2, 'ITA' :  1, 'MAL' :  1, 'GRE' :  1, 'CYP' :  2, 'BUL' :  6, 'ROU' :  4, 'HRV' :  8, 'SLO' :  9}
    const University= {'AUT' :  4, 'HUN' :  2, 'SVK' :  7, 'CZE' :  3, 'POL' :  9, 'LIT' :  10, 'LAT' : 1 , 'EST' :  8, 'FIN' :  7, 'SWE' :  9, 'DAN' :  6, 'GER' :  1, 'LUX' :  10, 'HOL' :  7, 'BEL' :  6, 'IRL' :  9, 'FRA' :  5, 'POR' :  3, 'ESP' :  5, 'ITA' :  1, 'MAL' :  8, 'GRE' :  4, 'CYP' :  10, 'BUL' :  2, 'ROU' :  1, 'HRV' :  3, 'SLO' :  5}
    const Urban= {'AUT' : 1 , 'HUN' :  7, 'SVK' :  1, 'CZE' :  5, 'POL' :  3, 'LIT' :  4, 'LAT' :  6, 'EST' :  7, 'FIN' :  8, 'SWE' :  1, 'DAN' : 1 , 'GER' : 1 , 'LUX' : 1 , 'HOL' :  6, 'BEL' :  10, 'IRL' :  4, 'FRA' :  9, 'POR' : 1 , 'ESP' :  1, 'ITA' : 1 , 'MAL' :  10, 'GRE' :  1, 'CYP' : 1 , 'BUL' :  9, 'ROU' :  2, 'HRV' : 1 , 'SLO' :  2}
    const Vegetables= {'AUT' :  4, 'HUN' :  4, 'SVK' :  5, 'CZE' :  3, 'POL' :  2, 'LIT' :  8, 'LAT' :  9, 'EST' :  9, 'FIN' :  7, 'SWE' :  3, 'DAN' :  7, 'GER' :  1, 'LUX' :  10, 'HOL' :  2, 'BEL' :  5, 'IRL' :  7, 'FRA' :  1, 'POR' :  6, 'ESP' :  2, 'ITA' :  1, 'MAL' :  10, 'GRE' :  6, 'CYP' :  10, 'BUL' :  5, 'ROU' :  4, 'HRV' :  9, 'SLO' :  8}

    //number of slices of viz. n# key-value per array of variable.
    const listLen =Object.keys(Select).length; //length of the variable array. then serves the number of slices

    //creation indicator list to be able to loop
    // const indicator_list = ["Europe","CO2", "GDP", "Happy", "Land", "Population"];
    const indicator_list = ["Europe","CO2", "GDP", "Happy", "Land",'Alcohol', 'Artists', 'Babies', 'Cancer', 'Centenary',  'Crimes', 'Culture_budget', 'Death', 'Depression', 'Divorce', 'Doctor', 'Drug_use', 'Family_size', 'Female', 'Left_behind', 'Life_expectancy', 'Marriage', 'Obesity', 'Population', 'Prisoners', 'Retired', 'Smoker', 'Student', 'Suicide', 'University', 'Urban', 'Vegetables', ];
    const indicator = params.Indicator// indicator_list[Math.floor(Math.random()*indicator_list.length)];

    //Creating empty array for country_id
    const indic_len = Object.keys(indicator_list).length;
    console.log("indic_len : ", indic_len)

    let country_ids = [];
    let new_id = 0
    console.log("country_ids : ", country_ids)

    let newIndic;
    console.log("params.indic::", params.Indicator)

    if (indicator== "Europe"){
      newIndic = Select ;
    }
    else if (indicator== "CO2"){
      newIndic = CO2 ;
    }
    else if  (indicator== "GDP"){
      newIndic =GDP;
    }
    else if  (indicator== "Happy"){
      newIndic =Happy;
    }
    else if  (indicator== "Land"){
      newIndic =Land;
    }
    else if  (indicator== "Alcohol"){
      newIndic = Alcohol;
    }
    else if  (indicator== "Alcohol"){
      newIndic = Alcohol;
    }
    else if  (indicator== "Artists"){
      newIndic = Artists;
    }
    else if  (indicator== "Babies"){
      newIndic = Babies;
    }
    else if  (indicator== "Cancer"){
      newIndic = Cancer;
    }
    else if  (indicator== "Centenary"){
      newIndic = Centenary;
    }
    else if  (indicator== "Crimes"){
      newIndic = Crimes;
    }
    else if  (indicator== "CuLITre_budget"){
      newIndic = CuLITre_budget;
    }
    else if  (indicator== "Death"){
      newIndic = Death;
    }
    else if  (indicator== "Depression"){
      newIndic = Depression;
    }
    else if  (indicator== "Divorce"){
      newIndic = Divorce;
    }
    else if  (indicator== "Doctor"){
      newIndic = Doctor;
    }
    else if  (indicator== "Drug_use"){
      newIndic = Drug_use;
    }
    else if  (indicator== "Family_size"){
      newIndic = Family_size;
    }
    else if  (indicator== "Female"){
      newIndic = Female;
    }
    else if  (indicator== "Left_behind"){
      newIndic = Left_behind;
    }
    else if  (indicator== "Life_expectancy"){
      newIndic = Life_expectancy;
    }
    else if  (indicator== "Marriage"){
      newIndic = Marriage;
    }
    else if  (indicator== "Obesity"){
      newIndic = Obesity;
    }
    else if  (indicator== "Prisoners"){
      newIndic = Prisoners;
    }
    else if  (indicator== "Population"){
      newIndic = Population;
    }
    else if  (indicator== "Retired"){
      newIndic = Retired;
    }
    else if  (indicator== "Smoker"){
      newIndic = Smoker;
    }
    else if  (indicator== "Student"){
      newIndic = Student;
    }
    else if  (indicator== "Suicide"){
      newIndic = Suicide;
    }
    else if  (indicator== "University"){
      newIndic = University;
    }
    else if  (indicator== "Urban"){
      newIndic = Urban;
    }
    else if  (indicator== "Vegetables"){
      newIndic = Vegetables;
    }

    context.beginPath();
    context.strokeStyle = 'green';
    context.arc(540, 485, 335, 0, Math.PI * 2); //(x,y,radius,,startangle,endangle,counterclockwise);Set start angle to 0 and end angle to Math.PI*2
    context.stroke();
    context.restore();


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

  folder = pane.addFolder({ title : "The_Helicopter view of Europe"});
  folder.addInput(params, "Indicator", { options : { Select : "Europe", CO2 : "CO2", Land: "Land", Population: "Population", Happy: "Happy",Alcohol:'Alcohol',Artists: 'Artists',Babies: 'Babies',Cancer: 'Cancer', Centenary:'Centenary',Crimes: 'Crimes', CuLITre_budget:'CuLITre_budget', Death: 'Death', Depression:'Depression',Divorce: 'Divorce', Doctor:'Doctor',Drug_use: 'Drug_use', Family_size:'Family_size',Female : 'Female',Left_behind: 'Left_behind', Life_expectancy:'Life_expectancy', Marriage:'Marriage', Obesity:'Obesity', Population:'Population', Prisoners:'Prisoners', Retired: 'Retired', Smoker:'Smoker', Student:'Student', Suicide: 'Suicide', University: 'University', Urban:'Urban',Vegetables: 'Vegetables'}});
};

createPane();

canvasSketch(sketch, settings);
