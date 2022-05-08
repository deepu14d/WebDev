
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
var audio = new Audio('sounds/tom-1.mp3');

var i = 0;
while(i < numberOfDrumButtons){
    document.querySelectorAll(".set button")[i].addEventListener("click", function(){
        audio.play();
});
i++;
}
