// TASK 1
////////////////////////////////////////////////////////

// const users = [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

// function name(users){
//    const age = users.map((user) => user.age)

//    const minage = Math.min(...age)

//    const youngest = users.find((user) => user.age === minage)

//    return youngest.name
// }


// console.log((name(users)))

/////////////////////////////////////////////////////////

// const users = [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

// const find = (users) => {
//     const ages = users.map(user => user.age)

//     const minage = Math.min(...ages)

//     const youngest = users.find(user => user.age === minage)

//     return youngest.name
// }

// console.log((find(users)))


////////////////////////////////////////////////////////////


// TASK 2

/////////////////////////////////////////////////////////////


// const one = {name: 'Temo', age: 25}

// const two = {...one}

// one.name = 'lashoooooooooooooooo'

// console.log(one)
// console.log(two)

////////////////////////////////////////////////////////////

// TASK 3 

/////////////////////////////////////////////////////////////

// function randomA(){
//     return parseInt(Math.random()*10)+1
// }

// function randomB(){
//     return parseInt(Math.random()*10)+1
// }

// let A = randomA()
// let B = randomB()


// while(A !== 3 || B !== 3) {

//     A = randomA()
//     B = randomB()

//     console.log(A)
//     console.log(B)

//     if(A == 3){
//         console.log(` A win`)
//         break
//     }

//     if(B == 3){
//         console.log(` B win`)
//         break
//     }
 
// }


// TASK 1 - VOL2

// const users =  [{name: 'Temo', age: 25},
// {name: 'Lasha', age: 21}, {name: 'Ana', age: 28}]

// function find(users){
//     const ages = users.map(user => user.age)

//     const minage = Math.min(...ages)

//     const youngest = users.find(user => user.age === minage)

//     return youngest.name

// }

// console.log(find(users))

/////////////////////////////////////////////////////////

// TASK 3 - VOL3

// function randomA(){
//     return parseInt(Math.random()*10)+1
// }

// function randomB(){
//     return parseInt(Math.random()*10)+1
// }

// let A = randomA()
// let  B = randomB()

// while(A !== 3 || B !== 3){
    
//     A = randomA()
//     B = randomB()

//     console.log(A)
//     console.log(B)

//     if(A == 3){
//         console.log('A win')
//         break
//     }

//      if(B == 3){
//         console.log('B win')
//         break
//     }
// }




//////////////////////////////////////////////////////////////

// const user= {
//     id:5,
//     name:'khubeja'
// }

// console.log(Object.entries(user))   

///  ეს ამოიღებს key value წყვილებს , ანუ ორი მასივი იქნება (id და 5) და მეორე (name და khubeja)

//////////////////////////////////////////////////

// TASK1 - ამოხსნა 2

const user= {
    id:5,
    name:'khubeja'
}

function copy(user){
    const newuser = {}
    Object.entries(user).forEach(([key,value]) => newuser[key] = value)

    return newuser
}

console.log(copy(user))
user.name = 'krjrekjr'
console.log(user)