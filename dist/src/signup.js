let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let signupForm = document.querySelector(".signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validateSignup();
});

function setError(element, message) {
  const inputControl = element;
  const errorDisplay = inputControl.nextElementSibling;

  errorDisplay.textContent = message;
  inputControl.classList.add("error");
}

function setSuccess(element) {
  const inputControl = element;
  const successDisplay = inputControl.nextElementSibling;

  successDisplay.textContent = "";
  inputControl.classList.remove("error");
}

function validateSignup() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmPasswordValue = confirmPassword.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (emailValue.includes("@") === false) {
    setError(email, "Email addres shuld have an @");
  } else setSuccess(email);

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password should be 8 or more characters.");
  } else setSuccess(password);
  
  if (confirmPasswordValue === "") {
    setError(confirmPassword, "Please re-enter password");
  } else if (confirmPasswordValue !== passwordValue) {
    setError(confirmPassword, "Passwords do not match");
  } else setSuccess(confirmPassword);
}