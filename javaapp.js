function formatDate(timestamp) {


let now = new Date(timestamp);

      let h6 = document.querySelector("h6");

      let date = now.getDate();
      let hours = now.getHours();
      if (hours < 10) {hours = `0${hours}`};
      let minutes = now.getMinutes();
      if (minutes < 10) {minutes = `0${minutes}`};
      let year = now.getFullYear();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[now.getDay()];

      let months = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      let month = months[now.getMonth()];

      h6.innerHTML = `${day} ${month} ${date}, ${hours}:${minutes}, ${year}`; }

      function search(event) {
        event.preventDefault(); 

        let searchInput = document.querySelector("#search-text-input");
        console.log(searchInput.value);
        
        let h5 = document.querySelector("h5");
        h5.innerHTML= `${searchInput.value}`
    }
      let form = document.querySelector("form");
      form.addEventListener("submit", search);

      function displayTemperature(response){
        let temperatureElement = document.querySelector("#temp");
        let cityElement = document.querySelector("#city");
        let humidityElement = document.querySelector("#humidity");
        let windElement = document.querySelector("#wind");
        let iconElement = document.querySelector("#icon");
        let descriptionElement = document.querySelector("#description");
        temperatureElement.innerHTML = response.data.main.temp;
        cityElement.innerHTML = response.data.name;
        humidityElement.innerHTML = response.data.main.humidity;
        windElement.innerHTML = response.data.wind.speed;

        let dateElement = document.querySelector("#date");
        dateElement.innerHTML = formatDate(response.data.dt * 1000);
        iconElement.setAttribute(
          "src",
          `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        );
        iconElement.setAttribute("alt", response.data.weather[0].description);
        descriptionElement.innerHTML = response.data.weather[0].description;
    
      }
      function search(city) {

let key ="50f08580ddb58d03ac1e0e37f19dd297";
      
let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

axios.get(url).then(displayTemperature); }

function showTemperature(response) {
    console.log(response.data); 
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = `${response.data.main.temp}°C`;
}




function showPosition(position) {
  let h5 = document.querySelector("h5");
  h5.innerHTML = `your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
function getCurrentPosition(){
  navigator.geolocation.getCurrentPosition(showPosition);
}


function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");

  celsiusLink.classList.remove("active");
  fahrenheitLink.classList.add("active");
  let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
}

function displayCelsiusTemperature(event) {
  event.preventDefault();
  celsiusLink.classList.add("active");
  fahrenheitLink.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("#search");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", displayCelsiusTemperature);

search("New York");