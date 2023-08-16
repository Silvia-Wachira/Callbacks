//Event Bubbling
//Variables
const card = document.querySelector('.card'),
      infoCards = document.querySelector('.info-cart'),
      addCartBtn = document.querySelector('.add-to-cart')
      


 //Event Listeners
card.addEventListener('click', function(e) {
    console.log('You clicked the cart')
    e.stopPropagation();
})

infoCards.addEventListener('click', function(e) {
    console.log('You clicked the Info cart')
    e.stopPropagation();

})

addCartBtn.addEventListener('click', function(e) {

    console.log('You clicked the add-cart btn')
    e.stopPropagation();

})
