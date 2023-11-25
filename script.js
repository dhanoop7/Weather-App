function getApiCall(){
    let inputText = document.getElementById("text-input")
    let inputValue = inputText.value

    fetch(`http://api.weatherapi.com/v1/current.json?key=593b379edcce41a1b2b153424232011&q=${inputValue}`)
    .then((response) =>{
        return response.json()
    }).then((data) =>{
        // console.log(data);
        DisplayWeather(data.current, data.location)
    }).catch((error) =>{
        return console.log(error)
    });
}

function DisplayWeather(current, location){
    const container = document.getElementById("container")

    let displayWeather = `
    <h1 class="head">${location.name}</h1>
    <div class="box-2">
    <div class="box-2-degree">
        <h1>${current.temp_c}°C</h1>
        <p>${location.name}, ${location.region}</p>
    </div>
    <div class="box-2-tempicon">
        <img src="${current.condition.icon}" class="temp-icon">
    </div>
</div>

<div class="box-3">
<div class="box-3-windspd">
    <p>Wind Speed</p>
    <img src="/winds-weather-symbol (2).png" alt="">
    <p>${current.wind_kph} km/h</p>
</div>

<div class="box-3-humidity">
    <p>Humidity</p>
    <img src="/humidity.png" alt="">
    <p>${current.humidity}%</p>
</div>
</div>
`

container.innerHTML = displayWeather
}

