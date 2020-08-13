var startTime, endTime;



function begin() {
    var posY = Math.floor(Math.random() * 70) + "%";
    var posX= Math.floor(Math.random() * 70) + "%";
    var randomColor = "#" +((1<<24)*Math.random()|0).toString(16);

    document.getElementById("circle").style.left= posY;
    document.getElementById("circle").style.bottom= posX;

    document.getElementById("circle").style.display="block";
    document.getElementById("circle").style.backgroundColor=randomColor;
    startTime = performance.now();
};


function endTime() {
    endingTime = performance.now();
    var timeDiff = (endingTime - startTime) / 1000;
    document.getElementById("result").innerHTML="Your Reaction Time is: " + timeDiff + "sec";
    document.getElementById("circle").style.display="none";
    setTimeout(begin,600);
};
