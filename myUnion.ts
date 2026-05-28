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
    //id.toLowerCase(); // error because toLowerCase is not a method of number so you need to use type narrowing to check the type of id before using the method
    if(typeof id === "string"){
        console.log(id.toLowerCase());
    }
    else{
        console.log(id);
    }
}

const data1 : number[] | string[] = [1, 2, 3];  //this can be either all numbers or all strings but not a mix of both
const data2 : (number | string)[] = [1, "2", 3]; // this can be a mix of numbers and strings


let seatAllotment : "aisle" | "window" | "middle"; // this is a literal type which can only have one of the specified values
seatAllotment = "aisle";    
seatAllotment = "crew"; // error because crew is not one of the specified values