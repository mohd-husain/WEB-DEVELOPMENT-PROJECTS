

function imageChange(value){
    if (value == 1){
        document.getElementById('image1').src = 'images/2.webp';
        document.getElementById('image2').src = 'images/1.jpg';
    } else {
        document.getElementById('image1').src = 'images/1.jpg';
        document.getElementById('image2').src = 'images/2.webp';
    }
}

function mouseMove(){
    console.log('Hello');
}

function copyCat(output){
    var data = output.value;
    console.log(data);

    document.getElementById('output').innerText = data;
}

function getValue(data){
    console.log(data.value);
}