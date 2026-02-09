function calculateTip() {
  const billAmount =
    parseFloat(document.getElementById("bill-amount").value) || 0;
  const tipPercentage =
    parseFloat(document.getElementById("tip-percentage").value) || 0;

  const tipAmount = billAmount * (tipPercentage / 100);
  const totalAmount = tipAmount + billAmount;

  document.getElementById("tip-amount").textContent =
    "$" + tipAmount.toFixed(2);
  document.getElementById("total-amount").textContent =
    "$" + totalAmount.toFixed(2);
}
