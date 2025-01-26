let arr = [10 , 52 ,80 , 65 , 56]
let value = arr.reduce((pre , curr)=>{
    return pre + curr
})// by default previous value is 0, if we want to put any value we can set pre's value


// console.log(value);






// This keyword
// This Keyword store current class reference
// console.log(this);
// this keyword refers the window object
// console.log(window === this);
// output is true


// any variable we write with a function keyword will be the part of the globally available window object



// function aahello(){
//     console.log('Hi everyone');
// }

// function aahi(){
//     console.log("hello evryone");
// }

// aahello()
// window.aahello()
// this.aahello()
// these all three represent the same output

// console.log(window);







// a object is a collection of key value pair 
let obj = {
    name: "BCA",
    age: '3 Y',
    iscertified: true,
    job: function(){
        console.log(coding);
        
    },

    courses: ['FSWD' , "DSA" , "JRM"],
    obj2:{
        student: ["Sagnik" , 'Pol' , 'Arju' , 'Suman'],
        time : '9:30 am to 11:30 am IST Sat Sun',
        activity: function(){
            console.log("Coding Tutorial");
        }
    }
}

obj.obj2.activity() // Coding Tutorial

// obj.courses.forEach((ele)=>{
//     console.log(ele);
// // forEach is for logging purpose only not returning 
// })

// output:-
// FSWD
// DSA
// JRM





// 36:21


