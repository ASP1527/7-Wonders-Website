//variables
const name = document.getElementById("name")
const email = document.getElementById("email")
const description = document.getElementById("description")
const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    let messages = [] //array to hold all error messages
    if (name.value === '' || name.value == null) {
        messages.push("Name Is Required")
        console.log("error")
    }
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //standard email form
    if (validation.test(email.value)) { //checks if email fits the form
        console.log("")
    } else {
        messages.push("Enter A Valid Email") //adds a message to the messages
    }
    if (description.value === '' || description.value == null) {
        messages.push("Description Is Required")
    }
    if (messages.length > 0) {
        e.preventDefault() //stops the page from reloading when there is a mistake in the form
        alert(messages.join(', ')) //joins all of the messages with a comma
    }
})