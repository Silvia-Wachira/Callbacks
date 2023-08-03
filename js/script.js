const courses = [
    {'courseID': 1111, 'title': 'Introduction to Business', 'Duration': '2 Months'},
    {'courseID': 2222, 'title': 'Introduction to Marketing', 'Duration': '3 Months'},
    {'courseID': 3333, 'title': ' Technology', 'Duration': '6 Months'}

]

function courses() {
    setTimeout(() => {
        let result = ''
        courses.forEach((course) => {
            results+= `<li> ${course.title} </li>`
        })
    }

    )
}