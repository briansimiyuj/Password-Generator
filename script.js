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

// console.log(getRandomUpper())




function getRandomNumber(){

    return  String.fromCharCode(Math.floor(Math.random() * 10) + 48)

}

// console.log(getRandomNumber())




function getRandomSymbol(){

    let symbol = '€!"#$%&()*+,-./:;<=>?@[\]^_`{|}~¡¢£¤¦¥§¨©ªÎµ¶ŎĵğĎǾǶϾςϑπϞϿ'

    return symbol[Math.floor(Math.random() * symbol.length)]

}

console.log(getRandomSymbol())