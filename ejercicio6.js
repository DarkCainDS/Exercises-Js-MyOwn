const squareUpper = number => {
    content = "";
    for(z=0; z < number; z++){
        content += "*";
    }
    //console.log(content);
    //console.log(content);
    return content;
}
const squarePainting = number => {

    let draw = squareUpper(number) + "\n";

    for(x=0; x < number -2; x++){
        printer = "*" ;
        
        for(c=0; c < number - 2; c++){
            printer += " ";
            
        }
        printer += "*";
        draw += printer + "\n";
    }

    
    draw += squareUpper(number);
    
    return draw
}
console.log(squarePainting(4));