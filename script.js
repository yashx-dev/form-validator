// fullName
// email
// phone
// username
// passwordInput
// toggle
// passwordStrength
// confirmPassword
// terms
// validateBtn
// resetBtn
// registrationForm
// nameError
// emailError
// usernameError
// passwordStrengthText
// passwordError
// confirmPasswordError
// termsError
// phoneError

const fullName = document.getElementById("fullName");
const nameError = document.getElementById("nameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phoneError");
const username = document.getElementById("username");
let input = document.getElementById("passwordInput");
let passwordStrengthText = document.getElementById("passwordStrengthText");
let passwordError = document.getElementById("passwordError");
let confirmPassword = document.getElementById("confirmPassword");
let confirmPasswordError = document.getElementById("confirmPasswordError");
let passwordStrength = document.getElementById("passwordStrength");
let toggle = document.getElementById("toggle");
let terms = document.getElementById("terms");
let validateBtn = document.getElementById("validateBtn");
let resetBtn = document.getElementById("resetBtn");
let termsError = document.getElementById("termsError");
const usernameError = document.getElementById("usernameError");
const registrationForm = document.getElementById("registrationForm");
let tag = document.getElementsByClassName("errortag");
const blankcheck = document.getElementsByClassName("blank-check");
let UserData = {
  Name: "",
  EmailAdress: "",
  PhoneNumber: "",
  UserName: "",
  Password: "",
};

