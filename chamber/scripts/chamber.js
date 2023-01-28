const d = new Date();
const lastupdate = document.querySelector("#lastupdate");
const copyright = document.querySelector("#copyright");
const year = d.getFullYear();
lastupdate.innerHTML = `Last Updated: ${new Date().toLocaleString("default",'long')}`
copyright.innerHTML  = `${new Date().getFullYear()}`;

const todaysdate = document.querySelector("#todaysdate");
const fulldateUK = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(d);
todaysdate.innerHTML = `${fulldateUK}`;

const mainnav = document.querySelector('.navigation')
const hamburgerbutton = document.querySelector('#menu');
hamburgerbutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);