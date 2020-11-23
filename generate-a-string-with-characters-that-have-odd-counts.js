const generateTheString = (n) => {
    let result = '';
    if (n % 2 === 0){
        for (let i = 0; i < n - 1; i++){
            result += 'a'
        }
        result += 'b'
    }
    else {
        for (let i = 0; i < n; i++){
            result += 'b'
        }
    }
    return result
    
};