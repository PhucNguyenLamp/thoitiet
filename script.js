let search = document.querySelector('#search');
search.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        getWeather();
    }
});
let weather = document.querySelector('#weather');
async function getWeather(){
    const search = document.querySelector('#search').value;
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=3b3ab2ef692c42a995a112723242502&q=${search}&aqi=no`, {mode: 'cors'}
    );
    const weatherData = await data.json();
    console.log(weatherData);
    weather.textContent = weatherData.current.temp_c + '⁰C';
}