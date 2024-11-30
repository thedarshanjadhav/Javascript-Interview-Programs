// 9. Write a function that separate numbers and characters from an array?

function separate(arr) {
    let characters = [];
    let numbers = [];

    arr.forEach((item) => {
        if (typeof (item) === 'string') {
            characters.push(item);
        } else {
            numbers.push(item);
        }
    })
    return { characters, numbers };
}

const arr = ['a', 'b', 1, 2, 'c', 3];

console.log(separate(arr))