// ---------String methods- String <=>Array------------

// let text1='hello'
// let textArray=text1.split('')

// // console.log(textArray)//['h', 'e', 'l', 'l', 'o']

let text2 = 'Hellow orld'
let text3 = 'Hel,lo world'

let textArray2 = text2.split(' ')
let textArray3 = text3.split(',')

// console.log(textArray2)// ['Hellow', 'orld']
// console.log(textArray3)// ['Hel', 'lo world']

// --------char=>ASCII
// console.log('a'.charCodeAt(0))//97
// console.log('z'.charCodeAt(0))//122
// console.log('A'.charCodeAt(0))//65
// console.log('Z'.charCodeAt(0))//90

//------ASCII=>char---------

// console.log(String.fromCharCode(98))//b

// 1.task************************

const nameInitials = (name) => {
    let nameArray = name.split(' ')
    // console.log(nameArray)//['Cristiano', 'Ronaldo', 'Dos', 'Santos', 'Aveiro']

    let initials = ''
    for (let i = 0; i < nameArray.length - 1; i++) {
        initials += `${nameArray[i][0]}. `
    }
    //C. R. D. S.

    // initials += nameArray[nameArray.length-1][0]//C. R. D. S. A
    initials += nameArray[nameArray.length - 1]  //C. R. D. S. Aveiro
    // console.log(initials)
}
nameInitials('Cristiano Ronaldo Dos Santos Aveiro')

//abc +2 =>cde

const ceasarCipher = (text, shift) => {
    let encryptedText = ''
    let textArr = text.split('')

    for (let i = 0; i < textArr.length; i++) {
        let ascii = textArr[i].charCodeAt(0)
        let newAscii = (ascii - 97 + shift) % 26 + 97
        encryptedText += String.fromCharCode(newAscii)
    }
    // console.log(encryptedText)
}
ceasarCipher("abc", 2)

// ------ JS Obj => JSON------
const obj = {
    name: 'John',
    age: 25
}
let jsonText = JSON.stringify(obj)
// console.log(jsonText)//{"name":"John","age":25}

// ------JSON=>JSObj----------

const newObj = JSON.parse(jsonText)
// console.log(newObj)//{name: 'John', age: 25}

// ----------Deconstructuring----------

const obj1 = {
    name: 'Sam',
    age: 25,
    isProgrammer:"true"
}
// let name = obj1.name
// let age=obj1.age
let {name, age}= obj1
console.log(obj1)