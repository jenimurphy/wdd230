const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
        const response = await fetch(url);
        const data = await response.json();
        displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let bDate = document.createElement('p');
        let bPlace = document.createElement('p');
  
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    bDate.textContent = `Born: ${prophet.birthdate}`;
    bPlace.textContent = `Birthplace: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(bDate);
    card.appendChild(bPlace);
    card.appendChild(portrait);
    
    cards.appendChild(card);
})
}

