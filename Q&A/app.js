// traversing the Dom method
// const btns = document.querySelectorAll('.question-btn')

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         e.currentTarget.parentElement.parentElement.classList.toggle('show-text')
//     })
// })

//selector method
const questions = document.querySelectorAll('.question')

questions.forEach(function(question){
    const ques = question.querySelector('.question-btn')
    ques.addEventListener('click',function(){
    questions.forEach(function(item){
        if(item !== question){
            item.classList.remove('show-text')
        }
    })
        question.classList.toggle('show-text')
    })
})