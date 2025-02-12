function getInput(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function getInnerText(id) {
  const getInerText = parseFloat(document.getElementById(id).innerText);
  return getInerText;
}



clickBtn.addEventListener("click", function () {
  const newCardBalance = cardOldBalance + inputDonationAmmount;
  document.getElementById(cardBalance).innerText = newCardBalance;

  const newMainbalance = oldBalance - inputDonationAmmount;
  document.getElementById(mainBalance).innerText = newMainbalance;

  function masterPiece(donationAmmount, cardBalance, mainBalance, btnClick) {
    const oldBalance = getInnerText(mainBalance);
    const cardOldBalance = getInnerText(cardBalance);
    const inputDonationAmmount = getInput(donationAmmount);
    const clickBtn = document.getElementById(btnClick);
  
    
  }
  masterPiece("noakhali-balanceInput", "noakhali-balance", "main-balance", "noakhali-balance-btns");
});
