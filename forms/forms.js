const form=document.querySelector("#formRegistration")


const error=document.querySelector("#error")

form.addEventListener("submit",(event)=>{
    event.preventDefault()
    
const userName=document.querySelector("#userName").value;
const email=document.querySelector("#email").value;
const password=document.querySelector("#password").value;
const confirmPassword=document.querySelector("#cornfirmPassword").value;
const registerBtn=document.querySelector("#registerBtn")

if(userName===""){
    console.log("Username is required!")
    error.textContent="Username is required!"
    return
}
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
if(!email.match(emailRegex)){
    error.textContent="Invalid email format!"
    return
}
if(password.length<8){
    error.textContent="Password must be at least 6 characters long!"
    return
}
if(password!==confirmPassword){
    error.textContent="Passwords do not match!"
    return
}
console.log("Registration successful!")

error.textContent="Registration successful!"
})

