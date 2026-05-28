let tUser : [string, number, boolean]; // this is a tuple which can have a fixed number of elements with specific types
tUser = ["manan", 1, true];

let rgb : [number, number, number] = [255, 0, 0]; // this is a tuple which can have three numbers representing the RGB values of a color

// you can also use optional elements in a tuple
let user : [string, number, boolean?]; // this is a tuple which can have an optional boolean element
user = ["manan", 1]; // this is valid because the boolean element is optional
user = ["manan", 1, true]; // this is also valid because the boolean element is provided

//however you can use methods like push and pop on tuples which can change the length of the tuple and make it not type safe
//reason is that tuples are just arrays with fixed types and length but they are not immutable like arrays in other languages
tUser.push("manan"); // this is valid but it changes the length of the tuple and makes it not type safe
console.log(tUser); // this will print ["manan", 1, true, "manan"] which is not type safe because the tuple was supposed to have only three elements with specific types