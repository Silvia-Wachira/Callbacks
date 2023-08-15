//Input  & Form events

//Create the variables

const searchForm = document.getElementById('search'),
      searchInput = document.getElementById('search-course')

// searchForm.addEventListener('submit', printEvent)

// searchInput.addEventListener('keydown', printEvent )

// searchInput.addEventListener('keyup', printEvent )
// searchInput.addEventListener('keypress', printEvent )
// searchInput.addEventListener('blur', printEvent )
// searchInput.addEventListener('cut', printEvent )
// searchInput.addEventListener('copy', printEvent )
// searchInput.addEventListener('paste', printEvent )
searchInput.addEventListener('input', printEvent )


function printEvent(e) {
    // e.preventDefault()

    if(searchInput.value.length == 0) {
        alert('Type something please')
    }

    //Print the value from the input
    console.log(searchInput.value)
    console.log(`Type: ${e.type}`)
}