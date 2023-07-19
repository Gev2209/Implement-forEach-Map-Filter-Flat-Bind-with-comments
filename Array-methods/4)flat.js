// First way we make with function,Second way with prototype method

const flatNum = [4,5,7,9,[4,5,3,[4,2,2,[4,5,5]]]];

function myFlatter (array,deep) {      // We create function with arguments array,and deep for flat arrays 
    const resultFlat = [];          // Create empty array 

    (function flat (arr,depth) {               // create IIEF Immediately invoked expression function  with arr, and depth arguments
        for (let i = 0; i < arr.length; i++) {      //  we loop through and over the arr and say add to the new created array callBack function with arr[i] memeber
            if (Array.isArray(arr[i]) && depth) {    // We check if the array is an array in arr[i] and depth, then we call the flat function with the ith term of arr[i] and 
                                                   //subtract -1 from the depth to make it -1 every time after specifying the depth.
                 flat(arr[i],depth - 1)   

            } else {
                resultFlat.push(arr[i])             // else, we add the value of arr[i] to the new array
            }
        }
    })(array,deep)                                    

    return resultFlat                                  // return new array
}

const results = myFlatter(flatNum,3)                    // create new variable assign myFlat and set array --> flatNumber, and depth

console.log(flatNum)
console.log(results)

//////////////////////////////////////////////////////////////////////

//Second way with prototype 

Array.prototype.myFlat = function (array,deep) {
    const resultFlat = [];

    (function flat (arr,depth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && depth) {
                flat(arr[i], depth - 1)
            } else {
                resultFlat.push(arr[i])
            }
        }
    })(array,deep)

    return resultFlat
}

const flatNumber = [4,5,7,9,[4,5,3,[4,2,2,[6,8,9]]]];

const flatNUmbers = flatNumber.myFlat(flatNumber,3)
console.log(flatNumber)
console.log(flatNUmbers)