
const handleSubmit = async (e) => {
  e.preventDefault()
  const formInput = document.getElementById("search-weather-input")

  const getWeather = async () => {
    
    const apiKey = 'WYBLSPMR5E9HAWVM9VNC6T5AJ'
    const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

    const date = new Date()
    const currentDate = date.toISOString().split("T")[0]

    const location = formInput.value
    const request = baseURL + location + "/" + currentDate + "/" + "?key=" + apiKey

    const response = await fetch(request)
    const data = await response.json()
    
    const localHourRounded = date.getMinutes() >= 30 ? date.getHours() + 1 : date.getHours()
    const weatherRightNow = data.days[0].hours[localHourRounded]

    // return data.days[0].hours[localHourRounded]

    return {
      time: localHourRounded,
      resolvedAddress: data.resolvedAddress,
      temp: weatherRightNow.temp,
      conditions: weatherRightNow.conditions,
    }
  }

  
  const updateWeather = async () => {
    const weatherRightNow = await getWeather()

    const weatherHeroText = document.getElementById("weather-hero-text")
    weatherHeroText.textContent = weatherRightNow.resolvedAddress.charAt(0).toUpperCase() + weatherRightNow.resolvedAddress.substring(1)

    const weatherTemp = document.getElementById("temperature")
    weatherTemp.textContent = weatherRightNow.temp + "fahrenheit"

    const weatherTime = document.getElementById("time")
    weatherTime.textContent = weatherRightNow.time
  }
  
  updateWeather()

}

const searchForm = document.getElementById("search-weather-form")
searchForm.addEventListener("submit", handleSubmit)
