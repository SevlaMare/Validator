function check(){
    var date = new Date()
    var currentYear = date.getFullYear()
    var inputYear = Number(document.querySelector('#input-year').value)
    var age = currentYear-inputYear
    var result = document.querySelector('#result')


    // validate input year too define age and gender
    if (inputYear.value > currentYear){
        window.alert('Check the year and try again.')
    } else {
        var gender = document.getElementsByName('input-gender')
    
        if (gender[0].checked){
            var gender = 'male'
            result.innerHTML = `Your age is ${age} and yours gender is ${gender}`
        } else if (gender[1].checked){
            var gender = 'female'
            result.innerHTML = `Your age is ${age} and yours gender is ${gender}`
        }
    }


    // create img tag
    var img = document.createElement('img')
    img.setAttribute('id','photo1')


    // validation logic
    if (gender == 'male') {
        if (age <= 24) {
            img.setAttribute('src', 'img/children-m.png')
        } else if (age >= 25 && age < 50) {
            img.setAttribute('src', 'img/man.png')
        } else if (age >= 50) {
            img.setAttribute('src', 'img/oldman.png')
        }
    } else if (gender == 'female') {
        if (age <= 24) {
            img.setAttribute('src', 'img/children-f.png')
        } else if (age >= 25 && age < 50) {
            img.setAttribute('src', 'img/woman.png')
        } else if (age >= 50) {
            img.setAttribute('src', 'img/oldwoman.png')
        }
    }

    // display img
    result.appendChild(img)
}