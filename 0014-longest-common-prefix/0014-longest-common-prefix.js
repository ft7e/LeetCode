/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) {
        return ""; // Handle the case of an empty input array
    }
    
    let longestPrefix = "";
    const firstWord = strs[0];
    
    for (let i = 0; i < firstWord.length; i++) {
        for (let word of strs) {
            if (word[i] !== firstWord[i]) {
                return longestPrefix;
            }
        }
        longestPrefix += firstWord[i];
    }
    
    return longestPrefix; // Return the longest common prefix
};