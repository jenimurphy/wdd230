const currentTemp = document.querySelector('#current-temp');
const currentHumidity = document.querySelector('#current-humidity');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.158089&lon=-117.350594&appid=a1f7c9ee63d3a200ba55d543ddcac8dd&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
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
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(0)}`;
    currentHumidity.innerHTML = `${weatherData.main.humidity.toFixed(0)}`;
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

  
  //Display the Humidity
  document.getElementById('current-humidity').innerHTML = currentHumidity;
  


