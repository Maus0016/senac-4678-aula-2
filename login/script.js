const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()

    console.log("submit",event)
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    console.log(email)
    console.log(password)
})