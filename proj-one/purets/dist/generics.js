"use strict";
const scores = [];
// Genreics 
// The difference between this and any is that with any you are likely going to loose your data type. For instance i can pass an of string and get a return value of number with any. Meanwhile with the 'Type' type , it locks the passed type and returns that types, throws the an error if the type does not correlate.
function objectOne(val) {
    return val;
}
// The same 
function identityFour(val) {
    console.log(val);
    return val;
}
identityFour({ brand: 'kin', type: 45 });
function arrayInput(val) {
    const myIndex = 4;
    return val[myIndex];
}
const identityProduct = (products) => {
    return products;
};
const identityFive = (products) => {
    return products;
};
