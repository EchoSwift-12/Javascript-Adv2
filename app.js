// // ---------String methods- String <=>Array------------

// // let text1='hello'
// // let textArray=text1.split('')

// // // console.log(textArray)//['h', 'e', 'l', 'l', 'o']

// let text2 = 'Hellow orld'
// let text3 = 'Hel,lo world'

// let textArray2 = text2.split(' ')
// let textArray3 = text3.split(',')

// // console.log(textArray2)// ['Hellow', 'orld']
// // console.log(textArray3)// ['Hel', 'lo world']

// // --------char=>ASCII
// // console.log('a'.charCodeAt(0))//97
// // console.log('z'.charCodeAt(0))//122
// // console.log('A'.charCodeAt(0))//65
// // console.log('Z'.charCodeAt(0))//90

// //------ASCII=>char---------

// // console.log(String.fromCharCode(98))//b

// // 1.task************************

// const nameInitials = (name) => {
//     let nameArray = name.split(' ')
//     // console.log(nameArray)//['Cristiano', 'Ronaldo', 'Dos', 'Santos', 'Aveiro']

//     let initials = ''
//     for (let i = 0; i < nameArray.length - 1; i++) {
//         initials += `${nameArray[i][0]}. `
//     }
//     //C. R. D. S.

//     // initials += nameArray[nameArray.length-1][0]//C. R. D. S. A
//     initials += nameArray[nameArray.length - 1]  //C. R. D. S. Aveiro
//     // console.log(initials)
// }
// nameInitials('Cristiano Ronaldo Dos Santos Aveiro')

// //abc +2 =>cde

// const ceasarCipher = (text, shift) => {
//     let encryptedText = ''
//     let textArr = text.split('')

//     for (let i = 0; i < textArr.length; i++) {
//         let ascii = textArr[i].charCodeAt(0)
//         let newAscii = (ascii - 97 + shift) % 26 + 97
//         encryptedText += String.fromCharCode(newAscii)
//     }
//     // console.log(encryptedText)
// }
// ceasarCipher("abc", 2)

// // // ------ JS Obj => JSON------
// // const obj = {
// //     name: 'John',
// //     age: 25
// // }
// // let jsonText = JSON.stringify(obj)
// // console.log(jsonText)//{"name":"John","age":25}

// // ------JSON=>JSObj----------

// // const newObj = JSON.parse(jsonText)
// // console.log(newObj)//{name: 'John', age: 25}

// // ----------Destructuring----------

// const obj = {
//     name: 'John',
//     age: 25,
//     isProgrammer: true
// }
// // let name = obj1.name
// // console.log(name) 

// // let { name, age } = obj
// console.log(name, age)//John 25

// const arr = [1, 2, 3, 4]

// // let num1 = arr[0]
// // let num3=arr[2]

// let [num1, , num3,] = arr

// console.log(num1, num3)//1 3

// **_-----task------

const obj1 = {
    name: 'John Doe',
    age: 30,
    gender: 'Male'
}
const { name, age, gender } = obj1//destructuring

newName = "Priya"
newAge = 18
newGender = 'Female'

const newObj = {
    name: newName,
    age: newAge,
    gender: newGender
}
console.log(newObj)//{name: 'Priya', age: 18, gender: 'Female'}

// -------------References~Labels---------

const num1 = 1
const num2 = 1
console.log(num1 === num2)//true

const arr1 = [1, 2, 3]
const arr2 = [1, 2, 3]
console.log(arr1 === arr2)//false
// Since arrays are objects in JavaScript, 
// arr1 and arr2 are actually two distinct objects
//  in memory, hence arr1 === arr2 evaluates to false.

// ------------References----------

const arr3 = [1, 2, 3]
const arr4 = arr3
arr4[0] = 0
console.log(arr3)//[0, 2, 3]

const obj = {
    k: 1
}

const obj7 = obj
obj7.k = 2
console.log(obj)//{k: 2}

//** task

const a = [2, 4, 6, 8]

const b = a
b[0] = 10
console.log(a)// [10, 4, 6, 8]
// -------

const addFive = (num) => {
    let five = 5//new box created
    console.log(num + five)
}//box is cleaned=>garbage collection

addFive(4)//9

// ---------Types of Operators-----------

console.log(typeof (2))//number
console.log(typeof (true))//boolean
console.log(typeof ('s'))//string
console.log(typeof ([1, 2, 3]))//object
console.log(typeof ({ k: 1 }))//object

//--------Call Stack for console log------------

// it should have 1. Base conditon - Avoids stackoverflow error
//    2. Recursive function call


const printNumbers = (num) => {
    if (num < 1) {  //Base condition
        return
    }
    else {
        printNumbers(num - 1)//Recursion
        console.log(num)
    }
}
printNumbers(3)//1
//2
//3

//  steps

// 1. num = 3, Calling printNumbers(2) - pause -> print 3-> Done   
//2. num = 2, Calling printNumbers(1) - pause -> print 2-> Done     
//3. num = 1, Calling printNumbers(0) - pause -> print 1-> Done
//4. num = 0, return empty value -> Done

//  Factorial
const factorial = (n) => {
    let fact = 1
    for (let i = 1; i <= n; i++) {
        fact = fact * i
    }
    return fact
}
console.log(factorial(5))//120

//Using Recursion
//Base condition =num<2

const factorialRecursion = (num) => {
    if (num<2) {
        return 1
    }
    else {
        return num*factorialRecursion(num - 1)
    }
}
console.log(factorialRecursion(3))//6
