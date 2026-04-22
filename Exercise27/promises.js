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

