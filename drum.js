var i;
var totalButtoms = document.querySelectorAll(".drum");
for(i = 0; i < totalButtoms.length; i++){
document.querySelectorAll("button")[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      AudioPlay(buttonInnerHTML);
      buttonAnimation(buttonInnerHTML);     
  });
}

document.addEventListener("keydown", function(event) {
          var keyPressed = event.key;
          AudioPlay(keyPressed);   
          buttonAnimation(keyPressed);  
      });


function AudioPlay(key){
    switch(key){
        case 'w':
            var tom1 = new Audio('tom-1.mp3');
            tom1.play();
            break;
        case 'a' :
            var tom2 = new Audio('tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('snare.mp3');
            snare.play();
            break;
        case 'k':
            var kick = new Audio('kick-bass.mp3');
            kick.play();
            break;
        case 'l':
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
        default:
            alert("Look into the drum keys carefully");
            break;
    }
}

function buttonAnimation(currentKey){
    var buttonSelector = document.querySelector("." + currentKey);
    buttonSelector.classList.add("pressed");
    setTimeout(function () {buttonSelector.classList.remove("pressed");
     }, 100);
}