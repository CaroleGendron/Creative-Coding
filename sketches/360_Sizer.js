//https://www.domestika.org/en/courses/2729-creative-coding-making-visuals-with-javascript/units/9671-sketch-noise#course_lesson_28440

const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math'); //to map values
const Tweakpane = require('tweakpane');

const settings = {
	dimensions: [ 1080, 1080 ],
	animate: true
};

// //mapping score and bar length
// const co2 = math.mapRange(score, 1, 10, -200, -400) // map range (const to map, origin base, origin top, new base, new top)
// console.log("mapScore : ", rangeScore)

const item_name = "Corn";
const co2_value = 22.87;
const water_value = 0.2;
const land_value = 4.77;

const params = {
	cols: land_value,
	rows: land_value,
	scaleMin: co2_value,
	scaleMax: co2_value,
	freq: 0.001,
	amp: water_value,
};

const sketch = () => {
	return ({ context, width, height, frame }) => {
		context.fillStyle = '#F6F3E1';
		context.fillRect(0, 0, width, height);

		const cols = params.cols;
		const rows = params.rows;
		const numCells = cols * rows;

		const gridw = width  * 0.6;
		const gridh = height * 0.6;
		const cellw = gridw / cols;
		const cellh = gridh / rows;
		const margx = (width  - gridw) * 0.5;
		const margy = (height - gridh) * 0.4;

		for (let i = 0; i < numCells; i++) {
			const col = i % cols;
			const row = Math.floor(i / cols);

			const x = col * cellw;
			const y = row * cellh;
			const w = cellw * 0.8;
			const h = cellh * 0.8;

			// const f = params.animate ? frame : params.frame;

			const n = random.noise2D(x + frame * 10, y, params.freq);
			// const n = random.noise3D(x, y, f * 10, params.freq);


			const angle = n * Math.PI * params.amp;

			// const scale = (n + 1) / 2 * 30;
			// const scale = (n * 0.5 + 0.5) * 30;
			const scale = math.mapRange(n, -1, 1, params.scaleMin, params.scaleMax);

			context.save();
			context.translate(x, y);
			context.translate(margx, margy);
			context.translate(cellw * 0.5, cellh * 0.5);
			context.rotate(angle);

			context.lineWidth = scale;
			// context.lineCap = params.lineCap;

			context.beginPath();
			// context.moveTo(w * -0.5, 0);
			// context.lineTo(w *  0.5, 0);
      context.arc(30, 25, 35, 0, Math.PI*2, false); // Mouth (clockwise)

			context.stroke();

			context.restore();
		}
 //center the title
 context.font = "120px futura";
 const len_text = context.measureText(item_name).width;
 console.log("len_text:", len_text)
 const x_center = width/2 - (len_text/2);
 console.log("x_center:", x_center)
 context.fillStyle = "#3E3F44";
 context.fillText(item_name, x_center, 1020);

//  const len_text2 = context.measureText("by data-feelings.com").width;
//  const x_center2 = width/2 - (len_text2 /5);
//  context.font = "30px futura";
//  context.fillText("by data-feelings.com", x_center2, 1050);
//  context.shadowBlur = 60;
	};
};

const createPane = () => {
	const pane = new Tweakpane.Pane();
	let folder;

	folder = pane.addFolder({ title: 'Grid '});
	folder.addInput(params, 'cols', { min: 1, max: 15, step: 1 });
	folder.addInput(params, 'rows', { min: 1, max: 15, step: 1 });
	folder.addInput(params, 'scaleMin', { min: 0, max: 100 });
	folder.addInput(params, 'scaleMax', { min: 0, max: 100 });
	folder.addInput(params, 'freq', { min: -0.01, max: 0.01 });
	folder.addInput(params, 'amp', { min: 0, max: 1 });
};

createPane();
canvasSketch(sketch, settings);

// # Save animations to GIF but scale it down to 512 px wide
// canvas-sketch sketches/animation.js --output=tmp --stream [ gif --scale=512:-1 ]
