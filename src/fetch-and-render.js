import createWeatherContainer from "./create-weather-container.js"
import { firstSearch, updateFirstSearch } from "./index.js"


export default async function fetchAndRender() {

  const handleSubmit = async (e) => {

    if(firstSearch){
      createWeatherContainer()
      updateFirstSearch()
    }

    e.preventDefault()
    const formInput = document.getElementById("search-weather-input")

    const getWeather = async () => {
      
      const apiKey = 'WYBLSPMR5E9HAWVM9VNC6T5AJ'
      const baseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

      const date = (new Date()).toISOString()
      const dateYMD = date.split("T")[0]
      const location = formInput.value
      
      const request = `${baseURL}${location}/${dateYMD}?timezone=Z&key=${apiKey}`

      const response = await fetch(request)
      const data = await response.json()
      
      const hour = parseInt(date.split("T")[1].split(":")[0])
      const weatherRightNow = data.days[0].hours[parseInt(hour)]

      return {
        resolvedAddress: data.resolvedAddress,
        temp: weatherRightNow.temp,
        conditions: weatherRightNow.conditions,
      }
    }

    
    const updateWeather = async () => {

      const weatherRightNow = await getWeather()

      const weatherHeroText = document.getElementById("weather-hero-text")
      weatherHeroText.textContent = weatherRightNow.resolvedAddress.charAt(0).toUpperCase() + weatherRightNow.resolvedAddress.substring(1)

      const fahToCel = (fah) => {
        return parseInt((fah - 32) * 5 / 9)
      }

      const weatherTemp = document.getElementById("temperature")
      weatherTemp.innerHTML = fahToCel(weatherRightNow.temp) + "&deg;C"

      const weatherCondition = document.getElementById("condition")
      weatherCondition.textContent = weatherRightNow.conditions

    }
    
    updateWeather()

  }

  const searchForm = document.getElementById("search-weather-form")
  searchForm.addEventListener("submit", handleSubmit)
}
