let titleEl = document.getElementById("title");

console.log(titleEl);

titleEl.style.backgroundColor = "blue"

let pEl = document.querySelector('.cool')

console.log(pEl)

pEl.style.color = "purple"

let aEl = document.querySelector('a');

aEl.setAttribute("href", "https://www.google.com");

//  aEl.href = "www.google.com"

console.log(aEl.hasAttribute('href'))

titleEl.classList.add("class2")

document.querySelector(".class2").style.color = "orange"

titleEl.innerHTML = "<p>Hello World</p>"

let liTags = document.getElementsByTagName('li')
let liTags2 = document.getElementsByClassName('comment')
let liTags3 = document.querySelectorAll('.comment')


console.log(liTags)
console.log(liTags2)
console.log(liTags3)


console.log('looping with for of') // return html selection
for(let li of liTags){
    console.log(li)
}

console.log('looping with for each') // only with query Selector all
liTags3.forEach((li) => console.log(li))

console.log('looping with for loop') // return html selection
 for (let i = 0; i < liTags.length; i++){
     console.log(liTags[i])
    //  liTags[i].style.fontSize = '30px'
 }
     
     //???
let liId = document.querySelectorAll('#comments')
    for (let comments of liId){
     comments.style.fontFamily = 'Helvetica';
     comments.style.fontSize = '20px';
}

// selecting an element = object with built in css properties with .style and camel case
let btn = document.querySelector('button')
btn.addEventListener('click', function(evt){
    console.log(evt)
    const li = document.createElement('li');
    let input = document.querySelector('input')
    li.textContent = input.value
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    input.value = ''
} )

let ul = document.querySelector('ul')
ul.addEventListener('click', handleClick)

function handleClick(evt) {
    console.log(evt.target)
}

let clickedComment = document.querySelector('ul')
clickedComment.addEventListener('click', colorComment)

function colorComment(evt){
    evt.target.style.color = "blue"; 
}

// let input = document.querySelector('input')
// console.log(input)