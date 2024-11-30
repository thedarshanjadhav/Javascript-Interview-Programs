// 6. find the max count of consecutive 1's in an array ?

//             2         3         2
const arr = [1, 1, 0, 1, 1, 1, 0, 1, 1];

let maxCount = 0;
let currentCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        currentCount++;
        maxCount = Math.max(maxCount, currentCount);
    } else {
        currentCount = 0;
    }
}


console.log("max count of consecutive 1's is: ", maxCount);
