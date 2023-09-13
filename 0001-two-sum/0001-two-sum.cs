public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        
        Dictionary<int, int> numbers = new Dictionary<int, int>();
        
        for(int i = 0; i < nums.Length; i++){
            if(numbers.TryGetValue(target - nums[i], out int val)){
                int[] arr = {i, val};
                return arr;
            }
            numbers.TryAdd(nums[i], i);
        }
        int[] fall = {0,0};
        return fall;
    }
}