function number(no) {
  return /^[0-9]{10}$/.test(no);
}
function emailregex(verify) {
  return /^[a-z0-9-+.]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(verify);
}
function userregex(check) {
  return /^[A-Za-z0-9]{0,15}$/.test(check);
}
function passwordcheck(value) {
  return /[a-zA-Z]/.test(value);
}
function passwordcheck2(value) {
  return /[0-9]/.test(value);
}
function passwordcheck3(value) {
  return /[!@#$%^&*_-]/.test(value);
}

fullName.addEventListener("change", (e) => {
  Name = e.target.value;
  // console.log(Name);
  Name = Name.trim();
  if (Name.length < 2) {
    nameError.classList.remove("hidden");
    nameError.innerHTML = "Name should have atleast 2 Characters";
  } else {
    UserData.Name = Name;
    nameError.classList.add("hidden");
  }
  console.log(UserData);
});

email.addEventListener("input", (e) => {
  Email = e.target.value;
  if (Email.includes(" ")) {
    Email = Email.replace(/\s/g, "");
    e.target.value = Email;
  }
  Email = Email.toLowerCase();
  if (!emailregex(Email)) {
    emailError.classList.remove("hidden");
    emailError.innerHTML = "Invalid Email";
  } else {
    UserData.EmailAdress = Email;
    emailError.classList.add("hidden");
  }
  console.log(UserData);
});

phone.addEventListener("change", (e) => {
  Phone = e.target.value;
  if (!number(Phone)) {
    phoneError.classList.remove("hidden");
    phoneError.innerHTML = "Invalid Mobile Number";
  } else {
    // Phone.replace(/(\d{5})/ , '$1 ')
    UserData.PhoneNumber = Phone;
    phoneError.classList.add("hidden");
  }
  console.log(UserData);
});

username.addEventListener("change", (e) => {
  User = e.target.value;
  if (!userregex(User)) {
    usernameError.classList.remove("hidden");
    usernameError.innerHTML =
      "Invalid Username Maximum 15 Characters and only (Uppercase, Lowercase, Number)";
  } else {
    UserData.UserName = User;
    usernameError.classList.add("hidden");
  }
  console.log(UserData);
});

toggle.addEventListener("click", () => {
  input.type === "password" ? (input.type = "text") : (input.type = "password");
});

input.addEventListener("input", (e) => {
  target = e.target.value;
  console.log(target);
  if (target.length < 8) {
    passwordError.classList.remove("hidden");
    passwordError.innerHTML = "Password must be greater than 8";
    passwordStrength.classList.remove(
      "bg-green-400",
      "bg-orange-400",
      "bg-gray-700"
    );
    passwordStrength.classList.add("bg-red-400");
  } else if (
    passwordcheck(target) &&
    passwordcheck2(target) &&
    passwordcheck3(target)
  ) {
    passwordStrengthText.innerHTML = "Strong";
    passwordStrength.classList.remove(
      "bg-red-400",
      "bg-orange-400",
      "bg-gray-700"
    );
    passwordStrength.classList.add("bg-green-400");
    passwordError.classList.add("hidden");
  } else if (
    (passwordcheck(target) && passwordcheck2(target)) ||
    (passwordcheck2(target) && passwordcheck3(target)) ||
    (passwordcheck(target) && passwordcheck3(target))
  ) {
    passwordStrength.classList.add("bg-orange-400");
    passwordStrength.classList.remove(
      "bg-green-400",
      "bg-red-400",
      "bg-gray-700"
    );
    passwordStrengthText.innerHTML = "Medium";
    passwordError.classList.add("hidden");
  } else if (passwordcheck2(target)) {
    passwordStrengthText.innerHTML = "Weak";
    passwordStrength.classList.remove(
      "bg-green-400",
      "bg-orange-400",
      "bg-gray-700"
    );
    passwordStrength.classList.add("bg-red-400");
    UserData.Password = target;
    passwordError.classList.add("hidden");
  } else if (passwordcheck3(target)) {
    passwordStrengthText.innerHTML = "Weak";
    passwordStrength.classList.remove(
      "bg-green-400",
      "bg-orange-400",
      "bg-gray-700"
    );
    passwordStrength.classList.add("bg-red-400");
    UserData.Password = target;
    passwordError.classList.add("hidden");
  } else if (passwordcheck(target)) {
    passwordStrengthText.innerHTML = "Weak";
    passwordStrength.classList.remove(
      "bg-green-400",
      "bg-orange-400",
      "bg-gray-700"
    );
    passwordStrength.classList.add("bg-red-400");
    UserData.Password = target;
    passwordError.classList.add("hidden");
  }
  console.log(UserData);
});

confirmPassword.addEventListener("change", (e) => {
  sure = e.target.value;
  console.log(sure);
  if (UserData.Password == "") {
    confirmPasswordError.classList.remove("hidden");
    confirmPasswordError.innerHTML = "Please Enter the Password first";
  } else if (sure != UserData.Password) {
    confirmPasswordError.classList.remove("hidden");
    confirmPasswordError.innerHTML =
      "Confirm Password doesn't Match with Password";
  } else if (sure == UserData.Password) {
    confirmPasswordError.classList.add("hidden");
  }
  // console.log(UserData);
});

terms.addEventListener("change", (e) => {
  check = e.target.checked;
  console.log(check);
  if (!check) {
    termsError.classList.remove("hidden");
    termsError.innerHTML = "Please Confirm the Terms and Conditions";
  } else {
    termsError.classList.add("hidden");
  }
  // console.log(UserData);
});

// rbtn = false;
resetBtn.addEventListener("click", (e) => {
  // rbtn = !rbtn;
  // console.log(rbtn);
  // if (rbtn == true) {
  registrationForm.reset();
  Array.from(tag).forEach((errortag) => {
    errortag.classList.add("hidden");
  });
  // rbtn == false
  // }
});

validateBtn.addEventListener("click", (e) => {
  const firsterror = document.querySelector(".errortag:not(.hidden)");
  let haserror = false;
  Array.from(tag).forEach((errortag) => {
    const finderror = errortag.classList.contains("hidden");
    if (finderror == false) {
      haserror = true;
    }
  });
  Array.from(blankcheck).forEach((blank) => {
    if (blank.value.trim() == "") {
      haserror = true;
    }
  });
  if (haserror) {
    alert("Please fill Form properly");
    firsterror.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    sibling = firsterror.previousElementSibling
    input = sibling.querySelector('input')
    input.value = ""
    input.focus()
    // registrationForm.reset();
    // Array.from(tag).forEach((errortag) => {
    //   errortag.classList.add("hidden");
    // });
  } else {
    json = JSON.stringify(UserData);
    validateBtn.innerHTML = "Validating Form....";
    setTimeout(() => {
      set = localStorage.setItem("Userdata", json);
      get = localStorage.getItem("Userdata");
      if (get == json) {
        alert("Your form has been Submitted");
        validateBtn.innerHTML = "Validate Form";
      } else {
        alert("There's an Error please try again");
        validateBtn.innerHTML = "Validate Form";
      }
    }, 3000);
  }
});
