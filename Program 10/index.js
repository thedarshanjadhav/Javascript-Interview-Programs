// Write an Example of Shallow copy and Deep copy.

// ! Shallow Copy concept

const shallowOriginal = {
    name: "Alice",
    hobbies: ["reading", "traveling"]
};
console.log(shallowOriginal);

// copying the reference of shallowOriginal.
const shallowCopy = shallowOriginal;

// changing the shallowCopy name but it also reflect on original object also.
shallowCopy.name = 'Dj';


console.log('shallowOriginal', shallowOriginal);
console.log('shallowCopy', shallowCopy);

// ----------------------------------------------------------

console.log("----------------------------------------------------------");


//! Deep Copy concept

const deepOriginal = {
    name: "Alice",
    hobbies: ["reading", "traveling"]
};
console.log(deepOriginal);


const deepCopy = { ...deepOriginal };
deepCopy.name = 'Dj';

console.log('deepOriginal', deepOriginal);
console.log('deepCopy', deepCopy);