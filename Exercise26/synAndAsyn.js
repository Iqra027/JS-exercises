// Synchronous example
// function userDataSync() {
//     alert("Hello World")
//     return { id: 1, name: 'John' };
// }

// const serInfo=userDataSync()
// console.log(serInfo)
// console.log("it should be first to console but its synchrounous")


// Asynchronous example
function userDataSync(callback) { 
  setTimeout(() => {
    const datauser = { id: 2, name: 'David' };
    callback(datauser); 
  }, 3000);
}

userDataSync(function(datauser) {
    console.log(datauser);
} )
console.log("it should be first to console because its Asynchrounous")

//how to console this function

