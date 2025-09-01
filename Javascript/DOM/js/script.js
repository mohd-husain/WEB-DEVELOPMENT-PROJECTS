//to get value
// var getValue = document.getElementById('column1');
// var getValue = getValue.innerText;

// console.log(getValue);

//to insert value
// document.getElementById('column3').innerText = getValue;

// var getValue = document.getElementById('column1');
// var getValue = getValue.innerHTML;

// console.log(getValue);

// document.getElementById('column3').innerHTML = '';

// var data = document.getElementsByClassName('column');
 
// console.log(data[1].innerText);

// data[2].innerText = data[1].innerText;

// var data = document.getElementsByTagName('div');
// console.log(data[1].innerText);

var data = document.querySelector('#column1').innerText;
var data = document.querySelector('.column').innerText;
var data = document.querySelector('div').innerText;

var data = document.querySelectorAll('#column1');
var data = document.querySelectorAll('.column');
var data = document.querySelectorAll('div');

// console.log(data[1].innerText);

// document.getElementById('name').value = data[3].innerText;

// var data = document.getElementById('name').value;


var data = document.querySelector('#image').src;

// document.querySelector('#image2').src = data;

document.querySelector('#image2').setAttribute('src', data)

document.getElementById('column3').style.backgroundColor = 'black'; 
document.getElementById('column3').style.color = 'white'; 

console.log(data);

