// --------------------------
// IMPORTS
// --------------------------

// We're using CommonJS require statements to bring in necessary libraries
const canvasSketch = require('canvas-sketch');
const math = require("canvas-sketch-util/math");
// const Tweakpane = require('tweakpane');

// --------------------------
// MAKE SOME VARIABLES
// --------------------------

let audio;
let audioContext;
let analyser;
let dataArray;
let started = false;

// --------------------------
// AUDIO SETUP
// --------------------------

// This function sets up the audio element, connects it to an analyzer,
// and prepares a data array for audio visualization.
const setupAudio = () => {
  // Create a new audio element and set its source
  audio = document.createElement('audio');
  audio.src = "media/Keys.mp3";

  // Create a new audio context and a media source for our audio element
  audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const source = audioContext.createMediaElementSource(audio);
  analyser = audioContext.createAnalyser();
  // Connect the media source to the analyzer and then connect the analyzer to the audio context destination
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  // Set the FFT size for the analyzer and create a new data array based on its frequency bin count
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);
};

// This function calculates the average amplitude from the current audio data
const getCurrentAmplitude = () => {
  analyser.getByteTimeDomainData(dataArray);
  let values = 0;
  let average;
  const length = dataArray.length;

  for (let i = 0; i < length; i++) {
    values += dataArray[i];
  }

  average = values / length;
  return average;
};

// Default values for Tweakpane sliders
const params = {
  Lines: 10,
  Spread: 10,
  Shape: 10,
  Texture: 10,
  Color: '#ff5c00',
};

const settings = {
  dimensions: [ 2048, 2048 ],
  animate: true,
  fps: 24,
  duration: 10,
  context: '2d',
};


// The main sketch function that gets executed to render each frame
const sketch = () => {
  return ({ context, width, height, time }) => {
    // Background color fill
    context.fillStyle = '#F6F3E1';
    context.fillRect(0, 0, width, height);

    // If audio is playing, adjust the Shape parameter based on amplitude
    if (started && !audio.paused) {
      const amplitude = getCurrentAmplitude();
      params.Shape = math.mapRange(amplitude, 128, 150, 1, 10);
    }

    // Drawing logic for the animation

    // Calculate center and scale based on Shape parameter
    const cx = width / 2;
    const cy = height * 0.45;
    const scaleShape = math.mapRange(params.Shape * 1.5, 1, 10, 0.1, 1);
    const radius = width * scaleShape / 4;

    // Loop through and draw each line based on the Lines parameter
    for (let i = 0; i < params.Lines; i++) {
      const slice = (360 / params.Lines) * (Math.PI / 180);
      const angle = slice * i;

      const x = cx + radius * Math.sin(angle);
      const y = cy + radius * Math.cos(angle);

      context.save();
      context.translate(x, y);
      context.rotate(angle);

      // Drawing a rectangle for each line
      context.beginPath();
      context.rect(-params.Spread / 4, -params.Spread / 4, params.Spread, params.Spread);
      context.fillStyle = params.Color;
      context.fill();
      context.restore();

      // Applying shadow to the rectangle
      context.shadowOffsetX = 10;
      context.shadowOffsetY = 10;
      context.shadowBlur = params.Texture * 10;
    }

    // Drawing the footer text

    // Function to center text on the X-axis
    const centerX = (text) => {
      const metrics = context.measureText(text);
      const textWidth = metrics.width;
      return (width / 2) - (textWidth / 2)
    };

    // Title line1 and center
    const title = "Me";
    context.fillStyle = '#313131';
    context.font = "190px futura";
    const titleCenter = centerX(title);
    context.fillText(title, titleCenter, 950);

    // Title line2 and center
    const subtitle = "by Data-Scapes Atelier";
    context.font = "italic 30px futura";
    const subtitleCenter = centerX(subtitle);
    context.fillText(subtitle, subtitleCenter, 1010);

    // Serie name and center
    const serie = "ⓒ HumAIn_Art";
    context.font = "10px futura";
    const serieCenter = centerX(serie);
    context.fillText(serie, serieCenter, 1050);
  };
};

// add the listener to a mouseup
const addListeners = () => {
  window.addEventListener('mouseup', () => {
    if (!started) {
      started = true;
      setupAudio();
    }

    if (audio.paused) audio.play();
    else audio.pause();
  });
};


