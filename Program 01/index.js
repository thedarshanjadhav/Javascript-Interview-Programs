// 1. prog to find longest word in a given sentence?

function findLongestWord(sentence) {
    const words = sentence.split(" ");

    const longestWord = words.reduce((longest, currentWord) => {
        return currentWord.length > longest.length ? currentWord : longest;
    })
    return longestWord;
}

const sentence = "The quick brown fox jumped over the lazy dog";
const longestWord = findLongestWord(sentence);
console.log("longest word: ", longestWord); // output is => longest word:  jumped