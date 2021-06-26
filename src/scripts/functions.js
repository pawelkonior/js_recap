var element = 'ala ma kota';
let element1 = 'ala ma kota';
const element2 = 'ala ma kota';


// console.log(element)
// console.log(element1)
// console.log(element2)


// Scope
// var = functional scope
// let, const = block scope

// function add(a, b){
// console.log(element)
// }

// add();

if (1 < 4){
    var item = 5
}

// console.log(item)

// hoisting
// przenoszenie deklaracji var oraz funkcji (słowo kluczowe function), deklaracji class na górę zasięgu
// var - hoisted
// let, const - not hoisted

// console.log(x)
// var x = 4

// var y;
// console.log(y)
// y = 4

// console.log(z)
// let z = 4

// elo = 4
// console.log(elo)
// console.log(window.elo)
// console.log(window)

// Redeclaration
// var  - can
// let, const - can not

// var c = 2
// var c = 4

// let c1 = 2
// let c1 = 4

// const c2 = 2
// const c2 = 4

// console.log(c2)

// Reinitialization
// var - can
// let - can
// const - can not

// var e = 1
// e = 2


// let e = 1
// e = 1

// const e = 1
// e = 1


// Function
// - named
// - anonymous



function name(params){
    // dynamic context
    console.log(this)
    return 'ala'
}

// console.log(name())



// Function expression

const add = function(a, b){
     // dynamic context
     console.log(this)
    return a + b
}

// console.log(add(2, 3))

// arrow function
const add2 = (a, b) => {
     // lexical context
     console.log(this)
    return a + b
}
const add3 = (a, b) => a + b
const add4 = () => 2 + 3
const add5 = a => a + 3

// console.log(add5(2, 3))

// one liner
const isPalindrome = text => text.toLowerCase() === text.toLowerCase().split("").reverse().join("")

console.log(isPalindrome('ela'))