// Attach the listener and initiate the canvas sketch
addListeners();
canvasSketch(sketch, settings);



// // ONLY 2 PARAMS

// const canvasSketch = require('canvas-sketch');
// const math = require("canvas-sketch-util/math");


// const settings = {
//   dimensions: [1080, 1080],
//   animate: true,
// };

// let audio;
// let audioContext;
// let analyser;
// let dataArray;
// let started = false;

// const setupAudio = () => {
//   audio = document.createElement('audio');
//   audio.src = "media/Keys.mp3";

//   audioContext = new (window.AudioContext || window.webkitAudioContext)();
//   const source = audioContext.createMediaElementSource(audio);
//   analyser = audioContext.createAnalyser();
//   source.connect(analyser);
//   analyser.connect(audioContext.destination);
//   analyser.fftSize = 256;
//   const bufferLength = analyser.frequencyBinCount;
//   dataArray = new Uint8Array(bufferLength);
// };

// const getCurrentAmplitude = () => {
//   analyser.getByteTimeDomainData(dataArray);
//   let values = 0;
//   let average;
//   let length = dataArray.length;

//   for (let i = 0; i < length; i++) {
//     values += dataArray[i];
//   }

//   average = values / length;
//   return average;
// };

// const sketch = () => {
//   return ({ context, width, height, time }) => {
//     context.fillStyle = '#F6F3E1';
//     context.fillRect(0, 0, width, height);

//     if (started && !audio.paused) {
//       const amplitude = getCurrentAmplitude();
//       console.log(amplitude)
//       params.Shape = math.mapRange(amplitude, 128, 150, 1, 10);
//     }

//     // Inserting visualization from the 1st sketch here:

//     const cx = width /2;
//     const cy = height * 0.45;
//     const scaleShape = math.mapRange(params.Shape*1.5, 1,10, 0.1, 0.9); //    const scaleShape = math.mapRange(params.Shape, 1,10, 0.1, 0.9);
//     const radius = width * scaleShape / 4;

//     for (let i = 0; i < params.Lines; i++) {
//       const slice = (360 / params.Lines) * (Math.PI / 180);
//       const angle = slice * i;

//       const x = cx + radius * Math.sin(angle);
//       const y = cy + radius * Math.cos(angle);

//       context.save();
//       context.translate(x, y);
//       context.rotate(-angle);

//       context.beginPath();
//       context.rect(-params.Spread / 4, -params.Spread / 4, params.Spread, params.Spread);
//       context.fillStyle = params.Color;
//       context.fill();
//       context.restore();

//       context.shadowOffsetX = 10;
//       context.shadowOffsetY = 10;
//       context.shadowBlur = params.Texture * 10;

//       //////-------------------- TEXT FOOTER------------------///

//   //Function "centerX" to find center position x, automatically
//   const centerX = (text) => {
//     const metrics = context.measureText(text);
//     const textWidth =  metrics.width;
//     return (width/2) - (textWidth/2)
//   };

//   //Title line1 and center
//   const title = "Me";
//   context.fillStyle = '#313131';
//   context.font = "60px futura";
//   const titleCenter = centerX(title);
//   context.fillText(title, titleCenter, 950);
//   context.restore()

//   //Title line2 and center
//   const subtitle = "by Data-Scapes Atelier";
//   context.fillStyle = '#313131';
//   context.font = "italic 30px futura";
//   const subtitleCenter = centerX(subtitle);
//   context.fillText(subtitle, subtitleCenter, 1010);
//   context.restore()

//   //Title serie name + font
//   const serie = "ⓒ HumAIn_Art" //"Variations of π (pi)"
//   context.font = "10px futura";
//   const serieCenter = centerX(serie)
//   context.fillText(serie, serieCenter, 1050)
//   context.restore()
//     }
//   };
// };

// const addListeners = () => {
//   window.addEventListener('mouseup', () => {
//     if (!started) {
//       started = true;
//       setupAudio();
//     }

//     if (audio.paused) audio.play();
//     else audio.pause();

//   });
// };

// // Default values for Tweakpane sliders
// const params = {
//   Lines: 10,
//   Spread: 10,
//   Shape: 10,
//   Texture: 10,
//   Color: '#ff5c00',
// };


// addListeners();
// canvasSketch(sketch, settings);
