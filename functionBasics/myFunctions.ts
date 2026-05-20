//this will not give any error, but there is a logic flaw in this

// function addTwo(num:number){
//     return "hello";
// }

//so you do this
// : type to specify the return type of the function
function addTwo(num:number): number {
    return num+2;
}

//for arrow functions its same

const getHello = (s:string):string =>{
    return "hello "+s;
}

//void functions are functions that do not return anything, they just perform some action
function consoleError(err:string):void{
    console.log(err);
}

//never functions are functions that never return anything, they either throw an error or have an infinite loop
function handleError(err:string): never{
    throw new Error(err);
}


console.log(addTwo(5));
console.log(getHello("world"));