// https://api.openweathermap.org/data/2.5/weather?q=germany&appid=94f20cf40b36b287c4318ad2cf9754ceunits=metric

const apiKey = "94f20cf40b36b287c4318ad2cf9754ce";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

const wearherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    
    if(response.status == 404){
        //Error Message 
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            wearherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main == "Clear"){
            wearherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main == "Rain"){
            wearherIcon.src = "images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle"){
            wearherIcon.src = "images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist"){
            wearherIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }    
}

searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
}); 


