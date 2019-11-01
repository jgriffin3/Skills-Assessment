// This function will generate a random integer between 0 and 3
// and then assign the class associated with that number
function getRandomHeroImage() {
	var heroClasses = ["hero1", "hero2", "hero3"];

	var selection = Math.floor(Math.random() * 3);

	document.getElementById('hero').classList.add(heroClasses[selection]);
}

// This function will execute animations after scrolling
function runOnScroll() {
	if (window.pageYOffset > 300) {
		document.getElementById("img1").classList.add("animated", "fadeInLeft");
		document.getElementById("img2").classList.add("animated", "fadeInLeft");
		document.getElementById("img3").classList.add("animated", "fadeInRight");
		document.getElementById("img4").classList.add("animated", "fadeInRight", "delay-1s");
		document.getElementById("img5").classList.add("animated", "fadeInRight", "delay-1s");
		document.getElementById("body-copy").classList.add("animated", "fadeInRight", "delay-2s");
	}
}

document.addEventListener("DOMContentLoaded", function() {
	getRandomHeroImage();

	window.addEventListener("scroll", runOnScroll);
});
