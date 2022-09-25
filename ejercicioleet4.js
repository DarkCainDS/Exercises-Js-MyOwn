function commonPrefix(str){
    let prefix = '';

    if(str.length === 0) 
    return prefix 

    for(let z = 0; z < str[0].length; z++){

        const character = str[0][z]

        for (let y = 0; y < str.length; y++){

            if(str[y][z] !== character) 
            return prefix
        }

        prefix = prefix + character
    }

    return prefix
}
console.log(commonPrefix(["flor","flole","fleur"]))
