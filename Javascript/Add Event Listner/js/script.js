
// function testing(){
//     console.log('Hello World')
// }

// testing();

// document.getElementById('button1').addEventListener('click', testing);

// document.getElementById('button2').addEventListener('click', () => 
// {
//     console.log('Hello World 2');
// });

const getData = document.querySelectorAll('.button')

console.log(getData);

getData.forEach((value, index) =>{
    value.addEventListener('click', (event) =>{
        console.log(event.target.innerText)
    });
})