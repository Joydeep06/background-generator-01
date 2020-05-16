var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var css=document.querySelector("h3");
var random=document.getElementById("random");
var default1=document.getElementById("default");


function setgradient(){
	body.style.background="linear-gradient(to right, "+ color1.value + ", " + color2.value + ")";
	//css.textContent=body.style.background +";";
	css.innerHTML=body.style.background +";";
}

function defaultgradient(){
	body.style.background="linear-gradient(to right, red, yellow)";
	css.innerHTML=body.style.background +";";
}

function randomGradient(){
	body.style.background="linear-gradient(to right, "+ "#"+((1<<24)*Math.random()|0).toString(16) + ", " + "#"+((1<<24)*Math.random()|0).toString(16) + ")";
	css.innerHTML=body.style.background +";";
}

css.innerHTML="linear-gradient(to right, red, yellow)";
color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);
random.addEventListener("click", randomGradient);
default1.addEventListener("click", defaultgradient);



