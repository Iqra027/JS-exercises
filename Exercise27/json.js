// //Json lesson

// // object to json 
// const user = {  
//     id: 1,
//     name: 'John',
//     age:30
// }; 
// console.log(user); 
// const jsonString = JSON.stringify(user);
// console.log(jsonString);
// //json to object
// const obj = JSON.parse(jsonString);
// console.log(obj);


async function jsonData(){
    try{
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch('data.json');
        console.log(response);
        //we have to change the response to json format otherwise we will get a promise object instead of the actual data and we can't read the data without converting it to json format 
        const data = await response.json();
        console.log(data);
        console.log(data.name);
    }catch(error){
        console.error(error);
    }

}
jsonData();