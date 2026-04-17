

function changeImage(){
    // image.src=prompt("Enter new image url");
    // console.log(image.src)
    const image=document.querySelector("#image")
    const newImageUrl=prompt("Enter new image url")
    image.setAttribute("src",newImageUrl)

    //style
    const styleImage=prompt("Enter new image width")
    image.style.width=styleImage+"px"
    
    const styleImageHeight=prompt("Enter new image height")
    image.style.height=styleImageHeight+"px"

    //border radius
    const borderRadius=prompt("Enter new border radius")
    image.style.borderRadius=borderRadius+"px"
     //border
     const borderSize=prompt("Enter new border size")
     image.style.border=borderSize+"px solid"
     //border color         
     const borderColor=prompt("Enter new border color")
     image.style.borderColor=borderColor


}