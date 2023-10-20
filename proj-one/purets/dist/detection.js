"use strict";
// // discriminated union just pipont on the fact that there should be a unique id e.g like a kind that identifies the propertys name
//exhaustive switch help us manage every possible state of our application and any unpredictable behaviour
function getArea(shape) {
    let area = '';
    switch (shape.kind) {
        case "circle":
            area = "Math.PI ** shape.radius";
            break;
        case "square":
            area = "shape.length * shape.length";
            break;
        case "rectangle":
            area = "shape.breadth * shape.length";
            break;
        default:
            isNeverMet(shape);
    }
    return area;
}
function isNeverMet(value) {
    throw new Error("Unreachable code! Your code is never to reach here.");
}
