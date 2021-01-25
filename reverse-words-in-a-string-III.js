const reverseWords = (s) => {
    let result = [];
    let split = s.split(' ')
    for (let i = 0; i < split.length; i++){
        let reverse = split[i].split('').reverse().join('')
        result.push(reverse)
    }
    return result.join(' ')
};