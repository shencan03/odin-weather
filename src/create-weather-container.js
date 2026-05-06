export default function createWeatherContainer() {
  const weatherContainer = document.createElement("div")
  weatherContainer.classList.add("weather-container")

  const weatherHeroContainer = document.createElement("div")
  weatherHeroContainer.id = "weather-hero-container"

  const weatherHeroTextSpan = document.createElement("span")
  weatherHeroTextSpan.id = "weather-hero-text"


  const weatherFooterContainer = document.createElement("div")
  weatherFooterContainer.classList.add("weather-hero-container")

  const weatherFooterTempSpan = document.createElement("span")
  weatherFooterTempSpan.id = "temperature"

  const weatherFooterConditionSpan = document.createElement("condition")
  weatherFooterConditionSpan.id = "condition"

  weatherFooterContainer.appendChild(weatherFooterTempSpan)
  weatherFooterContainer.appendChild(weatherFooterConditionSpan)

  weatherHeroContainer.appendChild(weatherHeroTextSpan)

  weatherContainer.appendChild(weatherHeroContainer)
  weatherContainer.appendChild(weatherFooterContainer)

  const main = document.querySelector("main")
  main.appendChild(weatherContainer)
}
