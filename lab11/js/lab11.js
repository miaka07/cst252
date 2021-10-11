/*
  Author: Mia Alcaraz & Raven Jackson
  Created: 10.11.2021
*/

// create a button element in div output
$("#output").append("<button id=btn>CLICK ME!")

//restyle the button to a nice green and add event alert
$("#btn").click (function () {
  $("#btn").css("background-color", "#bafff5");
  alert("YOU DID IT!")
});
