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
        let windElement = document.querySelector("#wind")
        temperatureElement.innerHTML = response.data.main.temp;
        cityElement.innerHTML = response.data.name;
        humidityElement.innerHTML = response.data.main.humidity;
        windElement.innerHTML = response.data.wind.speed

        let dateElement = document.querySelector("#date");
        dateElement.innerHTML = formatDate(response.data.dt * 1000);
      }

      let key ="50f08580ddb58d03ac1e0e37f19dd297";
      let city = "San Francisco";
let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

axios.get(`${url}&appid=${key}`).then(displayTemperature);

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


let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);