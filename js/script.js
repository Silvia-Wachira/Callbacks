const clearCartBtn = document.getElementById('clear-cart');
clearCartBtn.addEventListener('click', clearbtnFunction);

function clearbtnFunction(e) {
    //target
    let element;

    element = e;

    element = e.target;
    element = e.target.id
    element = e.target.innerText
    element = e.target.innerText = 2 + 2;



    console.log(element)
}