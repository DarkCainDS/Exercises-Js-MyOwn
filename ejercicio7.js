const odd = odd1 => {
    let regreat1 = 0;
    for(z = 1; z < odd1; z++){
        if(z % 2 === 1){
            regreat1++;
        }
       
    }
    console.log(regreat1); 
}
odd(1000);