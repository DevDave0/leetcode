const sortedSquares = (nums) => {
    let result = [];
    for (let i = 0; i < nums.length; i++){
        result.push(nums[i]*nums[i])
    }
    result.sort((a,b) => a - b)
    return result
};