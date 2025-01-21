// closure
// array and map filter reduce, foreach  method
// this keyword zz7 intro to DOM manipulation

// let a = 20
// function callme(a){
//     let test = function(){
//         console.log(2 * a);
//     }
//     return test;
// }

// callme(3 * a)();

// The pattern callme()() in JavaScript is called a function chaining pattern or function currying, depending on the context.








// another question
// let a = 20;

// function callme(a){
//     let test = function(){
//         let test2 = function(){
//             console.log(2 * a);
//         };
//         return test2;
//     };
//     return test;
// }

// callme(3 * a )()()



// higher order function
// let f2 = function(x1,x2){
//     console.log("hello everyone1");
//     x1(x2);
//     // f3(f4);
// }
// let f3 = function(y2){
//     console.log("hello everyone2");
//     y2();
//     // f4();
// }
// let f4 = function(){
//     console.log("hello everyone3");
// }

// let f1 = function(f2 ,f3 , f4){
//     f2(f3,f4);
// }

// inside a function , calling another function  that is called higher order function (f1) and f2 f3 , f4 is callback fucntion


// another question

// function callme(func){
//     let a = function(){
//         return 'Hello'
//     }
//     func();
//     return a;
// }

// function f1(){
//     console.log('I am function');
// }

// console.log(callme(f1)());
// console.log(a);

// 53:48
