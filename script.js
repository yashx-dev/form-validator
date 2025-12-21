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





// there's a bug to solve that bug you just need to remove event listner from registrationform and remove all other function and little dedbugging in email because of space's preventDefault()

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

registrationForm.addEventListener("click", (c) => {
  if (c.target.id === "fullName") {
    // console.log(c.target.id);
    Namecheck();
  } else if (c.target.id === "email") {
    emailcheck();
  } else if (c.target.id === "phone") {
    phonecheck();
  } else if (c.target.id === "username") {
    usercheck();
  } else if (c.target.id === "passwordInput") {
    passwordchecker();
  } else if (c.target.id === "confirmPassword") {
    confirm();
  } else if (c.target.id === "terms") {
    checkbox();
  }
});

function Namecheck() {
  fullName.addEventListener("change", (e) => {
    Name = e.target.value;
    // console.log(Name);
    Name.trim();
    if (Name.length < 2) {
      nameError.classList.remove("hidden");
      nameError.innerHTML = "Name should have atleast 2 Characters";
    } else {
      UserData.Name = Name;
      nameError.classList.add("hidden");
    }
    console.log(UserData);
  });
}
function emailcheck() {
  document.addEventListener("keydown", (k) => {
    if (k.key === " ") {
      k.preventDefault();
    }
    email.addEventListener("change", (e) => {
      Email = e.target.value;
      Email.toLowerCase();
      if (!emailregex(Email)) {
        emailError.classList.remove("hidden");
        emailError.innerHTML = "Invalid Email";
      } else {
        UserData.EmailAdress = Email;
        emailError.classList.add("hidden");
      }
      console.log(UserData);
    });
  });
}
function phonecheck() {
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
}
function usercheck() {
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
}
function passwordchecker() {
  toggle.addEventListener("click", () => {
    input.type === "password"
      ? (input.type = "text")
      : (input.type = "password");
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
}

function confirm() {
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
}
function checkbox() {
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
}
  btn = false;
  resetBtn.addEventListener("click", (e) => {
    btn = !btn;
    console.log(btn);
    if (btn == true) {
      registrationForm.reset();
      Array.from(tag).forEach((errortag) => {
        errortag.classList.add("hidden");
      });
    }
    console.log(UserData);
  });