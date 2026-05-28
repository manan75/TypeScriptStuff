
interface User {
    readonly dbId: number, // readonly means that this property cannot be changed after it is initialized
    email: string,
    userId: number,
    googleId?: string, // optional property means that this property may or may not be present in the object
    startTrial: () => string, // this is a method which returns a string
    getCoupon: (couponName: string) => number // this is a method which takes a string as an argument and returns a number
}

const manan: User = {  
    dbId: 1,
    email: "manan@gmail.com",
    userId: 1,
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (couponName: string) => {
        return 10;
    }
}

// manan.dbId = 2; // error because dbId is readonly and cannot be changed after it is initialized

//reopening the interface to add more properties or methods
interface User {
    githubToken: string,
    getGithubToken: () => string
}

//inheriting the User interface to create a new interface which has all the properties and methods of the User interface and also has its own properties and methods
interface Admin extends User {
    role: "admin" | "ta" | "learner",
    getRole: () => string
}