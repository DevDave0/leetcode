const containsDuplicate = (nums) => {
    hash = {};
    for (let i = 0; i < nums.length; i++){
        if (hash[nums[i]]){
            return true
        }
        else {
            hash[nums[i]] = 1
        }
    }
    return false

};