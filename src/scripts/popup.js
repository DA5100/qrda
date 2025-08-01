let url;

function openPopup(title, content, type, redirectUrl = null) {

  
    const popup = document.createElement("div");
    popup.id = "popup";
    popup.className = "popup hidden";
    document.body.appendChild(popup);
    const popupContent = document.createElement("div");
    popupContent.id = "popup-content";
    popupContent.classList.add("popup-content");
    popup.appendChild(popupContent);
    const header = document.createElement("div");
    header.className = "popup-header";
    popupContent.appendChild(header);
    const titleElement = document.createElement("h2");
    titleElement.id = "popup-title";
    header.appendChild(titleElement);
    const messageElement = document.createElement("p");
    messageElement.setAttribute("id", "popup-message");
    popupContent.appendChild(messageElement);
    const actions = document.createElement("div");
    actions.className = "popup-actions";
    popupContent.appendChild(actions);
    const closeButton = document.createElement("button");
    closeButton.id = "close-btn";
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
