const inputField = document.getElementById("userInput");
const submitButton = document.getElementById("btnSubmit");
const displayText = document.getElementById("displayText");

submitButton.addEventListener("click", () => {
  const inputValue = inputField.value;

  displayText.textContent = `you entered ${inputValue}`;

  console.log(`User Input ${inputValue}`);
});
