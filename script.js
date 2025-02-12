document.getElementById("noakhali-balance-btn").addEventListener("click", function () {
    

    const oldBalance = getInnerText("main-balance");
    const cardOldBalance = getInnerText("noakhali-balance");
    const inputDonationAmmount = getInput("noakhali-balanceInput");
    const clickBtn = document.getElementById("noakhali-balance-btn");

    const newCardBalance = cardOldBalance + inputDonationAmmount;
    document.getElementById("noakhali-balance").innerText = newCardBalance;

    const newMainbalance = oldBalance - inputDonationAmmount;
    document.getElementById("main-balance").innerText = newMainbalance;

    console.log(inputDonationAmmount);

  });


