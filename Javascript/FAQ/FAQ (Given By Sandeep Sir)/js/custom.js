
var allQuestions = document.querySelectorAll('.faq_question');

allQuestions.forEach((element,index) => {
    element.addEventListener('click',(event) => {
        event.target.nextElementSibling.classList.toggle('faq_display');
        var a = event.target.children[0].innerText;

        if(a == '-'){
            event.target.children[0].innerText = '+';
        } else {
            event.target.children[0].innerText = '-';
        }

        allQuestions.forEach((value,i) => {
            if(element != value){
                value.nextElementSibling.classList.add('faq_display');
                value.children[0].innerText = '+';
            }
        })

    })
})