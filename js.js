var houses  = document.getElementById("houses");
var tree  = document.getElementById("tree");
var snowman  = document.getElementById("snowman");
var snowSwitcher  = document.getElementById("c5");
var musicSwitcher  = document.getElementById("c7");
var svg1 = document.getElementById("svg1");
var svg2 = document.getElementById("svg2");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var flakes = document.getElementById("flakes");
var bells = document.getElementById("bells");
var verifySnow = false;
var verifyMusic = false;

first();

function first() {
  snowman.style.visibility = "hidden";
  houses.style.visibility = "hidden";
  tree.style.visibility = "visible";
  c1.classList.toggle("active", true);
  c2.classList.toggle("active", false);
  c3.classList.toggle("active", false); 
  
}

function second() {
  tree.style.visibility = "hidden";
  snowman.style.visibility = "hidden";
  houses.style.visibility = "visible";
  c1.classList.toggle("active", false);
  c2.classList.toggle("active", true);
  c3.classList.toggle("active", false);
}

function third() {
  tree.style.visibility = "hidden";
  houses.style.visibility = "hidden";
  snowman.style.visibility = "visible";
  c1.classList.toggle("active", false);
  c2.classList.toggle("active", false);
  c3.classList.toggle("active", true);;
}

function snow(){
  if (verifySnow == false) {
    snowSwitcher.style.left = "5px";
    verifySnow = true;
    svg1.style.visibility = "visible";
    flakes.classList.toggle("flakes", true);
  }
  else {
    snowSwitcher.style.left = "-25px";
    verifySnow = false;
    svg1.style.visibility = "hidden";
    flakes.classList.toggle("flakes", false);
  }
}

function music(){
  if (verifyMusic == false) {
    musicSwitcher.style.left = "5px";
    verifyMusic = true;
    svg2.style.visibility = "visible";
    bells.play(); 
   ;
  }
  else {
    musicSwitcher.style.left = "-25px";
    svg2.style.visibility = "hidden";
    verifyMusic = false;
    bells.pause(); 
    bells.currentTime = 0; 
  }
}