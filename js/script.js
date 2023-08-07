const tagline = document.querySelector('.tagline');

const newText = tagline.textContent.replace('$15', '$12');
tagline.textContent = newText
console.log(tagline)