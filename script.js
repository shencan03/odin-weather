
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

    return data
  }

  console.log(await getWeather())
}

const searchForm = document.getElementById("search-weather-form")
searchForm.addEventListener("submit", handleSubmit)
