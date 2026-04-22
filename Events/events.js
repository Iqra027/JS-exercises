const button=document.querySelector("#button")
const removebutton=document.querySelector("#removebutton")
// button.addEventListener("click",function(){
    // alert("Hello World")
// })

function handleClick(){
    console.log("button clicked")
}

button.addEventListener("click",handleClick)


    removebutton.addEventListener("click",function(){
    button.removeEventListener("click",handleClick)
    console.log("removed the event")
})








