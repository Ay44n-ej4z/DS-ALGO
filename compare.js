// function commonArray (array1, array2) {
//     var common = [];

//     for (var i = 0; i < array1.length; i++){
//         for(var j = 0; j < array2.length; j++ ){
//             if(array1[i] == array2[j]) { 
//                common.push(array1[i])
//             }
//         }
//     }
//     return common

// }

// var array1 = [45, 99, 55, 223, 17, 93, 23];
// var array2 = [45, 18, 93, 7, 23, 1, 223, 5];

// var commonElements = commonArray(array1, array2);

// console.log(commonElements);


// function commonNumber(){
//     var array1 = [10, 20, 30, 40, 55, 22, 65];
//     var array2 = [25, 45, 21, 32, 22, 65, 1];
//     var common = [];


//     for (var i = 0; i < array1.length; i++){
//         for(var j = 0; j < array2.length; j++) {
//             if(array1[i] == array2[j]) {
//                 common.push(array1[i])
//             }
//         } 
//     }
//     return common
// }
// var array1 = [10, 20, 30, 40, 55, 22, 65];
// var array2 = [25, 45, 21, 32, 22, 65, 1];
// var common = [];

// var newElements = commonNumber(array1, array2);

// console.log(newElements);


function evenNumber(){
var even = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNew  = []

for (var i = 0; i < even.length;  i++){
    if(even[i] % 2 == 0)
    evenNew.push(even[i])
}
return evenNew
}
var even = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var evenNew  = []

var returnNo = evenNumber(evenNew)
console.log(returnNo);