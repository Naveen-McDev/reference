// create a container(box) in html with id = 'exitPopup'

// Variable to track if the popup was recently closed
let recentlyClosed = false;

// Function to display the exit-intent popup
function showExitPopup() {
  if (!recentlyClosed) {
    document.getElementById("exitPopup").style.display = "block";
  }
}

// Function to close the exit-intent popup and delay its reappearance
function closeExitPopup() {
  document.getElementById("exitPopup").style.display = "none";

  // Set recentlyClosed to true for 30 seconds
  recentlyClosed = true;
  setTimeout(function () {
    recentlyClosed = false;
  }, 30000); // 30 seconds in milliseconds
}

// Add an event listener for mouse leave (exit intent)
document.addEventListener("mouseleave", function (e) {
  if (e.clientY < 0) {
    showExitPopup();
  }
});
