let devtoolsDetected = false;

setInterval(() => {
  const threshold = 160;
  const start = new Date();
  debugger; // Will pause if DevTools is open
  const duration = new Date() - start;

  if (duration > threshold && !devtoolsDetected) {
    devtoolsDetected = true;

    // Loop of alert dialogs
    for (let i = 0; i < 3; i++) {
      alert("Developer tools detected. Please close them.");
    }

    // Optional redirect or tab close
    window.location.href = "https://da5100.github.io/auth/"; // Redirect to a specific URL
    // Or close the window (if allowed by browser)  
    window.close();
  } else if (devtoolsDetected) {
    // If DevTools is closed, reset the detection flag
    devtoolsDetected = false;
  }
}, 1000);
