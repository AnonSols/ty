"use strict";
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
var _Admin_id;
// const solo = new User("oslo", "solo")
// // solo.name = "solomon"
class Admin {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        //access modifiers - they limit the ability on how to access a property. publick, private, protected
        this._courseCount = 1;
        _Admin_id.set(this, 1234);
    }
    // uset the 'get' keyword to create getters
    get getApple() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setters has no return type!
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error('The course count should be more than one');
        }
        this._courseCount = courseNumber;
    }
}
_Admin_id = new WeakMap();
class subUser extends Admin {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    // protected classes can be used in the parent and every inherited classes unlike private class thats it's used only within the parent class.
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const admin = new Admin("solomon", "solo");
