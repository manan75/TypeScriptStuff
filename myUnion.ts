// union is used when you are not sure about the type of a variable, and it can be one of several types.
// you can use union types to specify that a variable can be of multiple types

let score: number | string = 33;
score = "55";
score = 66;

type User = {
    name: string,
    id: number 
} 

type Admin = {
    username: string,
    id: number
}

let manan : User | Admin = {name: "manan", id: 1};

//now you can chnage manan to admin

manan = {username: "mananAdmin", id: 1};

// you cant use methods that are not common to both types without type narrowing

// console.log(manan.name); // error because name is not common to both types
// console.log(manan.username); // error because username is not common to both types

function getDbId(id: number | string){
    //id.toLowerCase(); // error because toLowerCase is not a method of number
    if(typeof id === "string"){
        console.log(id.toLowerCase());
    }
    else{
        console.log(id);
    }
}