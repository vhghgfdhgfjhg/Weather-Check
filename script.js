const apikey = "cb95e0fc8f57d2e35e83c252c36a7407";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon");
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city) {
    const response = await fetch(apiurl + city + ` &appid=${apikey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "img/clouds.png"
    } else if(data.weather[0].main == 'Clear'){
        weatherIcon.src = "img/clear.png"
    }else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "img/rain.png"
    }else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "img/drizzle.png"
    }else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "img/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
}

searchbtn.addEventListener("click", () =>{
    checkweather(searchbox.value);
})

