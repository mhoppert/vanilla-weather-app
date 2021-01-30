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
    let temperatureF = Math.round(response.data.main.temp);
    document.querySelector("#dayTemp").innerHTML = `${temperatureF}°F`;
}


function search(event){
    event.preventDefault();
    let apiKey = "3551653c49fc76dab5c8b51298eb4f65";
    let city = document.querySelector("#search-text-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;
    
    axios.get(apiUrl).then(displayTemp);
    
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

