// 5. Program to find Reverse of a string without using built-in method?

let value = 'abc';
let result = '';

for (let i = value.length-1; i >= 0; i--) {
    result = result + value[i];
}

console.log(result);



