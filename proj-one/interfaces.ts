// similar to types in ts

interface newestUser {
    readonly dbid: number,
    email: string,
    userId: string,
    googleId?: string,
    startTrial: () => string,
    newTrial(): void,
    getCoupon(couponname: string, value: number): number
}

interface newestUser {
    githubToken: string
    name: string,
}
const solomon: Admin = {
    role: "admin",
    dbid: 22,
    email: 'text',
    userId: 'string',
    startTrial() {
        return 'google'
    },
    newTrial: ()=> console.log("This wouldn't return shit but works regardless"),
    getCoupon(name, value){
        console.log(name)
        return 32 + value
    },
    githubToken: 'two',
    name: 'name',
}

// reopening of interface - means adding more value to it. in type we use the '&' to inherit and add.




// inheritance 

interface Admin extends newestUser {
    role: "admin" | "ta" | "learner"
}
