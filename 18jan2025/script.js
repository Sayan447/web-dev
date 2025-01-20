// closure
// array and map filter reduce, foreach  method
// this keyword zz7 intro to DOM manipulation

let a = 20
function callme(a){
    let test = function(){
        console.log(2 * a);
    }
    return test;
}

callme(3 * a)();

// The pattern callme()() in JavaScript is called a function chaining pattern or function currying, depending on the context.

// 26:17