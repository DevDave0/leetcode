const dirReduc = (arr) => {
    let changed = false;
    let cancelMap= {
        "NORTH" : "SOUTH",
        "SOUTH" : "NORTH",
        "EAST" : "WEST",
        "WEST" : "EAST",
    };

    for (let i = 0; i < arr.length-1; i++){
        if (arr[i+1] == cancelMap[arr[i]]){
            arr.splice(i, 2);
            changed = true;
        }
    }

    return changed ? dirReduc(arr) : arr

}