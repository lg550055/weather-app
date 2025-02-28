document.getElementById('getWeatherBtn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'a9150254943540088b851051252802';
    // Expected obj has two fields: location and current, each with a number of k, v pairs
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        if (data.location.name !== null) {
            // Show weather data
            document.getElementById('cityName').textContent = `Weather in ${data.location.name}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_f}°F`;
            document.getElementById('description').textContent = `Condition: ${data.current.condition.text}`;
        } else {
            alert('City not found');
        }
    } catch (error) {
        alert('Error fetching weather data' + error);
    }
}

