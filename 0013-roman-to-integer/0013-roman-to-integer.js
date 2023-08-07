/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanHash = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900
    }
    let finalResult = 0;
    for(let i = 0; i < s.length; i++){
        
        const isSpecialCharacter = romanHash[s[i]+s[i+1]];
        if(isSpecialCharacter)
            {
            finalResult += isSpecialCharacter;
            i++
            }
        else
            {
                finalResult += romanHash[s[i]]
            }
        
    }
    return finalResult
};