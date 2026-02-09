const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  const dob = new Date(dobInput.value);
  console.log(dob);
  const ageInMs = Date.now() - dob.getTime();
  console.log(ageInMs);
  const ageDate = new Date(ageInMs);
  console.log(ageDate);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);
  console.log(age);

  resultDiv.innerHTML = `Your age is ${age} years.`;
});
