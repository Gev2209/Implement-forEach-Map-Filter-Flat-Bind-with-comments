const partners1 = {       
    name: 'Partners 1',
    id: '43828943',
    usersCount: 223
}
                                // We have two object where introduced name,id,usersCount
const partners2 = {
    name: 'Partners 2',
    id: '4382848943',
    usersCount: 19993
}


function getPartnersData() { //
    console.table(this); //this ov es du 
    console.log('this is partners info')   // A getPartnersData function is defined that logs the context (this) and a message to the console.

}

function myBind(context) {                  /// A function myBind is declared that accepts a context parameter representing the binding execution context for the bound function.
    const fn = this; //function             /// Inside MyBind, a reference to the original function (fn) is stored by assigning to it. This allows us to access the original function later.

    return function() {                     //myBind returns a new function that is an internal function that serves as a bound function. When this internal function is called, it executes the original function with the desired context(s).
        const key = 'myMethod';
        context[key] = fn;                  //Within the internal function, a new property key is created on the context object and the value of the original function (fn) is set.
        context[key]();
        delete context[key]                  /// After execution, the main property is deleted from the context object to clean up and remove any side effects caused by binding the function.
    }
}




Function.prototype.myBind = myBind;                 //Finally, getPartnersData.myBind(partners1) is called, creating a new bound function result that will execute the getPartnersData function with partners1 as the context.

const result = getPartnersData.myBind(partners1)        

result();

