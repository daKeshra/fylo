const errorDiv = document.querySelector(".error");
const submitBtn = document.getElementById("submitBtn");
const inputEmail = document.getElementById("email");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInput();
});

// submitBtn.addEventListener("click", functionClick());

// function functionClick() {

//   if (submitBtn) {
//     submitBtn.style.transform = "scale(1.1)";
//   } else {
//     submitBtn.style.transform = "scale(1.0)";
//   }
// }

const isValidEmail = (inputEmail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(inputEmail).toLowerCase());
};

const validateInput = () => {
  const inputEmailValue = inputEmail.value.trim();

  if (inputEmailValue === "") {
    errorDiv.innerHTML = "error";
  } else if (!isValidEmail(inputEmailValue)) {
    errorDiv.innerHTML = "error";
    errorDiv.style.color = "rgb(226, 109, 109)";

    inputEmail.value = "";
    inputEmail.focus();
  } else if (isValidEmail(inputEmailValue)) {
    errorDiv.innerHTML = "success";
    errorDiv.style.color = "rgb(120, 237, 120)";
  } else {
    errorDiv.innerHTML = "success";
    errorDiv.style.color = "rgb(120, 237, 120)";
  }
};
