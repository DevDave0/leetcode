const maxProduct = (nums) => {
    let sorted = nums.sort((a, b) => {
        return a - b
    })
    return (sorted[sorted.length-1]-1) * (sorted[sorted.length-2]-1)
};