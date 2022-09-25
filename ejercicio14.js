function repeat (text,numberOfRepeat){
    
    let result = "";
    for(let z=0 ; numberOfRepeat > z; z++){
        result += text + "\n";
    }   
    return result;
}
console.log(repeat("DarkCain", 15));