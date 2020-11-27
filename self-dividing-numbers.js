const selfDividingNumbers = (left, right) => {
    let result = [];
    for (let i = left; i <= right; i++){
        if (i < 10) {
            result.push(i)
            continue;
        }
        let tmp = i;
        while(tmp > 0) {
            let module = tmp % 10;
            if(module == 0 || i % module != 0) 
                break;
            tmp = Math.floor(tmp / 10);
        }
        if(tmp == 0){
            result.push(i);
        }
    }
    return result
};

