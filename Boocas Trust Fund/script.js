// Function to update the number display
function updateNumber() {
  const numberElement = document.getElementById("number");
  numberElement.innerText = getCurrentNumber();
}

// Function to get the current number from local storage or set it to 0
function getCurrentNumber() {
  const savedNumber = localStorage.getItem("clickedNumber");
  return savedNumber ? parseInt(savedNumber) : 0;
}

// Function to handle button click and increment the number
function incrementNumber() {
  const hasClicked = localStorage.getItem("hasClicked");
  if (!hasClicked) {
    localStorage.setItem("hasClicked", "true");

    let currentNumber = getCurrentNumber();
    currentNumber++;
    localStorage.setItem("clickedNumber", currentNumber);

    updateNumber();
  }
}

// Add a click event listener to the button
const incrementButton = document.getElementById("incrementBtn");
incrementButton.addEventListener("click", incrementNumber);