// how to get the refernce of any object
// 1) getElementById(), => 1 ref
// 2) getElementsByClass(),
// 3) getElementsByTagName(),
// 4) querySelector()


let h1 = document.getElementById('container-h1')
h1.style.backgroundColor = "red"





let container = document.getElementsByClassName('container')[0]
// this 0 is for we have multiple div at same time, so we want the first one
// function changeColor(){
//     h1.style.backgroundColor = 'blue'
//     h1.style.color = 'white'
// }

// we can also create any heading tag in this js
let containerh2  = document.createElement('h2')
containerh2.innerText = 'Learn Coding'
containerh2.className = 'container-h2'
container.appendChild(containerh2)
containerh2.style.backgroundColor='salmon'
containerh2.style.cursor='pointer'


// we want to create a alert function
// function alertMe(){
//     h1.style.backgroundColor = 'brown'
//     h1.style.color = 'green'
//     alert("Check the message boss!")
// }




// let state = true
// function alertMe(){
//     state = !state

//     if(state){
//         h1.style.backgroundColor = 'brown'
//         h1.style.color = 'green'
//     }
//     else{
//         h1.style.backgroundColor = 'gold'
//         h1.style.color = 'green'
//     }
// }