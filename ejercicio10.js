const ladder =  (number) => {
    let step = "";
    for(let z = 1; z < number; z++){

        let escalones = "";

        for(let escalon = 1; escalon <= z; escalon++){
            escalones += "[-]";
        }
        step += escalones + "\n";
    }


    
    return step
}
console.log(ladder(5));