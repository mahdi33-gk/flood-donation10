document
  .getElementById("noakhali-balance-btn")
  .addEventListener("click", function (event) {
    const oldBalance = getInnerText("main-balance");
    const cardOldBalance = getInnerText("noakhali-balance");
    const inputDonationAmmount = getInput("noakhali-balanceInput");
    const clickBtn = document.getElementById("noakhali-balance-btn");
    const everyhistory = document.getElementById('every-histry');
    const title = document.getElementById('Noakhali');

    if (isNaN(inputDonationAmmount) || inputDonationAmmount <0) {
        
        document.getElementById("noakhali-balance-btn").removeAttribute("onclick");
        return alert("Enter a valid ammout.");
      }

    const newCardBalance = cardOldBalance + inputDonationAmmount;
    document.getElementById("noakhali-balance").innerText = newCardBalance;

    const newMainbalance = oldBalance - inputDonationAmmount;
    document.getElementById("main-balance").innerText = newMainbalance;

    document.getElementById("noakhali-balanceInput").value = "";

    everyhistory.innerHTML = `
      <div  class="p-3">
        <h1 class="text-2xl">${inputDonationAmmount}tk Donated for ${title.innerText}</h1>
        <p>Today Time</p>
      </div>
    `
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


// history btn
document.getElementById('history').addEventListener('click', function(event){
    const donationBtn = document.getElementById('donation');
    const historySec = document.getElementById('card-section');
    const donationPage = document.getElementById('history-section');
    this.classList.add('btn', 'px-7', 'btn-lg', 'bg-primary', 'font-normal', 'border-transparent', 'text-2xl');
    donationPage.classList.remove('hidden');
    donationBtn.classList.remove('bg-primary');
    donationBtn.classList.add('border-textCl');
    historySec.classList.add('hidden');

});

// donationBtn
document.getElementById('donation').addEventListener('click', function(event){
  const donationPage = document.getElementById('history-section');
  const historySec = document.getElementById('card-section');
   
});




// history section for ery cards
document.getElementById('noakhali-balance-btn')
