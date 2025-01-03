const appKey = "59b92e19f5ad46fc92bee4cc239167c5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${appKey}`);


    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    let data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "src/images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "src/images/clear.png";
    }else if(data.weather[0].main == "Rain"){    
        weatherIcon.src = "src/images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "src/images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "src/images/mist.png";
    }


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})