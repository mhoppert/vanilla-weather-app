let now = new Date();

let dateTime = document.querySelector("#dateTime");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let day = days[now.getDay()];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
 ];
 let month = months[now.getMonth()];

dateTime.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes}`;

function displayTemp(response){
    document.querySelector("#city").innerHTML = response.data.name;
    let temperatureC = Math.round(response.data.main.temp);
    document.querySelector("#temp-current").innerHTML = `${temperatureC}`;
    let description = document.querySelector("#condition");

    celsiusTemp = response.data.main.temp;

    description.innerHTML = response.data.weather[0].description;
    let humidityCurrent = document.querySelector("#humidity");
    humidityCurrent.innerHTML = response.data.main.humidity;
    let windElement = document.querySelector("#windSpeed");
    windElement.innerHTML = Math.round(response.data.wind.speed);
    let iconElement = document.querySelector("#iconWeather");
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

let celsiusTemp = null;

function search(event){
    event.preventDefault();
    let apiKey = "3551653c49fc76dab5c8b51298eb4f65";
    let city = document.querySelector("#search-text-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    axios.get(apiUrl).then(displayTemp);
    
}

function displayFarenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temp-current");
    let farenTemp = (celsiusTemp * 9)/ 5 + 32;
    temperatureElement.innerHTML = Math.round(farenTemp);
}



let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let farenLink = document.querySelector("#F-color");
farenLink.addEventListener("click", displayFarenheitTemperature);