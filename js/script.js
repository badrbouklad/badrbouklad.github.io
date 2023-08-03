/* import {div} from "../main.js"
const sum = (...nums) => {
  return nums.reduce((acc, ele) => acc + ele ,0)
}

module.exports = sum; */

let obj1 = { name: 'John' };
let obj2 = obj1; // obj2 receives a reference to the same object as obj1

obj2.name = 'Jane'; // Changing obj2 also affects obj1

console.log(obj1.name); // Output: "Jane"
console.log(obj2.name); // Output: "Jane"


/*------------------------------------------------------------------------------*/


const btn = document.getElementById('btn');
window.onscroll = function () {
  if (scrollY > 100)
    btn.style.display = 'block'
  else
    btn.style.display = 'none'

}

btn.onclick = function () {
  window.scrollTo({
    left:0,
    top:0,
    behavior: 'smooth'
})
}