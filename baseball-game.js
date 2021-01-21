const calPoints = (ops) => {
    let result = [];
    for (let i = 0; i < ops.length; i++){
        if (parseInt(ops[i])){
            result.push(parseInt(ops[i]))
        }
        else if (ops[i] === '+'){
            result.push((result[result.length-1] || 0 ) + (result[result.length-2] || 0 ))
        }
        else if (ops[i] === 'D'){
            result.push((result[result.length - 1] || 0) * 2)
        }
        else if (ops[i] === 'C'){
            result.pop()
        }
    }
    return result.reduce((a,b)=>a+b,0)
};