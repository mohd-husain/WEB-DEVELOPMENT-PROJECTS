
let leftContent = document.getElementById('leftContent');

let rightContent = document.getElementById('rightContent');

function dataSwipe(){
    let leftContentData=leftContent.innerText
    let rightContentData=rightContent.innerText

    leftContent.innerText = rightContentData;
    rightContent.innerText = leftContentData;
}