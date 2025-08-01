
document.addEventListener("DOMContentLoaded", function() {
let url;
function openPopup(title, content, type, url = null) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popup-content");
    const titleElement = document.getElementById("popup-title");
    const messageElement = document.getElementById("popup-message");

    popupContent.className = "rounded-lg p-6 w-80 text-white shadow-lg";
    
    switch(type){
        case "success":
            popupContent.classList.add("bg-green-500");
            break;
        case "error":
            popupContent.classList.add("bg-red-500");
            break;
        case "info":
            popupContent.classList.add("bg-blue-500");
            break;
        default:
            popupContent.classList.add("bg-gray-500");
    }

    titleElement.textContent = title;
    messageElement.textContent = content;

    url = url || null;
    popup.classList.remove("hidden");
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("hidden");
    if(url) {
        window.location.href = url;
    }
}
});