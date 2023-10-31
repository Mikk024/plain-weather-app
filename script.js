const button = document.getElementById('button')

const handleClick = () => {
    let input = document.getElementById('inputText')
    let value = input.value
    fetch(apiKey)
        .then(response => {
            return response.json()
        }).then(data => {
            const weatherCard = document.getElementById('weatherCard')
            weatherCard.innerHTML = `
                <img src="${data.current.condition.icon}" class="mx-auto w-56 h-56" />
                <p class="text-4xl text-center">${data.location.name}</p>
                <p class="text-3xl text-center">${data.current.temp_c} °C</p>
                <div class="justify-between flex mt-10 text-3xl">
                    <p><i class="fa-solid fa-water"></i> ${data.current.humidity}%</p>
                    <p><i class="fa-solid fa-wind"></i> ${data.current.wind_kph}km/h</p>
                </div>
                <div class="justify-between flex text-2xl">
                    <p>Humidity</p>
                    <p>Wind Speed</p>
                </div>
            
            `

            console.log(data)
        })
}

button.addEventListener('click', handleClick)

