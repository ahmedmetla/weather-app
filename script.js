// Your existing code - weather icon change removed
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=e681f1249c662e1756f11cfabdeede62&units=metric";
let temp = document.getElementById("temp");
let city = document.getElementById("city");
let humidity = document.getElementById("dh");
let wind = document.getElementById("dw");
let searchBtn = document.getElementById("btn");
let cityInput = document.getElementById("cityInput");

// Your original function - NO weather icon update
async function checkweather(cityName = "Bangalore") {
    try {
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e681f1249c662e1756f11cfabdeede62&units=metric`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();
        console.log(data);
        
        // Update weather information (temperature, city, humidity, wind)
        temp.innerHTML = Math.round(data.main.temp) + "°C";
        city.innerHTML = data.name; 
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
        
        // ❌ NO weather icon update - icon will remain day.svg always
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        temp.innerHTML = "Error";
        city.innerHTML = "City not found";
        humidity.innerHTML = "--%";
        wind.innerHTML = "-- km/h";
    }
}

// Search functionality
searchBtn.addEventListener("click", function() {
    let cityName = cityInput.value.trim();
    if(cityName !== "") {
        checkweather(cityName);
    }
});

// Enter key functionality
cityInput.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        let cityName = cityInput.value.trim();
        if(cityName !== "") {
            checkweather(cityName);
        }
    }
});

// Initial load with default city
checkweather("Bangalore");