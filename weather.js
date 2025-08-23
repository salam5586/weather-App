const apiKey = "ee502b712429d0b5421b633963c4e638";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){ 
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
    }else{
        var data = await response.json();
  

        document.querySelector(".city").innerHTML= data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp )+"°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML =data.wind.speed + "km/h";
        if(data.weather[0].main == "Clear"){
            weatherIcon.src ="clear.png"
        }else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "clouds.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src ="rain.png"
        }else if(data.weather[0].main == ""){
        weatherIcon.src ="rain.png"
    }
    
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})
searchBtn.addEventListener("click", ()=>{
    const city = searchBox.value;
    localStorage.setItem("lastcity", city);
    checkWeather(city)
})
window.onload = ()=>{
    const savecity = localStorage.setItem("lastrcity");
    if(savecity){
        checkWeather(savecity);
    }
}
    }
 
}

// searchBtn.addEventListener("click", ()=>{
//     checkWeather(searchBox.value)
// })
// searchBtn.addEventListener("click", ()=>{
//     const city = searchBox.value;
//     localStorage.setItem("lastcity", city);
//     checkWeather(city)
// })
// window.onload = ()=>{
//     const savecity = localStorage.setItem("lastrcity");
//     if(savecity){
//         checkWeather(savecity);
//     }
// }