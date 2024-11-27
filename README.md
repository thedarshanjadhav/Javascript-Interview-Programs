# Javascript-Programs-Practices
Javascript Programs Practices for interview 


**const arr = [1,2,2,3,4]**

**const arr2 = [2,3,4]**

## Remove duplicates using set

const remDup = [...new Set(arr)]

console.log(remDup)


## Remove duplicates using filter

const remDup1 = arr.filter((item, index)=>{
    return arr.indexOf(item) === index
} )

console.log(remDup1)


## Return differences

const diff = arr.filter(item => !arr2.includes(item))

console.log(diff)
