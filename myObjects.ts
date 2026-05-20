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

type User = {
    name: string,
    email : string,
    age: number,
    isActive: boolean
}


function makeUser(user: User): User {
    return {name: "manan", email:"ok@gmail.com", age: 23, isActive: true};
}

console.log(makeUser({name:" ", email:" ", age:0, isActive: false}));