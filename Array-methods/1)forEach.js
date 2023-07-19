// First way we make with function,Second way with prototype method

//Create array names

const names = ['Gevorg','Harut','Aram','Tigran','Miqael']

//Create function

function myForEach (data,callBack) { // args. data,and callBack function
    for (let i = 0; i < data.length; i++) {
        callBack(i, data[i])  // call callBack function and set args index and data[i]
    }    
}
myForEach(names,function (item,index) {
    console.log(item,index)
})

// Second way with prototype method


Array.prototype.myForEachMethod = function (callBack) { // Array is function constructor where we can make methods
    for (let i = 0; i < this.length;i++) {
        callBack(i, this[i])
    }
}

const users = ['Gevorg','Harut','Aram','Tigran','Miqael'];

users.myForEachMethod (function (item,index) {
    console.log(item,index)
})

