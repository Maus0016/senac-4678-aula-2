function getUser(){
    const email = document.querySelector("#email")
    const emailLocal = localStorage.getItem("user")
    email.innerText = emailLocal
}
getUser()