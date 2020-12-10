const findMin = (nums) => {
    let length = 0;
    let total = nums.length - 1 
    while (length < total){
        let m = Math.floor((length + total)/2);
        if (nums[m] > nums[total]){
            length = m + 1
        }
        else {
            total = m
        }
    }
    return nums[length]
};
