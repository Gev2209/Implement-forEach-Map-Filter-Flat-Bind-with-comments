// First way we make with function,Second way with prototype method

const number = [4,5,6,9,87,3]

function myFilter (data,callBack) {   // In the argument we give the given and callBack function
    const resultFilter = [];          // We create an empty array to return a new array with the modified numbers
    
    for (let i = 0; i < data.length; i++) {      /// we loop through and over the data and say add to the new created array callBack function with data[i] memeber 
        const returnValue = callBack(data[i])   // We create a new variable that will return the value and assign it the callBack function to which we give the data i member
        if (returnValue) {                      // We provide that if it returns a value, then push in new array data i member
            resultFilter.push(data[i])
        }
    }
    return resultFilter;                        // return new array
}

const nums = myFilter(number,function (item) {
    return item < 6
})
console.log(nums)
//////////////////////////////////////////////////////////////

// Second way with prototype

Array.prototype.myFilter = function (callBack) {
    const resultFilter = [];

    for (let i = 0; i < this.length; i++) {
        const returnValue = callBack(this[i])
        if (returnValue) {
            resultFilter.push(this[i])
        }
    }

    return resultFilter;
}

const numbers = [255,6,9,4,8,7,1]

const num = numbers.myFilter(function(item) {
    return item < 9
})

console.log(num)