export function about(){
 let contentContainer = document.querySelector("#content");
 let aboutText = document.createElement("div");
 aboutText.textContent = "Since 1999, we have been proudly serving authentic Indian cuisine, steeped in tradition and flavor, inviting you to experience the rich tapestry of Indian culinary delights at our restaurant.";
 aboutText.setAttribute("id","about");
 contentContainer.appendChild(aboutText);
}