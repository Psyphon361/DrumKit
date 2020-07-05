
var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numberOfButtons; i++)
{
  document.querySelectorAll(".set button")[i].addEventListener("click", handleClick);

  function handleClick()
  {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

document.addEventListener("keydown", function(event) {
  
  playSound(event.key);
  buttonAnimation(event.key)
});

function playSound(key) {

  var drumSound;

  switch (key) {
    case "w":
        drumSound = new Audio("sounds/tom-1.mp3");
        drumSound.play();
      break;

    case "a":
        drumSound = new Audio("sounds/tom-2.mp3");
        drumSound.play();
      break;

    case "s":
        drumSound = new Audio("sounds/tom-3.mp3");
        drumSound.play();
      break;

    case "d":
        drumSound = new Audio("sounds/tom-4.mp3");
        drumSound.play();
      break;

    case "j":
        drumSound = new Audio("sounds/snare.mp3");
        drumSound.play();
      break;

    case "k":
        drumSound = new Audio("sounds/crash.mp3");
        drumSound.play();
      break;

    case "l":
        drumSound = new Audio("sounds/kick-bass.mp3");
        drumSound.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
