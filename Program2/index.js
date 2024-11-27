const arr = [1,2,2,3,4]

const arr2 = [2,3,4]

//  Remove duplicates using set

const remDup = [...new Set(arr)]

console.log('Remove duplicates using Set',remDup)


// Remove duplicates using filter

const remDup1 = arr.filter((item, index)=>{
    return arr.indexOf(item) === index
} )

console.log('Remove duplicates using filter',remDup1);


// Return differences

const diff = arr.filter(item => !arr2.includes(item))

console.log("return differences",diff)
