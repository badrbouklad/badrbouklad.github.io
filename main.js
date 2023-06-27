const city1 = document.querySelector('.city');
const humidity = document.querySelector('.day');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const degree = document.querySelector('.degree');




function search(e) {
    if(event.key === 'Enter') {
        let city = e.value;
        e.value = ''
        console.log(city)
        getWeather2(city)
    }
}

//Async & Await Methode
async function getWeather(city){
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=40fc6f06cf77470888a140052232306&q=${city}`)
    const data = await response.json();
    city1.innerHTML = data.location.name;
    humidity.innerHTML = data.current.humidity;
    date.innerHTML = data.location.localtime.split(' ')[0];
    time.innerHTML = data.location.localtime.split(' ')[1];
    degree.innerHTML = data.current.feelslike_c;
    console.log(data)
}
//Promise Methode
function getWeather2(city) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=40fc6f06cf77470888a140052232306&q=${city}`)
    .then(response => response.json())
    .then(data => {
        city1.innerHTML = data.location.name;
        humidity.innerHTML = data.current.humidity;
        date.innerHTML = data.location.localtime.split(' ')[0];
        time.innerHTML = data.location.localtime.split(' ')[1];
        degree.innerHTML = data.current.feelslike_c;
        console.log(data)
    })
}