document
  .getElementById("noakhali-balance-btn")
  .addEventListener("click", function (event) {
    const oldBalance = getInnerText("main-balance");
    const cardOldBalance = getInnerText("noakhali-balance");
    const inputDonationAmmount = getInput("noakhali-balanceInput");
    const clickBtn = document.getElementById("noakhali-balance-btn");

    if (isNaN(inputDonationAmmount) || inputDonationAmmount <0) {
        
        document.getElementById("noakhali-balance-btn").removeAttribute("onclick");
        return alert("Enter a valid ammout.");
      }

    const newCardBalance = cardOldBalance + inputDonationAmmount;
    document.getElementById("noakhali-balance").innerText = newCardBalance;

    const newMainbalance = oldBalance - inputDonationAmmount;
    document.getElementById("main-balance").innerText = newMainbalance;

    document.getElementById("noakhali-balanceInput").value = "";
  });

//   feni
document.getElementById("balance2-btn").addEventListener("click", function () {
  const oldBalance = getInnerText("main-balance");
  const cardOldBalance = getInnerText("balance2");
  const inputDonationAmmount = getInput("balance2Input");
  const clickBtn = document.getElementById("balance2-btn");

  if (isNaN(inputDonationAmmount) || inputDonationAmmount <0) {
    document.getElementById("balance2-btn").removeAttribute("onclick");
    return alert("Enter a valid ammout.");
  }

  const newCardBalance = cardOldBalance + inputDonationAmmount;
  document.getElementById("balance2").innerText = newCardBalance;

  const newMainbalance = oldBalance - inputDonationAmmount;
  document.getElementById("main-balance").innerText = newMainbalance;

  document.getElementById("balance2Input").value = "";
});

//   quata
document.getElementById("balance3-btn").addEventListener("click", function () {
  const oldBalance = getInnerText("main-balance");
  const cardOldBalance = getInnerText("balance3");
  const inputDonationAmmount = getInput("balance3Input");
  const clickBtn = document.getElementById("balance3-btn");

  if (isNaN(inputDonationAmmount) || inputDonationAmmount <0) {
    document.getElementById("balance3-btn").removeAttribute("onclick");
    return alert("Enter a valid ammout.");
  } else {
    const newCardBalance = cardOldBalance + inputDonationAmmount;
    document.getElementById("balance3").innerText = newCardBalance;

    const newMainbalance = oldBalance - inputDonationAmmount;
    document.getElementById("main-balance").innerText = newMainbalance;

    document.getElementById("balance3Input").value = "";
  }
});
