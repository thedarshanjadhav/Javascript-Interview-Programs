function isPalindrome(str) {

    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedString = cleanedString.split('').reverse().join('');
    
    return cleanedString === reversedString;
}

const testString = "A man, a plan, a canal, Panama";
if (isPalindrome(testString)) {
    console.log(`"${testString}" is a palindrome!`);
} else {
    console.log(`"${testString}" is NOT a palindrome!`);
}
