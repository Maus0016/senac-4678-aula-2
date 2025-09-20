function getUser(){
    const email = document.querySelector("#email")
    const emailLocal = localStorage.getItem("user")
    email.innerText = emailLocal
}
getUser()

function logout(){

    const button = document.querySelector("#logout")

    button.addEventListener("click",()=>{
         const email = document.querySelector("#email")
         const emailLocal = document.querySelector ("")
        const emailLocal = localStorage.getItem("")
        email.innerText = ""
    })

   
}
logout()