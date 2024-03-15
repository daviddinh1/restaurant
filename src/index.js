//import css through js
import pic from './icon-nightbringer-final.jpg'; //even if its in the same folder you have to import it
import './style.css';

//add the image using js and the text 
let contentContainer  =document.querySelector("#content");
let container = document.querySelector("body");
let img = new Image(100,100);
img.src = pic;

console.log(img.src);

let para = document.createElement("div");
para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
para.style.color = "white";


contentContainer.appendChild(img);
contentContainer.append(para);
