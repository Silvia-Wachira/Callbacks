//Delegation

document.body.addEventListener('click', removeProductFromCart)

function removeProductFromCart(e) {
    console.log(e.target.classList)

    if(e.target.classList.contains('remove')){
        
        e.target.parentElement.parentElement
    } 
}

const courseList = document.querySelector('#courses-list')

courseList.addEventListener('click', addToCart )

function addToCart(e) {
    if(e.target.classList.contains(add-to-cart)){
        console.log('Course added!!');
    }
}