import fetchAndRender from "./fetch-and-render.js"
import "./style.css"
import createWeatherContainer from "./create-weather-container.js"

let firstSearch = true

if (firstSearch) {
  createWeatherContainer()
  firstSearch = false
}

fetchAndRender()
