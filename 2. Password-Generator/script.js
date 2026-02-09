const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

const passwordLength = document.getElementById("length");
const includeLowercase = document.getElementById("lowercase");
const includeUppercase = document.getElementById("uppercase");
const includeNumber = document.getElementById("numbers");
const includeSymbol = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordDisplay = document.getElementById("password");

generateBtn.addEventListener("click", function () {
  const length = Number(passwordLength.value);
  let password = "";

  while (password.length < length) {
    if (includeLowercase.checked && password.length < length) {
      password +=
        lowercaseLetters[Math.trunc(Math.random() * lowercaseLetters.length)];
    }

    if (includeUppercase.checked && password.length < length) {
      password +=
        uppercaseLetters[Math.trunc(Math.random() * uppercaseLetters.length)];
    }
    if (includeNumber.checked && password.length < length) {
      password += numbers[Math.trunc(Math.random() * numbers.length)];
    }

    if (includeSymbol.checked && password.length < length) {
      password += symbols[Math.trunc(Math.random() * symbols.length)];
    }
  }

  passwordDisplay.value = password;
});
