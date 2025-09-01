

var allQuestion = document.querySelectorAll('.faq_question');

allQuestion.forEach((value, index)=>{
    value.addEventListener('click', ()=>{

        value.target.nextElementSibling.classList.toggle('faq_display')
        var a = value.target.clidren[0].innerText;

        if(a == '-'){
            value.target.children[0].innerText = "+";
        } else {
            value.target.children[0].innerText = '-';
        }

        allQuestion.forEach((element, i)=>{
            
            if(element != value){
                value .nextElementSibling.classList.add('faq_display')
                value.children[0].innerText='+';
            }
        })
    })
})