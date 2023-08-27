//https://www.domestika.org/en/courses/3862-creative-coding-2-0-in-js-animation-sound-color/units/14953-the-audio
const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ],
  animate: true
};

let audio;
let audioContext, audioData, sourceNode, analyserNode; //new variables created to read music data
let manager //to be able to 'pause' the canvas animation

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    if(!audioContext) return; //to fix bug being able to launch audio to calculate its frequency lenght console.log

    analyserNode.getFloatFrequencyData(audioData);

    const avg = getAverage(audioData) //store the average data to be used to draw circle

    //draw the circle
    context.save();
    context.translate (width * 0.5, height * 0.5) //center circle
    context.lineWidth = 10;

    context.beginPath();
    context.arc(0,0, Math.abs(avg), 0, Math.PI * 2);
    context.stroke();

    context.restore()

  };
};

const addListeners = () => { //per default the audio player is off. cond. statement. click play/click pause
  window.addEventListener('mouseup', () => {
    if(!audioContext) createAudio(); //condition to create audio just once when 1st interaction

    if (audio.paused) {
    audio.play(); // play the music
    manager.play(); // play the drawing
    }

    else {
      audio.pause();
      manager.pause();
    }
  });

};

const createAudio =() => {
  audio = document.createElement('audio') ;//create & store a variable called audio / no need to be added to the document body
  audio.src = "audio/Keys.mp3"//giving the audio a source, needs to be in the same folder than the sketch

  audioContext = new AudioContext();

  //define the media source to read to extract data
  sourceNode = audioContext.createMediaElementSource(audio);
  sourceNode.connect(audioContext.destination) //connect audio file to destination = speakers

  //analyse the audio data
  analyserNode = audioContext.createAnalyser();
  sourceNode.connect(analyserNode);

  //get the data
  audioData = new Float32Array(analyserNode.frequencyBinCount);

  console.log(audioData.length)

}
const getAverage = (data)=> {
  let sum = 0;

  for (let i = 0; i < data.length; i ++){
    sum += data [i]
  }

  return sum / data.length;
}

const start = async () => { //To be able to start and stop the sketch
  addListeners();
  manager = await canvasSketch(sketch, settings);
  manager.pause()
}

start(); //call start to start the animation


//---------------------
//ADD AUDIO TO BROWER + CLICK TO PLAY/PAUSE

// const canvasSketch = require('canvas-sketch');

// const settings = {
//   dimensions: [ 1080, 1080 ]
// };

// let audio;

// const sketch = () => {
// audio = document.createElement('audio') ;//create & store a variable called audio / no need to be added to the document body
// audio.src = "audio/Keys.mp3"//giving the audio a source, needs to be in the same folder than the sketch

// return ({ context, width, height }) => {
//     context.fillStyle = 'white';
//     context.fillRect(0, 0, width, height);
//   };
// };

// const addListeners = () => { //per default the audio player is off. cond. statement. click play/click pause
//   window.addEventListener('mouseup', () => {
//     if (audio.paused) audio.play();
//     else audio.pause();
//   });
// };

// addListeners();
// canvasSketch(sketch, settings);
