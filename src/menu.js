export function menu(){
 let contentContainer = document.querySelector("#content");
 
 let menuItem1 = document.createElement("div");
 menuItem1.textContent = "Cool Burger";
 let menuItem2 = document.createElement("div");
 menuItem2.textContent = "Happy Burger";
  let menuItem3 = document.createElement("div");
 menuItem3.textContent = "Dope Burger";

 menuItem1.setAttribute("class","menu");
 menuItem2.setAttribute("class","menu");
 menuItem3.setAttribute("class","menu");


 contentContainer.appendChild(menuItem1);
 contentContainer.appendChild(menuItem2);
 contentContainer.appendChild(menuItem3);

}