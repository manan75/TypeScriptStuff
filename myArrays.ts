//array basics

const heros: string[] = ["Superman", "Batman", "Flash"];
const power : number[] = [1, 2, 3, 4, 5];

type User = {
    name: string,
    isActive: boolean
}
const allUsers: User[] =[]

//nD arrays
const MLModels: number[][] = [
    [255, 255, 255],
    [255, 255, 255],
    [255, 255, 255]
]

heros.push("Spiderman");
power.push(6);

allUsers.push({name: "manan", isActive: true});