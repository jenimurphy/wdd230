// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&appid=a1f7c9ee63d3a200ba55d543ddcac8dd&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    const weatherDesc = desc.split(" ");
        for (let i = 0; i < weatherDesc.length; i++) {
            weatherDesc[i] = weatherDesc[i][0].toUpperCase() + weatherDesc[i].substr(1);
        }
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = weatherDesc[0] + ' ' + weatherDesc[1];
    }

//---- Footer Script-----//
const d = new Date();
const lastupdate = document.querySelector("#lastupdate");
const copyright = document.querySelector("#copyright");
const year = d.getFullYear();
lastupdate.innerHTML = `Last Updated: ${new Date().toLocaleString("default",'long')}`
copyright.innerHTML  = `${new Date().getFullYear()}`;

