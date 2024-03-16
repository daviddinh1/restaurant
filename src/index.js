//import css through js
import pic from './icon-nightbringer-final.jpg'; //even if its in the same folder you have to import it
import './style.css';
import {menu} from './menu.js';
import {about} from './about.js';


//this is our home page add it into addeventlistener
function home(){
 let contentContainer  =document.querySelector("#content");
 let img = new Image(100,100);
 img.src = pic;

 console.log(img.src);

 let para = document.createElement("div");
 para.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
 para.style.color = "white";

 para.setAttribute("id","text");
 contentContainer.appendChild(img);
 contentContainer.append(para);
}


function tabSwitch(){
 let contentContainer  =document.querySelector("#content");

 let homePage = document.getElementById("1");
 let menuPage = document.getElementById("2");
 let aboutPage = document.getElementById("3");

 aboutPage.addEventListener("click",() => {
   while(contentContainer.lastChild){
      contentContainer.removeChild(contentContainer.lastChild);
     }
    about();
 });
 homePage.addEventListener("click",() =>{
  while(contentContainer.lastChild){
   contentContainer.removeChild(contentContainer.lastChild);
  }
  home();
 });
 menuPage.addEventListener("click", ()=> {
  while(contentContainer.lastChild){
   contentContainer.removeChild(contentContainer.lastChild);
  }
  menu()
 });



}

home();
tabSwitch();
