let sessionToken = sessionStorage.getItem("session").toString();
const params = new URLSearchParams(window.location.search);
const userToken = params.get("session");

document.addEventListener("DOMContentLoaded", function(){
    if(!userToken){
        alert("Token tidak ada!")
        window.location.href = "https://da5100.github.io/auth/"
    } else if(!sessionToken){
        alert("Tidak ada token yang terdaftar")
        window.location.href = "https://da5100.github.io/auth/"
    }else if(userToken !== sessionToken){
        alert("Token tidak valid! Silahkan login kembali!")
        window.location.href = "https://da5100.github.io/auth/"
    } else {
        console.log("Token " + userToken + "valid!")
    }
})
