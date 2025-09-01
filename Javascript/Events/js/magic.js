
var numbers = [];

function changeImage(data){

    if(numbers.length < 9){
        data.style.backgroundColor = 'red';
    }
    
    if(numbers.includes(data.innerText)){

    } else {
        numbers.push(data.innerText);
    }
    


    console.log(numbers);
}

function changeImageDefault(data){
    data.style.backgroundColor = 'lightskyblue';
}