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

    const eachHistory = document.createElement('div');
    eachHistory.className = 'p-3  border-borderCl rounded-md mt-3 mb-3 border-2';

    eachHistory.innerHTML = `
      <div  class="p-3 px-6">
        <h1 class="text-xl"> <span class="font-semibold text-2xl">${inputDonationAmmount} tk</span>  Donated for ${title.innerText}</h1>
        <p class="pt-1 pb-1">Date: ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
      </div>
    `;
    everyhistory.append(eachHistory);
  });

//   feni
document.getElementById("balance2-btn").addEventListener("click", function () {
  const oldBalance = getInnerText("main-balance");
  const cardOldBalance = getInnerText("balance2");
  const everyhistory = document.getElementById('every-histry');
  const inputDonationAmmount = getInput("balance2Input");
  const clickBtn = document.getElementById("balance2-btn");
  const title = document.getElementById('feni-title');

  if (isNaN(inputDonationAmmount) || inputDonationAmmount <0) {
    document.getElementById("balance2-btn").removeAttribute("onclick");
    return alert("Enter a valid ammout.");
  }

  const newCardBalance = cardOldBalance + inputDonationAmmount;
  document.getElementById("balance2").innerText = newCardBalance;

  const newMainbalance = oldBalance - inputDonationAmmount;
  document.getElementById("main-balance").innerText = newMainbalance;

  document.getElementById("balance2Input").value = "";



  const eachHistory = document.createElement('div');
    eachHistory.className = 'p-3  border-borderCl rounded-md mt-3 mb-3 border-2';

    eachHistory.innerHTML = `
      <div  class="p-3 px-6">
        <h1 class="text-xl"> <span class="font-semibold text-2xl">${inputDonationAmmount} tk</span>  Donated for ${title.innerText}</h1>
        <p class="pt-1 pb-1">Date: ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
      </div>
    `;
    everyhistory.append(eachHistory);
});

//   quata
document.getElementById("balance3-btn").addEventListener("click", function () {
  const oldBalance = getInnerText("main-balance");
  const cardOldBalance = getInnerText("balance3");
  const everyhistory = document.getElementById('every-histry');
  const inputDonationAmmount = getInput("balance3Input");
  const clickBtn = document.getElementById("balance3-btn");
  const title = document.getElementById('quata-title');
  

  if (isNaN(inputDonationAmmount) || inputDonationAmmount <0) {
    document.getElementById("balance3-btn").removeAttribute("onclick");
    return alert("Enter a valid ammout.");
  } else {
    const newCardBalance = cardOldBalance + inputDonationAmmount;
    document.getElementById("balance3").innerText = newCardBalance;

    const newMainbalance = oldBalance - inputDonationAmmount;
    document.getElementById("main-balance").innerText = newMainbalance;

    document.getElementById("balance3Input").value = "";

    const eachHistory = document.createElement('div');
    eachHistory.className = 'p-3  border-borderCl rounded-md mt-3 mb-3 border-2';

    eachHistory.innerHTML = `
      <div  class="p-3 px-6">
        <h1 class="text-xl"> <span class="font-semibold text-2xl">${inputDonationAmmount} tk</span>  Donated for ${title.innerText}</h1>
        <p class="pt-1 pb-1">Date: ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
      </div>
    `;
    everyhistory.append(eachHistory);
  }

});


// history btn
document.getElementById('history').addEventListener('click', function(event){
    const donationBtn = document.getElementById('donation');
    const historySec = document.getElementById('history-section');
    const historyBtn = document.getElementById('history');
    const donationPage = document.getElementById('card-section');
    historyBtn.classList.add('btn', 'px-7', 'btn-lg', 'bg-primary', 'font-normal', 'border-transparent');

    historySec.classList.remove('hidden');
    donationPage.classList.add('hidden');

    donationBtn.classList.remove('bg-primary', 'border-transparent');
    donationBtn.classList.add('border-textCl');
    
    historyBtn.classList.remove('border-textCl');

});

// donationBtn
document.getElementById('donation').addEventListener('click', function(event){
  const donationPage = document.getElementById('history-section');
  const donationBtn = document.getElementById('donation');
  const historySec = document.getElementById('card-section');
  const historyBtn = document.getElementById('history');
  donationBtn.classList.add('bg-primary', 'border-transparent', 'btn', 'btn-lg', 'px-7', 'font-normal');
  historySec.classList.add('hidden');
  donationPage.classList.remove('hidden');

  historyBtn.classList.remove('bg-primary','border-transparent');
  historyBtn.classList.add('border-textCl');
  
});




// history section for ery cards
document.getElementById('noakhali-balance-btn')
