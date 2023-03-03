const url = 'https://jenimurphy.github.io/wdd230/chamber/json/data.json';

async function getBusinessData() {
        const response = await fetch(url);
        const data = await response.json();
        displayBusiness(data.business);
}
getBusinessData();

const displayBusiness = (business) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    business.forEach((business) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let busIcon = document.createElement('img');
        let bAddress = document.createElement('p');
        let bURL = document.createElement('p');
        let bPhone = document.createElement('p');
  
    h2.textContent = `${business.busName}`;
    bAddress.textContent = `Business: ${business.busAddress}`;
    bPhone.textContent = `Phone: ${business.busPhone}`;

    busIcon.setAttribute('src', business.busIcon);
    busIcon.setAttribute('alt', `Business Icon of ${business.busName}`);
    busIcon.setAttribute('loading', 'lazy');
    busIcon.setAttribute('width', '100');
    busIcon.setAttribute('height', '200');

    card.appendChild(h2);
    card.appendChild(busIcon);
    card.appendChild(bAddress);
    card.appendChild(bPhone);
    card.appendChild(bURL);
    card.appendChild(busIcon);
    
    cards.appendChild(card);
})
}
