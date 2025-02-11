function getInput(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}

function getInnerText(id) {
  const getInnerText = parseFloat(document.getElementById(id).innerText);
  return getInnerText;
}

function masterPiece(donationAmmount, cardBalance, mainBalance, btnClick) {
  const oldBalance = getInnerText(mainBalance);
  const cardOldBalance = getInnerText(cardBalance);
  const inputDonationAmmount = getInput(donationAmmount);
  const clickBtn = document.getElementById(btnClick);

  clickBtn.addEventListener("click", function () {
    const newCardBalance = cardOldBalance + inputDonationAmmount;
    document.getElementById(cardBalance).innerText = newCardBalance;

    const newMainbalance = oldBalance + inputDonationAmmount;
    document.getElementById(mainBalance).innerText = newMainbalance;
  });
}
