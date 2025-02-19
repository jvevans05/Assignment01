

//STEP 1
// let someMonth
// function theMonth()
// let currentMonth()
// let summerMonth
// let myLibraryFunction


//STEP 2
// Examples of various literals
/*
const MEANINGOFLIFE = 42
let firstName = "Jon, probably"
let hungry = true
let fillInLater = null
*/


//STEP 3
//complex expressions
// let y = 4 + 2
// some math
// let x = avgValue([4, 3, 2])
// assuming avgValue is a function that receives an array and returns an average


//STEP 4
/*
var firstName
var lastName
var address
var city
var state
var zipCode
var yourAge
var referralSource
var mayWeContactYou

var strFirstName
var strLastName
var strAddress
var strCity
var strState
var intZipCode
var intYourAge
var strReferralSource
var blnMayWeContactYou
*/


//STEP 5
/*
var city = "Sun Diego"
var age = 42
var mayWeContactYou = false
*/


//STEP 6
/*
prompt()
let x
x = 40 + 'two'
alert(x)
alert('hello')
document.write(x)
document.write('hello')
*/
//I was trying to figure out why nothing was displaying. turns out I forgot to add the js folder to my script tag in the html file.
//this displays the string '40twohello'. x is string '40two'.


//STEP 7
/*
let first = 'five' + 5
let second = 10 + 'Ace of Spades'
document.write(first, second)
*/
//The order doesn't matter. in both cases they are concatenated and displayed as strings.


//STEP 8
/*
let someString = 'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"'
console.log(someString)
*/
//forward slash allow us to add special character to a string.


//STEP 9
/*
let a = null
var b 
console.log(a, b)
*/
//feels kinda cheap but it works


//STEP 10
/*
let firstName = "Jon, probably"
const MEANINGOFLIFE = 42
let hungry = true
let Jon = {tall: true}
let heWhoShallNotBeDefined
console.log(typeof firstName, typeof MEANINGOFLIFE, typeof hungry, typeof Jon, typeof heWhoShallNotBeDefined)
*/

//console.log(typeof(MEANINGOFLIFE, hungry, firstName) )
//If I try to give typeof multiple argument it only operate on the last one. Lame.


//STEPS 11 through 14
/*
let nameOriginal = 'Zak Ruvalcaba'
let name = "Jonathan Evans"
let course = 'JavaScript'

let newLanguage = 'RuvalcabaScript'
let nameFunny = 'Jon the Magnificent'

//the original
alert(`Hello ` + `${nameOriginal}` + `, welcome to the Javascript class!`)
//the name replacement, hard coded
alert(`Step 11: Hello ` + `Jonathan Evans` + `, welcome to the Javascript class!`)
//the name replacement, with string variable
alert(`Step 12: Hello ${name}, welcome to the Javascript class!`)
//the name and course replacement
alert(`Step 13: Hello ${name}, welcome to the ${course} class!`)
//original with a line break
alert(`Step 14: Hello ${nameOriginal}, \nWelcome to the Javascript class!`)
//the funny one
alert(`Hello ${nameFunny}, welcome to the ${newLanguage} class!`)

//I combined these since there was some overlap. Hope you don't mind.
*/


//STEP 15
/*
let nameNew = prompt('What is your name?')
alert(`Hello ${nameNew}, welcome to the JavaScript class!`)

//I didn't combine theYonse since the previous ones were getting a little messy.
*/


//STEP 16
/*
let nameNew = prompt('What is your name?')
let courseNew = prompt('Which course are you taking?')
alert(`Hello ${nameNew}, welcome to the ${courseNew} class!`)
*/


//STEP 17
/*
let x = 10
let y = 20

console.log(typeof x, x, x + y )
*/

/*
//10 and 20 in base 10
let x = parseInt( 10, 10)
let y = parseInt( 20, 10)

console.log(typeof x, x, x + y )
//for my own study. same results.
*/


//STEP 18
/*
let x = 20
x = x + 20
console.log(typeof x, x)
*/


//STEP 19
/*
let x = 20
x = x * 5
console.log(typeof x, x)
*/


//STEP 20
/*
let x = 20 % 3
x = x / 1
console.log(typeof x, x)
//modulus gives us the remainder
*/


//STEP 21
/*
let c = '5'
let d = 5

alert( c == d)
//equals operator only checks value
*/


//STEP 22
/*
let c = '5'
let d = 5
let e = 7
let f = 777

alert( c === d)
alert(e >= f)
//exactly equals operator checks value and type
*/


