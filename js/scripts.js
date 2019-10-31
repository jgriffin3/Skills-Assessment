document.addEventListener("DOMContentLoaded", function() {
  var heroClasses = ["hero1", "hero2", "hero3"];

  var selection = Math.floor(Math.random() * 3);

  document.getElementById('hero').classList.add(heroClasses[selection]);
});
