import getData from "./helpers/getData.js"
import { PELICULAS } from "./helpers/urls.js"
import show from "./modules/show.js"
const templateFragment = document.getElementById("template").content
const container = document.getElementById("container")
document.addEventListener("DOMContentLoaded",async()=>{
    const result = await getData(PELICULAS)
    show(templateFragment,container,result)
})