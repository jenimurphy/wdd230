// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const currentWind = document.querySelector('#current-wind');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=48.117&lon=-122.7605&appid=a1f7c9ee63d3a200ba55d543ddcac8dd&units=imperial';

//lat: 48.117, long: =-122.7605
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
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
    currentWind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
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

function windChill(tempF, speed){
      if (tempF <= 50 && speed >3) {
      return (35.74 + 0.6215 * tempF - 35.75 * speed ** 0.16 + 0.4275 * tempF * speed ** 0.16).toFixed(2)+ " °F";
      } else {
          return "N/A"
      }
  }
  
  //Call the windChill function
  let wChill = windChill(currentTemp, currentWind);
  
  //Display the Wind Chill Temperature
  document.getElementById('wChill').innerHTML = wChill;
  


