const tagline = document.querySelector('.tagline');

const newText = tagline.textContent.replace('$15', '$12');
tagline.textContent = newText
console.log(tagline)

let image = document.querySelector('.card img')
console.log(image);

let link = document.querySelector('#primary a:first-child')
let link = document.querySelector('#primary a:last-child')
let link = document.querySelector('#primary a:nth-child(2)')

console.log(link)