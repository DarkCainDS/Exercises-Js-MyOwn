function divideArray (array, cut){
    array_new = [];
    
    for(elemento of array){

        final_array = array_new[ array_new.length -1];

       if(!final_array || final_array.length === cut){
            array_new.push([elemento]);
       }else{
            final_array.push(elemento);
       }

       
    }
    
    return array_new
}
console.log(divideArray([0,2,4,6,7,9,10,50,100,120,160], 2))