let search = document.querySelector('#search');
search.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        getWeather();
    }
});
search.addEventListener('click', () => {
    search.value = '';
});
let city = document.querySelector('#city');
let weather = document.querySelector('#weather');
let condition = document.querySelector('#condition');
let condition_img = document.querySelector('#condition_img');
let uv = document.querySelector('#uv');
let wind = document.querySelector('#wind');
let rain = document.querySelector('#rain');
let feels_like = document.querySelector('#feels_like');
let humidity = document.querySelector('#humidity');
let pressure = document.querySelector('#pressure');
let is_day;
let last_updated = document.querySelector('#last_updated');

function loadContent(weatherData){
    city.textContent = weatherData.location.name + ', ' + weatherData.location.country;
    weather.textContent = weatherData.current.temp_c + '⁰C';
    condition.textContent = weatherData.current.condition.text;
    condition_img.src = weatherData.current.condition.icon;
    uv.textContent = 'UV Index: ' + weatherData.current.uv;
    wind.textContent = 'Wind: ' + weatherData.current.wind_kph + ' km/h';
    rain.textContent = 'Rain: ' + weatherData.current.precip_mm + ' mm';
    feels_like.textContent = 'Feels Like: ' + weatherData.current.feelslike_c + '⁰C';
    humidity.textContent = 'Humidity: ' + weatherData.current.humidity + '%';
    pressure.textContent = 'Pressure: ' + weatherData.current.pressure_mb/1000 + ' hPa';
    is_day = weatherData.current.is_day;
    const date = new Date(weatherData.current.last_updated);
    last_updated.textContent = 'Last Updated: ' + date.getHours() + ':' + date.getMinutes() + ' ' + (date.getHours() >= 12 ? 'PM' : 'AM');
}
async function getWeather(){
    const search = document.querySelector('#search').value;
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b3ab2ef692c42a995a112723242502&q=${search}&aqi=no`, {mode: 'cors'}
    );
    const weatherData = await data.json();
    console.log(weatherData);
    loadContent(weatherData);
}
getWeather();