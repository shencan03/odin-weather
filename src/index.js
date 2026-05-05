import fetchAndRender from "./fetch-and-render.js"
import "./style.css"
import sunny from "./image/sunny.jpg"

const weatherHeroContainer = document.querySelector(".weather-hero-container")
const sunnyImg = document.createElement("img")
sunnyImg.src = sunny
sunnyImg.id = "sunny"
weatherHeroContainer.after(sunnyImg)

fetchAndRender()
