const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const declineBtn = document.getElementById('decline')
const choiceBtns = document.getElementById('modal-choice-btns')

setTimeout(function(){
    modal.style.display = 'inline'
}, 10000)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

declineBtn.addEventListener("mouseover", function(){
    choiceBtns.classList.toggle('reverse')
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)

    const fullName = consentFormData.get("fullName")

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`

    setTimeout(function(){
        document.getElementById('uploadText').innerText = 
            `Making the sale...`
    }, 3000)

    setTimeout(function(){
        modalCloseBtn.disabled = false
        
        document.getElementById('modal-inner').innerHTML = 
            `<h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker!</h2>
                <p>We just sold the rights to your eternal soul.</p>
                <div class="idiot-gif">
                    <img src="images/pirate.gif">
            </div>` 
    }, 5000)
})