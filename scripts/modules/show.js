const show=(template, container, datos, id)=>{
    let fragment = document.createDocumentFragment()

    datos.forEach((item)=>{
        const {Title,Description,Poster,Type}=item

        if (Type=="Adulto"){
            template.querySelector("img").setAttribute("src",Poster)
            template.querySelector("img").setAttribute("alt",Title)
            template.querySelector("h5").textContent = Title
            template.querySelector("p").textContent= Description
            template.querySelector("p").setAttribute("Type",Type)
    
            const clone = template.cloneNode(true)
    
            fragment.appendChild(clone)
            
        }
        console.log (item)
        
    })
    container.appendChild(fragment)
}
export default show