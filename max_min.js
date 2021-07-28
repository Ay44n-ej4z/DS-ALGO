
//  Minimum and Maximum value in an array
// let x = [45, 65, 2, 0, -54, -5]

// console.log(Math.min(...x));

// var array =[2,3,-5,9,8, -10];
// var minvalue = array[0]; 
// for (var i = 0; i < array.length; i++) {
//     if(array[i] > minvalue) {
//         minvalue = array[i];
//     }

// }
//   console.log(minvalue);
function masx() {
// var array = [20, 5, 65, 45, 32]
// var value = []

for (var i = 0; i < array.length; i++) {
    // console.log(i);
    if(array[i] > value ){
        value = array[i]
        // console.log(array[i]);
    }

    }
    return value
}
var array = [20, 5, 65, 45, 32]
var value = []
var newValue = masx(value)
// console.log(array);
console.log(newValue);


function min(){
    var a = [10,20,30,12,15,18,52,25]
    var b = a[0]
    for (var i = 0; i < a.length; i++) {
        if(a[i] < b) {
            b = a[i]
        }
    }
    return b
}
var a = [10,20,30,12,15,18,52,25]
var b = []
var value = min(a)
console.log(value);



// let my = (array, min) => {
    // min = array[0]
    // for(let i = 0; i < array.length; i++) {
        // if (min < array[i])my = array [i];
    // }
    // return my;
// };
// const myArry = [1, 5, 98, 0, 7]
// console.log(my(myArry));




// var array =[2,3,-5,9, 50, 8, -10];
// var minvalue = array[0]; 
// for (var i = 0; i < array.length; i++) {
//     if(array[i] < minvalue) {
//         minvalue = array[i];
//     }

// }
//   console.log(minvalue);

// var newArray =[2,3,-5,9, 50, 8, -10];
// var maxValue = newArray[0]; 
// for (var i = 0; i < newArray.length; i++) {
//     // console.log(i)

//     if(newArray[i] > maxValue) {
//         maxValue = newArray[i];
//     }

// }
//   console.log(maxValue)

// let z = solvearr();

// function solvearr() {
//     var a = [0, 1, 1, 2, 0];
//     var b = a;   
        // console.log(i);
    // b.sort((a, b) => a > b)
        // if (a[i] < b)
        //     b = a[i];

    
//     console.log(b);
// }
