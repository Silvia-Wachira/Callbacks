const localStorageContent = localStorage.getItem('names')

let names;

if(localStorageContent === null) {

     names = [];
} else {
    JSON.parse( localStorageContent)
}


names.push('JavaScript')


localStorage.setItem('names', JSON.stringify(names))

