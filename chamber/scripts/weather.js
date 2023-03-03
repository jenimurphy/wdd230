const currentTemp = document.getElementById("temp").innerHTML;
console.log(currentTemp);
const currentWind = document.getElementById("windspeed").innerHTML;
console.log(currentWind);

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
document.getElementById('windchill').innerHTML = wChill;
