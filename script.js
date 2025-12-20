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

const fullName = document.getElementById("fullName");
const nameError = document.getElementById("nameError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const registrationForm = document.getElementById("registrationForm");

let UserData = {
  Name: "",
  EmailAdress: "",
  PhoneNumber: "",
  UserName: "",
  Password: "",
};

// function number(check) {
//   return /[1-9]/.test(check);
// }
function emailregex(verify) {
  return /^[a-z0-9-+.]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(verify);
}

registrationForm.addEventListener("click", (c) => {
  if (c.target.id === "fullName") {
    // console.log(c.target.id);
    Namecheck();
  } else if (c.target.id === "email") {
    emailcheck();
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
