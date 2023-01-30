const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

const formElement = document.getElementById("consent-form")

formElement.addEventListener("click", function(e) {
    e.preventDefault()
    console.log("form submitted")
})