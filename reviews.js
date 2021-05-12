const name = document.getElementById("name")
const email = document.getElementById("email")
const description = document.getElementById("description")
const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push("Name Is Required")
        console.log("error")
    }
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
        console.log("")
    } else {
        messages.push("Enter A Valid Email")
    }
    if (description.value === '' || description.value == null) {
        messages.push("Description Is Required")
    }
    if (messages.length > 0) {
        e.preventDefault()
        alert(messages.join(', '))
    }
})