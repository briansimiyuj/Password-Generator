const output = document.querySelector('.output')

const lengthEl = document.querySelector('#length')

const upperCase = document.querySelector('#uppercase')

const lowerCase = document.querySelector('#lowercase')

const numbers = document.querySelector('#numbers')

const symbolEL= document.querySelector('#symbols')

const generate = document.querySelector('#generate')

const clipboard = document.querySelector('.clipboard')



// console.log(output, lengthEl/, upperCase, lowerCase, numbers, symbolEL, generate, clipboard)





const randomFunction = {

    lower: getRandomLower,

    upper: getRandomUpper,

    number: getRandomNumber,

    symbol: getRandomSymbol

}

// console.log(randomFunction)





generate.addEventListener('click', () =>{

    const lengthValue = +lengthEl.value

    const hasLower = lowerCase.checked

    const hasUpper = upperCase.checked

    const hasNumber  = numbers.checked

    const hasSymbol = symbolEL.checked

//     console.log(hasLower, hasUpper, hasNumber, hasSymbol)

    output.classList.add('generarted')

    output.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, lengthValue)

})



const generatePassword = (lower, upper, number, symbol, lengthValue) =>{

    let generatedPassword = ''     
    
    const typesCount = lower + upper + number + symbol

 //    console.log('Types Count:', typesCount)

    const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

 //    console.log('Types Array ', typesArray)


    if (typesCount === 0) {
        
     return ''

    }

    for (let i = 0; i < lengthValue; i+= typesCount) {
        
         typesArray.forEach(type => {
             
             const funcName = Object.keys(type)[0]

           //   console.log('Func Name:', funcName)
             
             generatedPassword += randomFunction[funcName]()

           //   console.log(generatedPassword)

         })

    //      console.log(generatedPassword.slice(0, lengthValue))
         
         
    }

    const password = generatedPassword.slice(0, lengthValue)

     return password

}



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

// console.log(getRandomSymbol())