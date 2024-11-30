// 8. Given 2 Arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]?

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];

let i = 0;  // i is for arr1
let j = 0;  // j is for arr2
let result = [];

while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
    } else {
        result.push(arr2[j]);
        j++;
    }
}

while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
}

while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
}



console.log(result);

