var array = [5, 13, 8, 20, 18, 10, 50];
var x = 13;
// var mid = 3 
var blankArray = []
var error = "Enter the correct Number"
for(var i = 0; i < array.length; i++) {
    if(array[i] == x) {
        blankArray.push(array[i])
    }    
}

console.log(blankArray);


// function BinarySearch() {
//     var array = [5, 13, 8, 20, 18, 10, 50];
//     var x = 20
//     var blankArray = [];
//     var error = "Find the correct Number"
//     for(var i = 0; i < array.length; i++) {
//         if(array[i] == x) {
//             blankArray.push(array[i])
//         }else array[i] != x
           
        
//     }
//     return blankArray
// }
// var array = [5, 13, 8, 20, 18, 10, 50];
// var blankArray = [];
// var result = BinarySearch(blankArray)
// console.log(result);


