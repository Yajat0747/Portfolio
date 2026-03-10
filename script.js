function openTab(evt, tabName){

let contents = document.querySelectorAll(".tabcontent");
let tabs = document.querySelectorAll(".tab");

contents.forEach(c => {
c.style.display = "none";
});

tabs.forEach(t => {
t.classList.remove("active");
});

document.getElementById(tabName).style.display = "block";

evt.currentTarget.classList.add("active");

}

/* show default tab */

document.addEventListener("DOMContentLoaded", function(){
document.getElementById("tech").style.display = "block";
});