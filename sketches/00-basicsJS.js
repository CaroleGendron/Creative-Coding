
//------------- DOCUMENTATION ------------//
// •	MDN Docs JavaScript Basics/  https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
// •	MDN Docs JavaScript /  https://developer.mozilla.org/en-US/
// we use npm to install js libraries (= pip install from python)


//------------- VARIABLES ------------//

let x = 10;  //--let variables can be changed
x = 20 //after declaration-
x += 1 //after declaration-

const y = 20  //--const variable can't be changed
const fullName = "Sebastien Saunier"
const message  = `Hello ${fullName}`

//------------- FUNCTIONS  ------------//

//generally declared with a 'const' ( = verb infinitive)
//a, b are parameter
const multiply2 = (a,b) => {
  return a * b
}

//it is the same than writing
function multiply (a,b) {
  return a * b
}

const sayHello = (name) => {
  return `Hello, ${name}!`
}

//------------- INSPECT RESULT ------------//

//to call or store the function
const hello = sayHello("Seb")  // output : Hi, Seb!
const result = multiply (2,5)  //output : 10

// consolelog result
console.log("result function:",result)
console.log("hello function:",hello)

//inspect in browser / via inspector console

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

//ternary operator, conditional shortcut syntax
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


//Add an Async and an Await.
//telling the browser to wait until the Promise (=loading the image is resolved) and only then execute the last line
//function 1 : load image
const loadImage = async (url) => {
  return new Promise ((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve (img);
    img.onerror  = () => reject ();
    img.src = url;
    return img;
  })
};

//function 2 : start async function
const start= async () => {
  const myImage = await loadImage("https://picsum.photos/200");
  console.log("image width:",myImage.width) //output = 200
}

//calll 'start' funcion o see the result
start()

//https://www.domestika.org/en/courses/3862-creative-coding-2-0-in-js-animation-sound-color/units/14950-the-setup

// //------------- FINDING ELEMENTS ------------//
// document.getElementById("some-id")

// // `querySelector` returns the first element having this class
// document.querySelector(".class-name")

// // `querySelectorAll` returns all the elements having this class
// document.querySelectorAll(".class-name")

// //------------- INSERT HTML ------------//
// Insert HTML
// Using insertAdjacentHTML():

// // Select a `<ul>` element
// const list = document.getElementById("some-list-id")

// // Append an `<li>` using `.insertAdjacentHTML`
// list.insertAdjacentHTML("beforeend", "<li>Luke</li>")
// Using appendChild():

// // Select a `<ul>` element
// const list = document.getElementById("some-list-id")

// // Create a `Node` object
// const listItem = document.createElement("li") // => <li></li>

// // Sets inner text to "Luke"
// listItem.innerHTML = "Luke"

// // Append it to the list
// list.appendChild(listItem)
// Accessing content
// <a id="link-id" data-sample="hello" href="https://www.lewagon.com/fr">Le Wagon</a>
// const element = document.getElementById("link-id")

// // Get the text inside the `element`
// element.innerText
// element.innerHTML
// // => "Le Wagon"

// // Get the link (href) of `element`
// element.attributes.href.value


// element.dataset.sample
// // => "hello"

// // You can also change or add data to the `element`
// element.dataset.sample = "new value"
// Styling
// element.style.display = "none"
// element.style.display = ""
// element.classList.add("red")
// element.classList.remove("red")
// element.classList.toggle("red")
// element.classList.contains("red")


// //------------- LISTENERS ------------//
// Listeners
// button.addEventListener("click", (event) => {
//   // do something on click of an element
// })

// input.addEventListener("blur", (event) => {
//   // do something when leaving an input
// })

// form.addEventListener("submit", (event) => {
//   // do something on submit of a form
// })

// document.addEventListener("DOMContentLoaded", (event) => {
//   // do something when page is loaded
// })
// OR:

// const callback = (event) => {
//   // do something
// }

// element.addEventListener("click", callback)
// See all referenced events

// Trigger an event
// const eventSubmit = new Event("submit")
// element.dispatchEvent(eventSubmit)
// Ask for confirmation
// if (confirm("Are you sure you want to delete?")) {
//   // do something
// } else {
//   // do something else
// }
// const bindConfirm = (element) => {
//   element.addEventListener("click", (event) => {
//     if (!confirm("Are you sure you want to delete?")) {
//       event.preventDefault()
//     }
//   })
// }
// //------------- AJAX ------------//
// GET request:

// fetch("SOME_URL")
//   .then(response => response.json())
//   .then((data) => {
//     // do something with the json
//   })
// POST request:

// fetch("https://reqres.in/api/register", {
//   method: "POST",
//   headers: {"Content-Type": "application/json"},
//   body: JSON.stringify({"email": "eve.holt@reqres.in", "password": "pistol"})
// })
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data)
//   })
