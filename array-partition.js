const arrayPairSum = (nums) => {
    let result = 0;
    nums.sort((a, b) => (a - b));
    for (let i = 0; i <nums.length; i += 2){
        result += nums[i]
    }
    return result
};

