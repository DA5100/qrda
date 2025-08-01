function openPopup(title, content, type, redirectUrl = null) {
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popup-content");
  const titleElement = document.getElementById("popup-title");
  const messageElement = document.getElementById("popup-message");

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
