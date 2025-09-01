// var a = 5;
// var b = 10;
// var c = 15;

// console.log (a, b, c);

var userInfo = [];  //Blank Array

var userInfo = ['User 1', 'info@gmail.com', 8429154190]; //Value Assign into Array

// console.log(userInfo[0]);

userInfo[0] = 'Mohd Hussain'
// console.log(userInfo[0]);

// userInfo[3] = 22;
// console.log(userInfo)
// console.log(userInfo.length)//for lenght of array

// userInfo.push('Rohit');

// for(i = 0; i < userInfo.length; i++){
//     console.log(i)
//     console.log(userInfo[i])
// }

var newArray = userInfo.push('Rohit', 'User 2', 'This is 3rd Name') //.push('') isse array ke last me ham addition kar sakte hain
// console.log(newArray)
userInfo.pop(); //.pop(); isse sabse last ki ek value array se remove ho jaegi
console.log(userInfo.pop())
console.log(userInfo.toString())