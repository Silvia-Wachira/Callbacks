//Input  & Form events

//Create the variables

const searchForm = document.getElementById('search'),
      searchInput = document.getElementById('search-course')

searchForm.addEventListener('submit', printEvent)

function printEvent(e) {
    e.preventDefault()

    //Print the value from the input
    console.log(searchInput.value)
    // console.log(`Type: ${e.type}`)
}