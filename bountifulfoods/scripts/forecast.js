
const furl = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.158089&lon=-117.350594&appid=a1f7c9ee63d3a200ba55d543ddcac8dd&units=imperial';

async function forecastFetch() {
    try {
      const response = await fetch(furl);
      if (response.ok) {
        const data = await response.json();
        steve = data;
        displayForecastResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  forecastFetch();

  function displayForecastResults(weatherData) {
    const weatherSpan = document.getElementById('dayForecast');
    let html = "";
    
    const dateOptions = {weekday: 'short', month: 'long', day: 'numeric'};
    weatherData.list.forEach((forecastItem, index) => {
      if (index % 8 === 0) { // Only show 1 forecast per day
        const date = new Date(forecastItem.dt_txt);
        
        html += `<p><strong>${date.toLocaleDateString('en-US', dateOptions)}</strong></p>`;
        html += `<p><strong>Temp: </strong>${forecastItem.main.temp.toFixed(0)} °F</p>`;
        
        html += `<hr>`;
      }
    });
    weatherSpan.innerHTML = html;

  }











