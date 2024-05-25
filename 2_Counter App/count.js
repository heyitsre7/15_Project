// Initialize count to zero
let count = 0;

// Select value display and buttons
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// Function to update the display of the count
function updateDisplay() {
  value.textContent = count;
  value.style.color = count > 0 ? 'green' : count < 0 ? 'red' : '#222';
}

// Add event listeners to each button
buttons.forEach(button => {
  button.addEventListener("click", event => {
    const action = event.currentTarget.classList;

    if (action.contains("decrease")) {
      count--;
    } else if (action.contains("increase")) {
      count++;
    } else if (action.contains("reset")) {
      count = 0;
    }

    updateDisplay();
  });
});

// Initial display update
updateDisplay();
