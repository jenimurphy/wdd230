const todayDisplay = document.querySelector("#today");
const visitsDisplay = document.querySelector("#visitcount");

let countVisits = Number(window.localStorage.getItem("visits-ls"));
if (countVisits !== 0) {
	visitsDisplay.textContent = countVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
countVisits++;
localStorage.setItem("visits-ls", countVisits);

