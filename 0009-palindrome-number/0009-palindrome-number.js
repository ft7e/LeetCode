/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
     if(x < 0)
     {
     return false
     }
 let stack = [];
 let reminder = x;
 while(reminder > 0){
     stack.push(reminder % 10);
     reminder = Math.floor(reminder / 10);
 }
 while(stack.length != 0){
     if(stack.pop() != x % 10)
     {
         return false
     }
     x = Math.floor(x/10); 
 }
 return true
};