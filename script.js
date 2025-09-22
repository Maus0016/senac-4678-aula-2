function getUser(){
    const email = document.querySelector("#email")
    const emailLocal = localStorage.getItem("user")
    email.innerText = emailLocal
}
getUser()

function logout(){
    const buttonLogout = document.querySelector("#logout")
    console.log(buttonLogout) 
    buttonLogout.addEventListener("click",()=>{
        console.log("loogout")
        localStorage.clear()
           const email = document.querySelector("#email")
           email.innerText = ""
    })
}
logout()