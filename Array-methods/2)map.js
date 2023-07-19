// First way we make with function,Second way with prototype method

//create numbers array 

const numbers = [2,6,38,19,60]

// //create function myMap

function myMap (data,callBack) { // In the argument we give the given and callBack function
    const resultMap = []; // We create an empty array to return a new array with the modified numbers

    for (let i = 0; i < data.length; i++) { 
        resultMap.push(callBack(data[i]))    /// we loop through and over the data and say add to the new created array callBack function with data[i] memeber 
    }
    return resultMap                           // return new array
}

const modifiedNumber = myMap(numbers, function(item) { // We create a new variable to which we assign the new yellow function and in the function,
                                                       //we put the array of numbers and a new function that will multiply all numbers by 5
    return item * 5
})

console.log(modifiedNumber)
/////////////////////////////////////////////////////

// Second way with prototype


Array.prototype.myMap = function (callBack) {
    const resultMap = [];
    for (let i = 0; i < this.length; i++) {
        resultMap.push(callBack(this[i]))
    }
    return resultMap
}

const number = [2,6,8,9,94]
const num =  number.myMap(function (item) {
    return item * 5
})

console.log(num)