const canBeEqual = (target, arr) => {
    let sorted1 = arr.sort((a, b) => a - b)
    let sorted2 = target.sort((a, b) => a - b)
    return sorted2.every((ele, i) => sorted1[i] === sorted2[i]);
};