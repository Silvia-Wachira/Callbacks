
const images = document.getElementsByTagName('img')

//convert html collection into an array

imagesArray = Array.from(images);

imagesArray.forEach(function(image){
    console.log(image)
})
console.log(imagesArray)