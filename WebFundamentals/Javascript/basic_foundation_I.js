// var arr1 = [1, 2, 3, 4, 5]

// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
// function get255() {
//   var arr255 = [];
//   for (var i = 1; i <= 255; i++) {
//     arr255.push(i)
//   }
//   return arr255
// }
// console.log(get255())

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
// function getEven1000() {
//   let sum = 0
//   for (var i = 0; i < 1001; i++) {
//     if (i % 2 == 0) {
//       sum += i
//     }
//   }
//   return sum
// }
// console.log(getEven1000())


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
// function sumOdd5000() {
//   let sum = 0
//   for (var i = 0; i < 1000; i++) {
//     if (i % 2 != 0) {
//       sum += i
//     }
//   }
//   return sum
// }
// console.log(sumOdd5000())
// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

// function sumOfArr(arr) {
//   let sum = 0;
//   arr.forEach(element => {
//     sum += element
//   });
//   return sum
// }
// console.log(sumOfArr(arr1))

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
// let arr2 = [-3,3,5,7]
// function findMax(arr) {
//   let max = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(arr2))

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
// let arr3 = [1,3,5,7,20]
// function findAvg(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//   }
//   let avg = sum / arr.length
//   return avg
// }
// console.log(findAvg(arr3))


// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
// function arrayOddTo50() {
//   let oddArr = [];
//   for (var i = 0; i < 50; i++) {
//     if (i % 2 != 0) {
//       oddArr.push(i)
//     }
//   }
//   return oddArr
// }
// console.log(arrayOddTo50())


// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
// let arr4 = [1, 3, 5, 7]
// let y = 3
// function greaterThanY(arr, y) {
//   let greaterThanY = []
//   arr.forEach(element => {
//     if (element > y) {
//       greaterThanY.push(element)
//     }
//   })
//   return greaterThanY.length
// }
// console.log(greaterThanY(arr4, y))



// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
// let arr1 = [1,5,10,-2]
// function squares(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * arr[i]
//   }
//   return arr
// }
// console.log(squares(arr1))


// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
// let arr1 = [1,5,10,-2]
// function negatives(arr) {
//   for (var i = 0; i < arr1.length; i++) {
//     if (arr[i] < 0) {
//       arr[i] = 0
//     }
//   }
//   return arr
// }
// console.log(negatives(arr1))


// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
// let arr1 = [1,5,10,-2]

// function maxMinAvg(arr) {
//   let max = 0
//   let min = 0
//   let sum = 0
//   let newArr = []
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//     if (arr[i] < min) {
//       min = arr[i]
//     }
//   }
//   newArr.push(max)
//   newArr.push(min)
//   newArr.push(sum / arr.length)

//   return newArr
// }
// console.log(maxMinAvg(arr1))



// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
// let arr1 = [1,5,10,-2]
// function swapValues(arr) {
//   let temp = arr[0]
//   arr[0] = arr[arr.length - 1]
//   arr.push(temp)
//   return arr
// }
// console.log(swapValues(arr1))



// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

// let arr1 = [-1,-3,2]

// function numberToString(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if(arr[i] < 0) {
//       arr[i] = "Dojo"
//     }
//   }
//   return arr
// }
// console.log(numberToString(arr1))
