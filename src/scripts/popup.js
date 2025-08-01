document.addEventListener("DOMContentLoaded", function() {

let url;

function openPopup(title, content, type, redirectUrl = null) {

  const popup = document.createElement("div");
  popup.setAttribute('id', 'popup');
  const popupContent = document.createElement("div");
  popupContent.setAttribute('id', 'popup-content');
  popup.appendChild(popupContent);
  const header = document.createElement("div");
  header.setAttribute("id", "popup-header");
  popupContent.appendChild(header);
  const titleElement = document.createElement("h2");
  titleElement.setAttribute("id", "popup-title");
  header.appendChild(titleElement);
  const messageElement = document.createElement("p");
  messageElement.setAttribute("id", "popup-message");
  popupContent.appendChild(messageElement);
  const actions = document.createElement("div");
  actions.setAttribute("id", "popup-actions");
  popupContent.appendChild(actions);
  const closeButton = document.createElement("button");
  closeButton.setAttribute("id", "close-btn");
  closeButton.textContent = "Close";
  actions.appendChild(closeButton);


  // Reset classes
  popupContent.className = "popup-content";

  // Add type class
  switch (type) {
    case "success":
    case "error":
    case "info":
      popupContent.classList.add(type);
      break;
    default:
      // Leave as default gray
      break;
  }

  titleElement.textContent = title;
  messageElement.textContent = content;

  url = redirectUrl;
  popup.classList.remove("hidden");
}
function closePopup() {
  const popup = document.getElementById("popup");
  popup.classList.add("hidden");
  url = null;
}
});