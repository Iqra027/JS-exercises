const colorSelect=document.querySelector("#colorSelect")
const selectedColor=document.querySelector("#selectedColor")

const userName=document.querySelector("#userName")
const currentUsername=document.querySelector("#currentUsername")

userName.addEventListener("change",function(){
    console.log("changed",userName.value)
    currentUsername.textContent=`Hello ${userName.value}`
})

// colorSelect.addEventListener("change",function(){
//     console.log("changed",colorSelect.value)
//     selectedColor.textContent=colorSelect.value
// })

