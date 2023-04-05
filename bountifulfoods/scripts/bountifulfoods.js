const d = new Date();
const lastupdate = document.querySelector("#lastupdate");
const copyright = document.querySelector("#copyright");
const year = d.getFullYear();
lastupdate.innerHTML = `Last Updated: ${new Date().toLocaleString("default",'long')}`
copyright.innerHTML  = `${new Date().getFullYear()}`;


document.getElementById("freshCreationsCount").innerHTML = "# of Drinks You Have Created: " + localStorage.getItem("creations-ls");

const todaysdate = document.querySelector("#todaysdate");
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);
todaysdate.innerHTML = `${fulldateUK}`;




