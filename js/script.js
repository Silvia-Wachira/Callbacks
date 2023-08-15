//Mouse Events
//Create the variables

const heading = document.querySelector('#heading')
const links = document.querySelector('nav')
const clearCartBtn = document.querySelector('#clear-cart')

console.log(heading)
console.log(links)
console.log(clearCartBtn)

// clearCartBtn.addEventListener('click', printEvent)
// clearCartBtn.addEventListener('dblclick', printEvent)
// clearCartBtn.addEventListener('mouseenter', printEvent)
// clearCartBtn.addEventListener('mouseleave', printEvent)
// clearCartBtn.addEventListener('mouseover', printEvent)
// clearCartBtn.addEventListener('mouseout', printEvent)
clearCartBtn.addEventListener('mouseup', printEvent)
clearCartBtn.addEventListener('mousedown', printEvent)

// mouse move
clearCartBtn.addEventListener('mousemove', printEvent)


function printEvent(e) {
    // console.log(e)
    console.log(`THE EVENT IS ${e.type}`)
}