let search = document.querySelector('#search');
search.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        getWeather();
    }
});
let city = document.querySelector('#city');
let weather = document.querySelector('#weather');
let condition = document.querySelector('#condition');
let condition_img = document.querySelector('#condition_img');
function loadContent(weatherData){
    city.textContent = weatherData.location.name + ', ' + weatherData.location.country;
    weather.textContent = weatherData.current.temp_c + '⁰C';
    condition.textContent = weatherData.current.condition.text;
    condition_img.src = weatherData.current.condition.icon;
}
async function getWeather(){
    const search = document.querySelector('#search').value;
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b3ab2ef692c42a995a112723242502&q=${search}&aqi=no`, {mode: 'cors'}
    );
    const weatherData = await data.json();
    console.log(weatherData);
    loadContent(weatherData);
}