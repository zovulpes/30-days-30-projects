var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("contact-name").value.trim();

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-zА-Яа-яЁё]+([-\s][A-Za-zА-Яа-яЁё]+)+$/)) {
    nameError.innerHTML = "Enter full name";
    return false;
  }

  nameError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
}

function validatePhone() {
  var phone = document.getElementById("contact-phone").value.trim();

  if (phone.length === 0) {
    phoneError.innerHTML = "Phone is required";
    return false;
  }

  if (!phone.match(/^\+?[0-9]{10,15}$/)) {
    phoneError.innerHTML = "Invalid phone number";
    return false;
  }

  phoneError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
}

function validateEmail() {
  var email = document.getElementById("contact-email").value.trim();

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }

  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }

  emailError.innerHTML = "<i class='fa-solid fa-circle-check'></i>";
  return true;
}

function validateForm() {
  if (!validateName() || !validatePhone() || !validateEmail()) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}
