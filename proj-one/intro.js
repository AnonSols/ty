"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helloWorld = 'Hello world';
var isTrue = function (value) {
    return helloWorld.length > 0 ? true : false;
};
console.log(helloWorld);
//void returns nothing never
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    // handles error use to end the function
    // represents values which are never observed
    throw new Error(errmsg);
}
// typescript bad behaviours! 
var newUser = { name: "solomon", email: "h@.com", isPaid: false, isEmployed: false };
function createCourse(_a) {
    var string = _a.name, boolean = _a.isPaid;
    return { name: 'solomon', isPaid: true };
}
isTrue(false);
function newcreateUser(user) {
    var a = false;
    console.log(a);
    return { name: 'solomon', _id: '3', email: 'string', isActive: false, isPaid: false };
}
var mainUser = {
    _id: 'jKl#233',
    name: 'Solomon',
    email: 'hh@gmal.com',
    isActive: true,
    isPaid: false
};
newcreateUser(mainUser);
function bankHeaven() {
    return { cardNumber: '1234567890', cardDate: 'tuesday-230', cvv: 3456453 };
}
bankHeaven();
