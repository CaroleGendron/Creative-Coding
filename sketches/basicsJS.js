//------------- VARIABLES = ADJECTIVES------------//

let x = 10;  //--let variables can be changed
x = 20 //after declaration-
const y = 20  //--const variable can't be changed

//------------- FUNCTIONS = VERBS ------------//

//generally declared with a 'const' ( = verb infinitive)
//a, b are parameter
const multiply2 = (a,b) => {
  return a * b
}

//it is the same than writing
function multiply (a,b) {
  return a * b
}

//to call and store the function
const result = multiply (2,5)





//------------- CHECK FUNCTION RESULT ------------//

// clog result
console.log(result)

//open the file from terminal:
//   ➜  Creative-Coding git:(basics) ✗ canvas-sketch sketches/basicsJS.js  --open

//inspect in browser / console

//------------- ARRAYS AND OBECTS ------------//

const colors = ['blue', 'black', 'white' ] //array

const triangle = {side : 3, radius : 120, freq : 15} //object

//locate elements
console.log(colors[0])  //locate with index position, print 'blue' in inspect browser
console.log(triangle.radius)  //locate with function.key. print '120' in inspect browser


//------------- LOOPS ------------//

//For loop made of 3 parts :
  //1- the index of the iterration, with letter i
  //2- the lenghth of the loop, keeping looping as long as i is smaller than max
  //3- what to do with the iterattion (eg : increment )

for (let i = 0; i < colors.length; i++) {
  console.log(i, colors[i])
}

//another type of iterating/looping over an array  : for.each
  //1st parameter is the value of the item of each iteration
colors.forEach(item => {
  console.log(item)
})

  //2nd parameter is wanted
colors.forEach((item,i) => {
  console.log(i,item)
})

//------------- CONDITIONALS ------------//

if (true) console.log ("yeearh");
else console.log ("noooo")

//ternary operator
let night = true;
let backgroundColor;

backgroundColor = (night) ? "black" : "white"
if (night === true) backgroundColor = "black";
else backgroundColor = "white";


//------------- ASYNC AND AWAIT ------------//

//per default JavaScript is synchronous reading, line by line, if var in line 2 = 3 and in line 50 = 10, then keeps last value

//loading an image is an asynchronisous task

// const loadImage = (url) => {
//   const img = new Image();
//   img.src = url;
//   return img;
// }
// //then call the function
// const myImage = loadImage("https://picsum.photos/200");
// console.log(myImage.width) //output = 0


const loadImage = async (url) => {
  return new Promise ((resolve, reject) => {
    const img = new Image();
    img.onload = resolve (img);
    img.onerror = reject ();
    img.src = url;
    return img;
  })

}
// //then call the function
// const myImage = loadImage("https://picsum.photos/200");
// console.log(myImage.width) //output = 0
// const loadImage = (url) => {
//   const img = new Image();
//   img.src = url;
//   return img;
// }
// //then call the function
// const myImage = loadImage("https://picsum.photos/200");
// console.log(myImage.width) //output = 0

//https://www.domestika.org/en/courses/3862-creative-coding-2-0-in-js-animation-sound-color/units/14950-the-setup
