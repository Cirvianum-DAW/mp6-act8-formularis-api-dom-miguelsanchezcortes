document.getElementById('formulari').addEventListener('submit', async function (event) {
    event.preventDefault();
    const ciutat = document.getElementById('ciutat').value;
    const pais = document.getElementById('pais').value;
    const cPostal = document.getElementById('cpostal').value;
    if(!ciutat){
        alert('Has d\'escriure una ciutat');
    }
    try{
        const apiKey = 'b53d987ca3b844f9b5a143427241004';
        const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${ciutat}&lang=es`;
        const forecasturl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${ciutat}&days=2&lang=es`;
        const [current,forecast] = Promise.all([fetch(url),fetch(forecasturl)]);
        const [currentData,forecastData] = await Promise.all([current.json(),forecast.json()]);

        const weatherData = {
            current:{
                city: currentData.location.name,
                country: currentData.location.country,
                region: currentData.location.region,
                weatherIcon: currentData.current.condition.icon,
                temperature: currentData.current.temp_c,
                weatherDescription: currentData.current.condition.text,
            },
            forecast:{

            }
        }


    }catch(error){}


    getWeather();
})




//www.weatherapi.com
//API key: b53d987ca3b844f9b5a143427241004
//http://api.weatherapi.com/v1/current.json?key=b53d987ca3b844f9b5a143427241004&q=$ciutat&aqi=no




async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const temps = data.current.temp_c;
    const condicio = data.current.condition.text;
    const icon = data.current.condition.icon;
    document.getElementById('temps').innerHTML = temps;
    document.getElementById('condicio').innerHTML = condicio;
    document.getElementById('icon').src = icon;

}


