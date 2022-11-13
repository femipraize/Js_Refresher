

function fun2() {
    var x = document.getElementsByTagName("div");
    for (i=0; i<x.length; i++) {
        x[i].style.backgroundColor = "blue";
    }
    
    /*
    x[0].style.fontFamily = "Courier New";
    x[1].style.color = "Blue";
    x[2].style.fontStyle = "italic";
    x[3].style.backgroundColor = "Red";
    */
}