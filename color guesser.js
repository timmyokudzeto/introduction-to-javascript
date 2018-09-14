var color = prompt("choose a combination of this four colours red green blue and yellow")
if (color == "rygb") {
  alert("you guessed right")
} else if (color !== "rygb") {
  var userInput = prompt("do you want to try again")
  if (userInput == "yes") {
    var color = prompt("enter your color again")


    const attempts = 12;
    var trials = 0;
    while (color !== "rygb" && trials < attempts) {
        trials++;
      var color = prompt("enter your color again ")
      if (trials == 12){
         alert("Game Over")
      }
      if (color == "rygb") {
        alert("you guessed right")
      }
    }
  }
} else {
  alert("Game Over")
}
