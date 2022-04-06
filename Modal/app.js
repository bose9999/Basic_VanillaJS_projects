const open1 = document.querySelector('.modal-btn')
const close1 = document.querySelector('.close-btn')
const overlay = document.querySelector('.modal-overlay')

open1.addEventListener('click',function(){
    overlay.classList.toggle('open-modal')
})

close1.addEventListener('click',function(){
    if(overlay.classList.contains('open-modal')){
        overlay.classList.remove('open-modal')
    }
})