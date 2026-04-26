const colorPicker=document.querySelector('#colorPicker')
const colorPreview=document.querySelector('#colorPreview')
const colorHistory=document.querySelector('#colorHistory')
const clearHistory=document.querySelector('#clearHistory')

function addcolor(){
   const selectedColor=colorPicker.value;
   colorPreview.style.backgroundColor=selectedColor
   const li=document.createElement('li')
   li.textContent=selectedColor
   colorHistory.appendChild(li).style.color=selectedColor
}
colorPicker.addEventListener('change', addcolor)
clearHistory.addEventListener('click', function(){
   colorHistory.innerHTML=''
   colorPreview.style.backgroundColor=transparent
})