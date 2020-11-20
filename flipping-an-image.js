const flipAndInvertImage = (A) => {
    let result = []
    A.forEach(array => {
        let reversedA = array.reverse()
        let nestedA = []
        reversedA.forEach(element => {

            if(element === 0){
                nestedA.push(1)
            } else {
                nestedA.push(0)
            }
        })
        result.push(nestedA)
    })
    return result
};