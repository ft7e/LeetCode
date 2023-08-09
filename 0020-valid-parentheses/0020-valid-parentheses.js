/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if(s.length === 0 || s.length % 2 !== 0){
        return false;
    }
    let stack =[];
    s = s.split("");
    
    for(let i = 0; i < s.length; i++){
    
        switch(s[i]){
            case "(":
            case "[":
            case "{":
                stack.push(s[i]);
                break;
               
             case ")":
                if (stack.pop() !== "(") {
                    return false;
                }
                break;
             case "]":
                if (stack.pop() !== "[") {
                    return false;
                }
                break;
             case "}":
                if (stack.pop() !== "{") {
                    return false;
                }
                break;
            default:
                return false;
        }
    }
    
        return stack.length === 0;
};

