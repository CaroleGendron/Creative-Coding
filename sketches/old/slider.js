//TODO : change ''population' for 'community'
const Tweakpane = require('tweakpane');
const math = require("canvas-sketch-util/math") //for mapRange


const params= {
  Population: "in million people" , //'community' //density lines
  Land: "in million Km2", //'people look the same/int'//width
  Age: "in years", //greyscale color
  Happiness: "ratio from 1 to 10", //neat-blur
  CO2: "in tons per person", //blue
  title: 'give a name',
}
const createPane = () => {
  const pane = new Tweakpane.Pane(); //create a new slider pane
  let folder;

  folder = pane.addFolder({ title : "About the indicators >>",  expanded: false,});

  folder.addInput(params, 'CO2', { min: 0, max: 15 });
  folder.addInput(params, 'Population', { min: 150, max: 1400 });
  folder.addInput(params, 'Land', { min: 3, max: 29 });
  folder.addInput(params, 'Age', { min: 20.4, max: 43 });
  folder.addInput(params, 'Happiness', { min: 3.8, max: 7 });
  folder.addInput(params, 'title');


};

createPane();
