
///// variables, lists/arrays, Objects

////////////
////////////    Variables  /////////////
////////////

// const x = 10
// console.log(x)


// let y = 15
// console.log(y)

// // x = 20 You can't change variable that has been declared with 'const' but you can if it has been declared with 'let' like below 'y'
// y = 21
// console.log(x)

// console.log(y)






///////////////////
/////////////////// Arrays(like lists in python)
///////////////////

// const Fruits = ["Apple","Banana", "Orange"]

// console.log(Fruits[0])

// console.log(Fruits[1])

// console.log(Fruits[2])

// console.log(Fruits)

// console.log(Fruits[Fruits.length-1])

// console.log(Fruits[Fruits.length-2])

// console.log(Fruits[Fruits.length-3])

// Fruits.push('Cherry')



// console.log(Fruits)


// Fruits.pop()
// console.log("After 1 pop")
// Fruits.pop()

// console.log(Fruits)



////////////////
////////////////    Objects  ///////////////
////////////////


// const credentials = {
//     username : "name_of_user",
//     password: "password_of_user"
// }
// console.log(credentials.username)
// console.log(credentials.password)

// console.log("calling like python")
// console.log(credentials["password"])

// console.log('Adding new key&item')
// credentials.website = "google"
// console.log(credentials)

// delete credentials.password
// console.log(credentials)



////////////////
////////////////    Functions     ///////////////////
////////////////


// function sayHello() {
//     alert("Hello from the console!")
// }
// sayHello()
///// Above code 'say hello will get executed only in borwser not in vscode node.js


// function sayHellofrom(name) {
//     alert("Hello from " + name)
// }
// sayHellofrom("myname")
///// Above code 'say hello will get executed only in borwser not in vscode node.js


///// like lambda function in python
// () => {
//     return "say Hello!"
// }

// const greeting = () => {
//     return "Say Hello!"
// }
// console.log(greeting())

// numberList = [10, 20, 30, 40]
// console.log(numberList.filter((element) => {return element > 20}))


////////////////
////////////////   Methods   /// Functions which are attaced to objects are called methods
////////////////

// const channel = {
//     firstName: "Subscribe ",
//     lastName:"to my channel!!",
//     saySubscribe() {
//         return this.firstName + this.lastName
//     }
// }

// console.log(channel.saySubscribe())



////////////
////////////  
////////////

// console.log(23 === 23) // True
// console.log(23 === 24) // False
// console.log(23 == '23') // True
// console.log(23 === '23') // False

// console.log(20 + '10')
// console.log(20 - '10')
// console.log(20 * '10')
// console.log(20 / '10')


////////////
////////////    Loops   /////////
////////////

// function checkDrivingAge(age) {
//     if (age >= 18) {
//         return "You ma obtain a license and drive!"
//     } else if (age >= 16) {
//         return "Wait a little longer."
//     } else {
//         return "You can drive a toy car :)"
//     }
// }

// console.log(checkDrivingAge(20))
// console.log(checkDrivingAge(17))
// console.log(checkDrivingAge(9))


// const colours = ['Red', 'Green', "Blue"]
// for (i=0; i<colours.length; i++) {
//     console.log(colours[i])
// }

// for (colour of colours) {
//     console.log(colour)
// }