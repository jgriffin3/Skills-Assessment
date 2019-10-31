document.addEventListener("DOMContentLoaded", function() {
 	getRandomHeroImage();
});

// This function will generate a random integer between 0 and 3
//   and then assign the class associated with that number
function getRandomHeroImage() {
	var heroClasses = ["hero1", "hero2", "hero3"];

    var selection = Math.floor(Math.random() * 3);

    document.getElementById('hero').classList.add(heroClasses[selection]);
}
