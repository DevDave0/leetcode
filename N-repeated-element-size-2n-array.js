const repeatedNTimes = (A) => {
    let hash = {};
    let N = A.length/2
    for (let i = 0; i < A.length; i++){
        hash[A[i]] ? hash[A[i]]++ : hash[A[i]] = 1
        if (hash[A[i]] === N) return A[i]
    }
};