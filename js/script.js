const localStorageContent = localStorage.getItem('name')


let names;
if(localStorageContent === null){
    names = [];
} 

console.log(names)

const myArray = [1, 2, 3];

console.log(JSON.stringify(myArray))

console.log(localStorageContent);
