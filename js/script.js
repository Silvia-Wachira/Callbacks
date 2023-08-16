//Event Bubbling
//Variables
const card = document.querySelector('.card'),
      infoCards = document.querySelector('.info-cart'),
      addCartBtn = document.querySelector('.add-to-cart')
      


 //Event Listeners
card.addEventListener('click', function(e) {
    console.log('You clicked the cart')
})

infoCards.addEventListener('click', function(e) {
    console.log('You clicked the Info cart')
})

addCartBtn.addEventListener('click', function(e) {

    console.log('You clicked the add-cart btn')
})
