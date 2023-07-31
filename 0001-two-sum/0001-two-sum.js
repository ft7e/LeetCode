/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};
    
    for([index, element] of nums.entries()){

        let complementaryPair = target - element;
        if(hashMap[complementaryPair] !== undefined)
            return [index, hashMap[complementaryPair]];
        else
        {
            hashMap[element] = index;
        }
    }
};