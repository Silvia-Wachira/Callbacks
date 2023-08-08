//Replace an element

const newHeading = document.createElement('h2')

//add an id
newHeading.id = 'heading'
//add new text
newHeading.appendChild(document.createTextNode('The Best Courses'))


console.log(newHeading)