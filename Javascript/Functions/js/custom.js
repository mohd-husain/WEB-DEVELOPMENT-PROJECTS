
// // function add() {
// //     var a = 10;
// //     var b = 15;

// //     var c = a + b;
// //     console.log(c)
// // }

// // add();

// function simpleFunction() {
//     console.log('Simple Function')
// }

// // var a = 10;
// // var b = 15;

// function addition(a, b) {
//     c = a+b;
//     console.log(c);
// }

//Additon.html

function add() {
    a = parseInt(prompt ('Enter the Value of a'));
    b = parseInt(prompt ('Enter the Value of b'));
    method = '+';
    var output = common (a, b, method)
    console.log(output)
}

function minus() {
    a = parseInt(prompt ('Enter the Value of a'));
    b = parseInt(prompt ('Enter the Value of b'));
    method = '-';
    var output = common (a, b, method)
    console.log(output)
}

function multiple() {
    a = parseInt(prompt ('Enter the Value of a'));
    b = parseInt(prompt ('Enter the Value of b'));
    method = 'x';
    var output = common (a, b, method)
    console.log(output)
}

function divide() {
    a = parseInt(prompt ('Enter the Value of a'));
    b = parseInt(prompt ('Enter the Value of b'));
    method = '/';
    var output = common (a, b, method)
    console.log(output)
}

function common(x, y, z) {
    if (z == '+'){
        return x + y;
    } else if (z == '-'){
        return x - y;
    } else if (z == 'x'){
        return x * y;
    } else if (z == '/'){
        return x / y;
    }
}