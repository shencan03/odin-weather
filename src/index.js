import fetchAndRender from "./fetch-and-render.js"
import "./style.css"

export let firstSearch = true

export function updateFirstSearch() {
  firstSearch = false
}

fetchAndRender()
