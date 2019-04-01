console.log("Hola mundo!")



fetch("http://airemad.com/api/v1/station")
    .then(res => res.json())
    .then(getAllWeather)
    .catch(console.warn)


function getWeatherDetails (id) {
    const url = `http://airemad.com/api/v1/weather/${id}`
    return fetch(url).then(res => res.json())

}


function stationTemplate (station) {
    const info = station.list[0]
    const temperatura = info.main.temp
    const description = info.weather[0].description
    return `<p>- T: ${temperatura}ºC, ${description}</p>`
}

function magicFactor (weatherData) {
    document.body.innerHTML = weatherData.map(stationTemplate).join("")
}

function getAllWeather(stations) {
    console.log("-- ahora si....",stations)
    Promise
        .all(stations.map(station => getWeatherDetails(station.id)))
        .then(magicFactor)
}