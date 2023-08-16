//Event Bubbling
//Variables
const card = document.querySelector('.card'),
      infoCards = document.querySelector('.info-card'),
      addCartBtn = document.querySelector('.add-to-cart')
      


 //Event Listeners
card.addEventListener('click', function(e) {
    console.log('You clicked the card')
})

infoCards.addEventListener('click', function(e) {
    console.log('You clicked the card')
})

addCartBtn.addEventListener('click', function(e) {
    console.log('You clicked the card')
})
//Event Listeners