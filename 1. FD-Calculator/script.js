const calcBtn = document.getElementById("calculateBtn");

function calculateMaturityAmount() {
  const principle = parseFloat(document.querySelector("#principle").value);
  const intersRate = parseFloat(document.querySelector("#interestRate").value);
  const tenure = parseFloat(document.querySelector("#tenure").value);

  const maturityAmount = principle + (principle * intersRate * tenure) / 100;

  !principle || !intersRate || !tenure
    ? (document.getElementById("result").innerText =
        `Please enter correct values`)
    : (document.getElementById("result").innerText =
        `Maturity Amount: ${maturityAmount.toFixed(2)}`);
}

calcBtn.addEventListener("click", calculateMaturityAmount);
