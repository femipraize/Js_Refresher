var hole = document.getElementById("hole");
var game = document.getElementById("game");

hole.addEventListener("animationiteration", RanHole)

function Ranhole() {
    var random = -((math.random()*350)+150)
    hole.style.top = random+"px";
}