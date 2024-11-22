/*-------------------------------------------- INPUT PROFESSIONAL AND NON PRO `````````````````````````````````````````````````````
let username;

username = window.prompt("Whats your username?");

console.log(username)

let username;

document.getElementById("submit").onclick = function(){

    username = document.getElementById("text").value;
    document.getElementById("h1").textContent = `Hello ${username}`; 
}-----------------------------------------------------------------------------------------------------------------------------------*/

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function(){

    radius = document.getElementById("text").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("h3").textContent = circumference + "cm";

}