const output = document.querySelector('.output')

const lengthEl = document.querySelector('#length')

const upperCase = document.querySelector('#uppercase')

const lowerCase = document.querySelector('#lowercase')

const numbers = document.querySelector('#numbers')

const symbolEL= document.querySelector('#symbols')

const generate = document.querySelector('#generate')

const clipboard = document.querySelector('.clipboard')



// console.log(output, lengthEl, upperCase, lowerCase, numbers, symbolEL, generate, clipboard)



function getRandomLower(){

    let lower = 'abcdefghijklmnopqrstuvwxyz'

    return lower[Math.floor(Math.random() * lower.length)]

}

// console.log(getRandomLower())




function getRandomUpper(){

    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    return upper[Math.floor(Math.random() * upper.length)]

}

console.log(getRandomUpper())