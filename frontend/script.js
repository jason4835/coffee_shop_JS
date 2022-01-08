const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");

const L_or_D = document.querySelector(".L_or_D");
const size = document.querySelector(".size");
const milk = document.querySelector(".milk");

const servey = document.querySelector(".survey");
const end = document.querySelector(".end");

//Question: L_or_D
ul_1.addEventListener("click", function() {
	L_or_D.style.display = "none";
	size.style.display = "block";
});

//Question: size
ul_2.addEventListener("click", function() {
	size.style.display = "none";
	milk.style.display = "block";
});

//Question: milk
ul_3.addEventListener("click", function() {
	milk.style.display = "none";
	survey.style.display = "none";
	end.style.display = "block";
});
