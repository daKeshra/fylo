const errorDiv = document.getElementsByClassName("error");
const submitBtn = document.getElementById("submitBtn");
const inputEmail = document.getElementById("email");
const form = document.getElementById("form");

submitBtn.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

//Error
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDiv = document.querySelector(".error");

  errorDiv.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

//Success
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDiv = document.querySelector(".error");

  errorDiv, (innerText = "");
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};

//Validating email
const isValidEmail = (inputEmail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(inputEmail).toLowerCase());
};

const validateInput = () => {
  const errorDiv = document.getElementsByClassName("error");
  const inputEmailValue = document.getElementById("email").value.trim();

  if (inputEmailValue === "") {
    setError(errorDiv, "Enter your email");
  } else if (!isValidEmail(inputEmailValue)) {
    setError(inputEmail, "email not valid");
  } else {
    setSuccess();
  }
};
