function ceroToHoundred (number){

    let result = "-- to " + number +"to 0 --" + "\n"; 
    let number_final = number;
    for(let z= 0; number_final > 0; z++){
        result += `n°${number_final} \n`;
        number_final = number_final - 8;

    }
    result += "--The End--"
    return result;
    
}
console.log(ceroToHoundred(100))