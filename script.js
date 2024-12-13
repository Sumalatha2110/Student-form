document.getElementById("add").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
})

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
})


document.getElementById("submit").addEventListener("click", function () {
    var username = document.getElementById("name").value
    var email = document.getElementById("email").value
    var age = document.getElementById("age").value
    var location = document.getElementById("location").value
    var number = document.getElementById("number").value
    // console.log(username, email, age, location, number)
    if (username == null || username == '' || username == undefined) {
        const error = document.getElementById("name-error")
        error.innerHTML = "name field is empty"
    }
    else {
        const error = document.getElementById("name-error")
        error.innerHTML = ""
    }
    if (email == null || email == '' || email == undefined) {
        const error = document.getElementById("email-error")
        error.innerHTML = "email field is empty"
    }
    else {
        const error = document.getElementById("email-error")
        error.innerHTML = ""
    }
    if (age == null || age == '' || age == undefined) {
        const error = document.getElementById("age-error")
        error.innerHTML = "age field is empty"
    }
    else {
        const error = document.getElementById("age-error")
        error.innerHTML = ""
    }
    if (location == null || location == '' || location == undefined) {
        const error = document.getElementById("location-error")
        error.innerHTML = "location field is empty"
    }
    else {
        const error = document.getElementById("location-error")
        error.innerHTML = ""
    }
    if (number == null || number == '' || number == undefined) {
        const error = document.getElementById("number-error")
        error.innerHTML = "number field is empty"
    }
    else {
        const error = document.getElementById("number-error")
        error.innerHTML = ""
    }







    // document.querySelector(".popup").style.display = "none";
})