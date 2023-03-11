const url = 'https://jenimurphy.github.io/wdd230/chamber/json/data.json';

async function getBusinessData() {
        const response = await fetch(url);
        const data = await response.json();
        displayBusiness(data.business);
}
getBusinessData();

const displayBusiness = (business) => {
    const cards = document.querySelector('div.businessCards'); // select the output container element

    business.forEach((business) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let busIcon = document.createElement('img');
        let bAddress = document.createElement('p');
        let bURL = document.createElement('a');
        bURL.href = business.busURL;
        let bPhone = document.createElement('p');
  
    h2.textContent = `${business.busName}`;
    bAddress.textContent = `${business.busAddress}`;
    bPhone.textContent = `${business.busPhone}`;
    bURL.textContent = `${business.busURL}`

    busIcon.setAttribute('src', business.busIcon);
    busIcon.setAttribute('alt', `Business Icon of ${business.busName}`);
    busIcon.setAttribute('loading', 'lazy');
    busIcon.setAttribute('width', 'auto');
 

    card.appendChild(busIcon);
    card.appendChild(h2);
    card.appendChild(bAddress);
    card.appendChild(bPhone);
    card.appendChild(bURL);
    
    cards.appendChild(card);
})
}

const gridbutton = document.querySelector("#gridView");
const listbutton = document.querySelector("#listView");
const display = document.querySelector("div.businessCards");

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

