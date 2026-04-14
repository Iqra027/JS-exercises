const students =[
    {name: "Ahmed", id:100, age: 20},
    {name: "Ali", id:101, age: 22},
    {name: "Anas", id:102, age: 19},
]

for (let student of students){
    console.log(student["name"]);
    console.log(student["id"]);
    console.log(student["age"]);
}
console.log("---")
for(const key in students){
    console.log(students[key]);
}