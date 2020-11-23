const destCity = (paths) => {
    const start = paths.map(start => start[0])
    const end = paths.map(end => end[1])
    
    return end.filter(end => start.indexOf(end) === -1).join('')

};
