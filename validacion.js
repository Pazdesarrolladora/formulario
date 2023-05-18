const validationCustom01 = document.getElementById("validationCustom01");
const validationCustom02 = document.getElementById("validationCustom02");
const validationCustom03 = document.getElementById("validationCustom03");
const validationCustom04 = document.getElementById("validationCustom04");
const validationCustomUsername = document.getElementById(
  "validationCustomUsername"
);
const validationCustom05 = document.getElementById("validationCustom05");
const validationCustom06 = document.getElementById("validationCustom06");
const validationCustom07 = document.getElementById("validationCustom07");

const form = document.querySelector("form");
const successMessage = document.getElementById("success-message");
const errorMessage = document.getElementById("error-message");



const validarFormulario = (e) => {
  e.preventDefault(); // Evitar el envío del formulario por defecto

  //   // Realizar la validación del formulario

  let isValid = true;

  if (validationCustom01.value === "") {
    validationCustom01.classList.add("is-invalid");
    isValid = false;
  } else {
    validationCustom01.classList.remove("is-invalid");
    validationCustom01.classList.add("is-valid");
  }

  if (validationCustom02.value === "") {
    validationCustom02.classList.add("is-invalid");
    isValid = false;
  } else {
    validationCustom02.classList.remove("is-invalid");
    validationCustom02.classList.add("is-valid");
  }

  if (validationCustom03.value === "") {
    validationCustom03.classList.add("is-invalid");
    isValid = false;
  } else {
    validationCustom03.classList.remove("is-invalid");
    validationCustom03.classList.add("is-valid");
  }

  if (validationCustom04.value === "") {
    validationCustom04.classList.add("is-invalid");
    isValid = false;
  } else {
    validationCustom04.classList.remove("is-invalid");
    validationCustom04.classList.add("is-valid");
  }

  if (validationCustomUsername.value === "") {
    validationCustomUsername.classList.add("is-invalid");
    isValid = false;
  } else {
    validationCustomUsername.classList.remove("is-invalid");
    validationCustomUsername.classList.add("is-valid");
  }

  if (validationCustom05.value === "") {
    validationCustom05.classList.add("is-invalid");
    isValid = false;
  } else {
    validationCustom05.classList.remove("is-invalid");
    validationCustom05.classList.add("is-valid");
  }

  if (validationCustom06.value === "Pick a state") {
    validationCustom06.classList.add("is-invalid");
    isValid = false;
  } else {
    validationCustom06.classList.remove("is-invalid");
    validationCustom06.classList.add("is-valid");
  }

  if (validationCustom07.value === "") {
    validationCustom07.classList.add("is-invalid");
    isValid = false;
  } else {
    validationCustom07.classList.remove("is-invalid");
    validationCustom07.classList.add("is-valid");
  }

  // Mostrar mensaje de éxito o error
  if (isValid) {
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
    form.reset();
  } else {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
};
form.addEventListener("submit", validarFormulario);

