// Footer script for the copyright and Last Updated info ///
const d = new Date();
const lastupdate = document.querySelector("#lastupdate");
const copyright = document.querySelector("#copyright");
const year = d.getFullYear();
lastupdate.innerHTML = `Last Updated: ${new Date().toLocaleString("default",'long')}`
copyright.innerHTML  = `${new Date().getFullYear()}`;