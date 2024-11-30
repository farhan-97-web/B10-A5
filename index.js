let donateBtn = document.getElementsByClassName('donate-btn');
for (let i = 0; i < donateBtn.length; i++) {
    donateBtn[i].addEventListener("click", function () {
        if (i == 0) {
            let givenDonation = Number(document.getElementById('forNoa').value);
            let collected = Number(document.getElementById('recivedNoa').innerText);
            let bal = Number(document.getElementById('bal').innerText)
            let totalColl = givenDonation + collected;
            let newBal = bal - givenDonation;
            if (isNaN(givenDonation) || givenDonation < 0 || newBal < 0 || givenDonation==0) {
                alert('Invalid input')
            }
            else {
                document.getElementById('bal').innerText = newBal;
                document.getElementById('recivedNoa').innerText = totalColl;
                document.getElementById('my_modal_2').showModal();
                const now = new Date();
                const noaTitle = document.getElementById('noa-title').innerText;
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class="card bg-base-100 w-full shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${givenDonation} taka is given ${noaTitle}</h2>
    <p>Date : ${now}</p>
    
  </div>
</div>
                    `
                    document.getElementById('history-container').appendChild(div);  


            }



        }
        else if (i == 1) {
            let givenDonation = Number(document.getElementById('forFeni').value)

            let collected = Number(document.getElementById('recivedFeni').innerText);
            let bal = Number(document.getElementById('bal').innerText)

            let totalColl = givenDonation + collected;
            let newBal = bal - givenDonation;
            if (isNaN(givenDonation) || givenDonation < 0 || newBal < 0 || givenDonation==0) {
                alert('Invalid input')
            }
            else {
                document.getElementById('bal').innerText = newBal;
                document.getElementById('recivedFeni').innerText = totalColl;
                document.getElementById('my_modal_3').showModal();
                const now = new Date();
                const feniTitle = document.getElementById('feni-title').innerText;
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class="card bg-base-100 w-full shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${givenDonation} taka is given ${feniTitle}</h2>
    <p>Date : ${now}</p>
   
  </div>
</div>
                    `
                    document.getElementById('history-container').appendChild(div);


            }

        }
        else {
            let givenDonation = Number(document.getElementById('forQota').value)
            let collected = Number(document.getElementById('recivedQota').innerText);
            let bal = Number(document.getElementById('bal').innerText);
            let totalColl = givenDonation + collected;
            let newBal = bal - givenDonation;
            if (isNaN(givenDonation) || givenDonation < 0 || newBal < 0 || givenDonation==0) {
                alert('Invalid Input')
            }
            else {
                document.getElementById('bal').innerText = newBal;
                document.getElementById('recivedQota').innerText = totalColl;
                const now = new Date();
                document.getElementById('my_modal_4').showModal();
               
                const qTitle = document.getElementById('q-title').innerText;
                const div = document.createElement('div');
                div.innerHTML = `
                    <div class="card bg-base-100 w-full shadow-xl">
  <div class="card-body">
    <h2 class="card-title">${givenDonation} taka is given ${qTitle}</h2>
    <p>Date : ${now}</p>
    
  </div>
</div>
                    `
                document.getElementById('history-container').appendChild(div);

            }



        }






    })
}

document.getElementById('hst').addEventListener('click', function () {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('hst').classList.add('bg-[#B4F461]');
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('dnt').classList.remove('bg-[#B4F461]')

})
document.getElementById('dnt').addEventListener('click', function () {
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('dnt').classList.add('bg-[#B4F461]')
    document.getElementById('history').classList.add('hidden');
    document.getElementById('hst').classList.remove('bg-[#B4F461]');
})


document.getElementById('blog').addEventListener('click', function(){
    window.location.href = '/blog.html';
    
})






