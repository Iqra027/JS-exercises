
// const id=document.getElementById("title")
// console.log(id)
// const content=document.getElementsByClassName("content")
// console.log(content)
// const span=document.getElementsByTagName("span")
// console.log(span)
// const button=document.getElementsByTagName("button")
// console.log(button)


// const titles=document.querySelectorAll("h2")
// console.log(titles)

// const contents=document.querySelectorAll(".content")
// console.log(contents)

// const spans=document.querySelector("span")
// console.log(spans)

// const buttons=document.querySelector("button")
// console.log(buttons)

//Exercise 33

// function save() {
//     const saveButton=document.querySelector(".saveButton")
//     saveButton.textContent="Saved already"
//     saveButton.style.backgroundColor="green"
// }

// exercise 34

const list=document.querySelector(".list")

function AddnewItem() {
    const NewItem=document.createElement("li")
    NewItem.textContent="New Item"
    list.appendChild(NewItem)
    console.log(list)

}

function DeleteItem() {
    if(list.lastChild){
        list.removeChild(list.lastChild)
    }else{
        alert("No items to delete")
    }
    

}
