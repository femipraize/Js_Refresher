var hole = document.getElementById("hole");
var game = document.getElementById("game");
var result = document.getElementById("result");
var text = document.getElementById("text");
var score = 0;
var jumping = 0;

hole.addEventListener("animationiteration", RanHole)

function RanHole() 
{
    var random = -((Math.random()*350)+150)
    hole.style.top = random+"px";
}

var fall = setInterval(function() 
{
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0)
    {
        bird.style.top = (birdTop+2)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    
},10)