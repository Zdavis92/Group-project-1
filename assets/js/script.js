// Getting HTML elements and saving them as variables
var lat = ""
var lon = ""
var cityName = ""
var cityNameEl = document.querySelector("#currentCity");
var checkWeatherBtn = document.querySelector("#checkWeather");
var userNameInput = document.querySelector("#userName");
var userWeightInput = document.querySelector("#userWeight");
var userBodyfatInput = document.querySelector("#userBodyfat");
var userWeightGoalInput = document.querySelector("#weightGoal");
var userBodyfatGoalInput = document.querySelector("#bodyfatGoal");
var saveCurrentBtn = document.querySelector("#saveBtn");
var saveGoalsBtn = document.querySelector("#saveGoals");
// Js objects to store info
var currentCon = {
    id: "",
    temp: "",
    wind: "",
    humidity: "",
    UVIndex: ""
}

var userCurrent = {
    name: "",
    weight: "",
    bodyfat: "",
}

var userGoals = {
    weightGoal: "",
    bodyfatGoal: "",
}

// gets the input values of the current user stats and adds them to local storage.
var saveUserCurrent = function() {
    var userName = userNameInput.value
    var userWeight = userWeightInput.value
    var userBodyfat = userBodyfatInput.value

    userCurrent.name = userName
    userCurrent.weight = userWeight
    userCurrent.bodyfat = userBodyfat

    localStorage.setItem("userCurrent", JSON.stringify(userCurrent));

    userBodyfatInput.value = ""
    userWeightInput.value = ""
    userBodyfatInput.value = ""
}

// get the input values of the users goals and adds them to local storage
var saveUserGoals = function() {
    var userWeightGoal = userWeightGoalInput.value
    var userBodyfatGoal = userBodyfatGoalInput.value

    userGoals.weightGoal = userWeightGoal
    userGoals.bodyfatGoal = userBodyfatGoal

    localStorage.setItem("userGoals", JSON.stringify(userGoals));

    userWeightGoalInput.value = ""
    userBodyfatGoalInput.value = ""
}

// gets the users current stats from local storage
var loadUserCurrent = function() {
    userCurrent = JSON.parse(localStorage.getItem("userCurrent"));
}

// gets the users goals form local storage
var loadUserGoals = function() {
    userGoals = JSON.parse(localStorage.getItem("userGoals"));
}

// function fetchs api to get lat and lon of the searched city and calls function to get the weather data
var getCityLatLon = function(cityName) {
    cityName = cityNameEl.value
    if (cityName) {
        var apiCity = "https://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&limit=1&appid=7c0bd0cf3800dbf86808087317e3514f"
        fetch(apiCity).then(function(response) {
            response.json().then(function(data){
                lat = data[0].lat
                lon = data[0].lon
                getWeatherData(lat, lon);
            })
        })
    }
    else {
        alert("Enter a City Name")
    }
}

// calls the api to weather data for current and forecast and saves the data in objects. Calls function to display the data
var getWeatherData = function(lat, lon) {
    var apiLatLon = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly,alerts&appid=7c0bd0cf3800dbf86808087317e3514f"
    fetch(apiLatLon).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
            currentCon.id = data.current.weather[0].id
            currentCon.temp = data.current.temp
            currentCon.wind = data.current.wind_speed
            currentCon.humidity = data.current.humidity
            currentCon.UVIndex = data.current.uvi
            displayWeather();
        })
    })
}

// function dynamicly creates elements and added weather data to them. Then displays them on the screen.
var displayWeather = function() {
    var currentCityEl = document.querySelector("#currentWeather");
    var currentCityUvEl = document.createElement("p");
    currentCityEl.innerHTML = ""
    var currentCityNameEl = document.createElement("p");
    var currentCityTempEl = document.createElement("p");
    var currentCityWindEl = document.createElement("p");
    var currentCityHumidityEl = document.createElement("p");
    currentCityNameEl.textContent = cityName
    currentCityTempEl.textContent = "Temp: " + currentCon.temp + "°F";
    currentCityWindEl.textContent = "Wind: " + currentCon.wind + "MPH";
    currentCityHumidityEl.textContent = "Humidity: " + currentCon.humidity + "%";
    currentCityUvEl.textContent = "UV Index: " + currentCon.UVIndex;
    currentCityEl.appendChild(currentCityNameEl)
    currentCityEl.appendChild(currentCityTempEl)
    currentCityEl.appendChild(currentCityWindEl)
    currentCityEl.appendChild(currentCityHumidityEl)
    currentCityEl.appendChild(currentCityUvEl)
    if (parseInt(currentCon.id) > 799) {
        var runWeather = document.createElement("p")
        runWeather.textContent = "Look like good weather for a run!"
        currentCityEl.appendChild(runWeather);
    }
}

// saveCurrentBtn.addEventListener("click", saveUserCurrent);
checkWeatherBtn.addEventListener("click", getCityLatLon);
// saveGoalsBtn.addEventListener("click", saveUserGoals);
