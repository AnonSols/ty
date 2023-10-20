"use strict";
function newIdentity(val) {
    if (typeof (val) == "string") {
        return val.toUpperCase();
    }
}
function provideId(id) {
    if (!id) {
        console.log('please provide id');
        return;
    }
    id.toLowerCase();
}
//Type guards are what we know as checking types in javascript using the typeof keyword. We have the in  and the instanceof
function isAdminAccount(account) {
    if ("super" in account) {
        return account.super;
    }
    return false;
}
// instaceof checks if the object is the instance of another class
function logValue(value) {
    if (value instanceof Date) {
        console.log("I'm an instace of date", value.toUTCString());
    }
    else {
        console.log("I'm just a mere string", value.toLowerCase());
    }
}
function isBird(pet) {
    return pet.fly() !== undefined;
}
function petFood(pet) {
    if (isBird(pet)) {
        pet.fly;
        return "Birds food only assigned here";
    }
    else {
        pet.swim;
        return "Fish Food only assigned here";
    }
}
// to be a paid member you must have admin previlages
function isPaidAccount(usrAcc) {
    return usrAcc.super !== (undefined || null || false);
}
//steps in narrowing
