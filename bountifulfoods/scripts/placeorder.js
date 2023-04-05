// initialize display elements
const todayDisplay = document.getElementById("today");
const freshCreations = document.getElementById("freshCreationsCount");
const placeOrderButton = document.getElementById('place-order-button');

freshCreations.innerHTML = "Drinks Created: " + localStorage.getItem("creations-ls");
// get the stored value in localStorage
let numCreations = window.localStorage.getItem("creations-ls"); 

placeOrderButton.addEventListener('click', () => {
    alert("Here dummy!");
      if (numCreations !== 0) {
        freshCreations.textContent = numCreations;
        } else {
                freshCreations.textContent = `First Fresh Creation!`;
        }
    // increment the number of creations.
    numCreations++;
    // store the new number of creations value
    localStorage.setItem("creations-ls", numCreations);
 });


/*
let x = localStorage.getItem("poop");
x++
localStorage.setItem("poop", x);
// Retrieve
document.getElementById("demo").innerHTML = localStorage.getItem("poop");
*/