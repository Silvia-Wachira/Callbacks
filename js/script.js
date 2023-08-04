const buttonTwo = document.querySelector('.btn-2')

function alertBtn() {
    alert('I also love JavaScript');
}

buttonTwo.addEventListener('click', alertBtn)

//mouseover event

const newBackgroundColor = document.querySelector(".btn-3")

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'red';
}

newBackgroundColor.addEventListener('mouseover' changeBgColor)