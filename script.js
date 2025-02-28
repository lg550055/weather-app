document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your OpenWeather API key
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.cod === 200) {
            // Show weather data
            document.getElementById('cityName').textContent = `Weather in ${data.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        alert('Error fetching weather data');
    }
}

