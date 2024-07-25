const show=(template, container, datos, id)=>{
    let fragment = document.createDocumentFragment()

    datos.forEach((item)=>{
        const {Title,Description,Poster}=item
        console.log (item)
        template.querySelector("img").setAttribute("src",Poster)
        template.querySelector("img").setAttribute("alt",Title)
        template.querySelector("h5").textContent = Title
        template.querySelector("p").setAttribute("Description", Description)

        const clone = template.cloneNode(true)

        fragment.appendChild(clone)
    })
    container.appendChild(fragment)
}
export default show