// const buttonTwo = document.querySelector('.btn-2')

// function alertBtn() {
//     alert('I also love JavaScript');
// }

// buttonTwo.addEventListener('click', alertBtn)

//mouseover event

// const newBackgroundColor = document.querySelector(".box-3")

// function changeBgColor() {
//     newBackgroundColor.style.backgroundColor = 'red';
// }

// newBackgroundColor.addEventListener('mouseover', changeBgColor)

// let name = prompt("What's your name?");
// document.getElementById('welcome').innerHTML = "welcome:" + name


// const todo = ['Homework', 'Food', 'Project', 'Learn JS']

// for(let i = 0; i < todo.length; i++) {
//     console.log(todo[i]);
// }

// todo.forEach(function(assignment, index){
//     console.log(`${index}: ${assignment}`)
// })


const shoppingCart = [
    {id: 1, product: 'Book'},
    {id: 2, product: 'Shirt'},
    {id: 3, product: 'Album'}
];

const productName = shoppingCart.map(function(productName){
    return productName.product;
});

console.log(productName)
