function getWeather() {
    let cityInput = document.querySelector("#city");
    let city = cityInput.value.trim();
    let tempDiv = document.querySelector("#temp-div");
    let weatherInfo = document.querySelector("#weather-info");
    // let iconImg = document.querySelector("#weather-icone");
    let container = document.querySelector("#weather-container");

    if (city === "") {
        tempDiv.innerHTML = "Please enter a city name.";
        weatherInfo.innerHTML = "";
        iconImg.style.display = "none";
        return;
    }

  
    container.style.opacity = "0";
    container.style.transform = "translateY(-20px)";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=583324e03ae850c3564d60006371da2b&units=metric`)
    .then(res => res.json())
    .then(data => {
        if (data.cod !== 200) {
            throw new Error("City not found");
        }

        function convertTime(unix) {
            let date = new Date(unix * 1000);
            return date.toLocaleTimeString();
        }

        let sunrise = convertTime(data.sys.sunrise);
        let sunset = convertTime(data.sys.sunset);

        let now = new Date();
        let currentDate = now.toLocaleDateString();
        let currentTime = now.toLocaleTimeString();

        setTimeout(() => {
            tempDiv.innerHTML = `
                <strong>${data.name}, ${data.sys.country}</strong>
               <br>
                Temp: ${data.main.temp}°C
            `;

            weatherInfo.innerHTML = `
                <p>${data.weather[0].main}</p>
                <p>Wind Speed: ${data.wind.speed} km/h</p>
               
                <p>Sunrise: ${sunrise}</p>
                <p>Sunset: ${sunset}</p>
            `;

            // iconImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            // iconImg.style.display = "block";

            container.style.opacity = "1";
            container.style.transform = "translateY(0)";
        }, 300);

        cityInput.value = "";
    })
    .catch(err => {
        tempDiv.innerHTML = "City not found!";
        weatherInfo.innerHTML = "";
       container.style.opacity = "1";
        container.style.transform = "translateY(0)";
    });
}
