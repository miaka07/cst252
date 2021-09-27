/*
  Author: Mia Alcaraz & Raven Jackson
  Created: 09.25.2021
*/


// sortUserName - a function that takes user input and sorts the letters of their name
function sortUserName() {
  var userName = window.prompt("Hello! Please tell me your name and I'll fix it.");
  console.log("userName =", userName);

  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  //join array back to a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

// Output
document.writeln("Voila! I fixed your name: ",
  sortUserName(), "</br>");
