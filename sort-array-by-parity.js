const sortArrayByParity = (A) => {
    let evens = [];
    let odds = [];
    for (let i = 0; i < A.length; i++){
        if (A[i] % 2 === 0){
            evens.push(A[i])
        }
        else if (A[i] % 1 === 0){
            odds.push(A[i])
        }
    }
    return evens.concat(odds)
};