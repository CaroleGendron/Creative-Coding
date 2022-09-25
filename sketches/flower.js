const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const { lerp } = require("canvas-sketch-util/math");

const width = 1080;
const height = 1420;
const particleCount = 500;
const TWO_PI = 2 * Math.PI;
const settings = {
  dimensions: [width, height],
  animate: true,
  fps: 30,
  duration: 10,
  loop: true
};
const r1 = 0,
  r2 = 600,
  entropy = 0.1;
const x1 = (t, x = width / 2) =>
  x +
  r2 *
    random.noise2D(
      entropy * Math.cos(1 * TWO_PI * t),
      entropy * Math.sin(1 * TWO_PI * t)
    );
const y1 = (t, y = height / 4) =>
  y +
  r2 *
    random.noise2D(
      entropy * Math.sin(1 * TWO_PI * t),
      entropy * Math.cos(1 * TWO_PI * t)
    );
const x2 = (t) => width / 2 + r1 * Math.cos(TWO_PI * t);
const y2 = (t) => height / 2 + r1 * Math.sin(TWO_PI * t);
const ellipse = (ctx, x, y, r1, r2, color) => {
  ctx.beginPath();
  ctx.ellipse(x, y, r1, r2, 0, 0, TWO_PI);
  ctx.lineWidth = 1;
  ctx.fillStyle = color || "#fff";
  ctx.fill();
  ctx.closePath();
};

const getParticles = (count, t, tt) => {
  const disturbance1 = -1,
    disturbance2 = 3;
  const result = [];
  const r = width / 2.5,
    cx = width / 2,
    cy = height / 2;
  for (let i = 0; i < count; i++) {
    const sepX = cx + r * Math.cos((i * TWO_PI) / count);
    const sepY = cy + r * Math.sin((i * TWO_PI) / count);
    const x = lerp(x1(t + disturbance1 * tt, sepX), x2(t), tt);
    const y = lerp(y1(t + disturbance1 * tt, sepY), y2(t), tt);
    const x01 = lerp(x1(t + disturbance2 * tt, sepX), x2(t), tt);
    const y01 = lerp(y1(t + disturbance2 * tt, sepY), y2(t), tt);
    result.push([x, y, x01, y01]);
  }
  return result;
};

const getGradientFill = (context) => {
  const fill = context.createRadialGradient(
    width / 2,
    height / 2,
    10,
    width / 2,
    height / 2,
    width - 100
  );
  fill.addColorStop(0, "#ded96f");
  fill.addColorStop(0.1, "#89defa");
  fill.addColorStop(0.3, "#0b2852");
  fill.addColorStop(0.6, "#3e5e04");
  fill.addColorStop(0.8, "#1c2c1e");
  fill.addColorStop(1, "#060b0d");
  return fill;
};

// Artwork function
const sketch = () => {
  return ({ context, width, height, time }) => {
    context.fillStyle = "rgba(0,0,0)";
    context.fillRect(0, 0, width, height);
    const t = 0.2 * time;
    const fill = getGradientFill(context);
    for (let i = 0; i <= particleCount; i++) {
      const tt = i / particleCount;
      const itemsArr = getParticles(8, t, tt);
      itemsArr.forEach((item) => {
        const [x1, y1, x2, y2] = item;
        ellipse(context, x1, y1, 1, 3, fill);
        ellipse(context, x2, y2, 1, 2, fill);
      });
    }
    // creates a dot at the center
    ellipse(context, width / 2, height / 2, 10, 10, "#000");
  };
};
// Start the sketch
canvasSketch(sketch, settings);
