function fetchUserData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const datauser = true;
            if(datauser){
                resolve({ id: 1, name: 'John' });
            } else {
                reject(new Error('Failed to fetch user data'));
            }
        }, 2000);
    }
    )
}
// fetchUserData()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });

async function DisplayUserData(){
    try{   
        const user= await fetchUserData();
        console.log(user);

    }catch(error){
        console.error(error);
    }
}   

DisplayUserData();

//Json lesson

// object to json 
const user = {  
    id: 1,
    name: 'John',
    age:30
}; 
console.log(user); 
const jsonString = JSON.stringify(user);
console.log(jsonString);
//json to object
const obj = JSON.parse(jsonString);
console.log(obj);