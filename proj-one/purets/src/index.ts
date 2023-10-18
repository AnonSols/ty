// class User {
//     //public by default
//     public email: string
//     user: string
//     //# is a shorcut to private
//     #name: string = ""
//     private readonly id = "1234"
//     constructor(email: string, user: string) {
//         this.email = email;
//         this.user = user;
//     }
// }

// const solo = new User("oslo", "solo")
// // solo.name = "solomon"


class Admin {
//access modifiers - they limit the ability on how to access a property. publick, private, protected

    protected _courseCount = 1
    readonly #id = 1234

    constructor(
        public name: string, 
        public email: string,
    ){}

    // uset the 'get' keyword to create getters
    get getApple():string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // setters has no return type!
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('The course count should be more than one')
        }
        this._courseCount = courseNumber
    }

}

class subUser extends Admin {
    isFamily: boolean = true

    // protected classes can be used in the parent and every inherited classes unlike private class thats it's used only within the parent class.
    
    changeCourseCount() {
        this._courseCount = 4
    }
}

const admin = new Admin("solomon", "solo")
