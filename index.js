// Detecting Button Pressed
let drumButtons = document.querySelectorAll(".drum");
for (let i=0; i<drumButtons.length; i++) {
  drumButtons[i].addEventListener("mouseenter", function() {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    addAnimation(buttonInnerHTML);

  });
}

// Detecting Keyboard Pressed
document.addEventListener("keydown", function(event) {

makeSound(event.key);
addAnimation(event.key);

});

// Generating sound
function makeSound(key) {
  switch (key) {
    case "w":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
    case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
      break;
    case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;
    case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
    case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;
    case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;
    case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;

      case "t":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
        break;
      case "r":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
        break;
      case "e":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
        break;
      case "q":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
        break;
      case "h":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
        break;
      case "g":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
        break;
      case "f":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
        break;

        case "y":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
          break;
        case "u":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
          break;
        case "i":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
          break;
        case "o":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
          break;
        case "p":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
          break;
        case "z":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
          break;
        case "x":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
          break;

          case ".":
              var crash = new Audio("sounds/crash.mp3");
              crash.play();
            break;
          case ",":
              var kick = new Audio("sounds/kick-bass.mp3");
              kick.play();
            break;
          case "m":
              var snare = new Audio("sounds/snare.mp3");
              snare.play();
            break;
          case "n":
              var tom1 = new Audio("sounds/tom-1.mp3");
              tom1.play();
            break;
          case "b":
              var tom2 = new Audio("sounds/tom-2.mp3");
              tom2.play();
            break;
          case "v":
              var tom3 = new Audio("sounds/tom-3.mp3");
              tom3.play();
            break;
          case "c":
              var tom4 = new Audio("sounds/tom-4.mp3");
              tom4.play();
            break;

    // default: console.log(buttonInnerHTML);

  }
}

function addAnimation (currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  console.log(activeButton);
  // activeButton.classList.toggle("pressed");
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
