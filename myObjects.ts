const User = {
    name: "John Doe",
    email: "john.doe@example.com",
    isActive: true
}

function createUser({name, age}: {name: string, age: number}) {

}
createUser({name:"hitesh", age:34});

// the syntax is bit confusing the return type is :{}

// function createCourse():{}{
//     return {}
// }

function createCourse():{name:string, price: number}{
    return {name: "react", price:1222};
}

console.log(createCourse());


//A better way to use objects is through type aliases

// type User = {
//     name: string,
//     email : string,
//     age: number,
//     isActive: boolean
// }


// function makeUser(user: User): User {
//     return {name: "manan", email:"ok@gmail.com", age: 23, isActive: true};
// }

// console.log(makeUser({name:" ", email:" ", age:0, isActive: false}));


//readonly 

type User = {
    readonly _id : number,
    name: string,
    email : string
    cardDetail?: number
}

let myUser : User = {
    _id :1,
    name: "manan",
    email: "ok@gmail.com"
    //no issue if we dont use optional attribute
}


// myUser._id = 33;

type cardName = {
    cardname : string
}

type cardDate = {
    cardDate : string
}
// you can concat multiple types to create a new type so that u can use all properties of those types

type cardDetails = cardName & cardDate & {
    cvv : string
}

