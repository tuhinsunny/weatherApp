const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=d29567565d42ca644d79e933970f3aa7&units=metric&q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function weather(city) {
    const newApi = `${apiUrl}${city}`;
    const response = await fetch(newApi);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        const data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
        if (data.weather[0].main == "Clouds")
            weatherIcon.src = "images/clouds.png"
        else if (data.weather[0].main == "Clear")
            weatherIcon.src = "images/clear.png"
        else if (data.weather[0].main == "Drizzle")
            weatherIcon.src = "images/drizzle.png"
        else if (data.weather[0].main == "Rain")
            weatherIcon.src = "images/rain.png"
        else if (data.weather[0].main == "Mist")
            weatherIcon.src = "images/mist.png"
        else if (data.weather[0].main == "Snow")
            weatherIcon.src = "images/snow.png"

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    weather(searchBox.value);
})