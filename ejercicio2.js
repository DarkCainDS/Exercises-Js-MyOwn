const palindromo = texto => {
    texto1 = texto.split('')
                    
                    .reverse()
                    
                    .join('')
                    .toLowerCase()
                    .replace(/ /g ,"")
    texto = texto.toLowerCase().replace(/ /g ,"");


    console.log(texto1);

    if(texto == texto1){
        return `${texto} corresponde a un palindromo`;
    }else{
        return `${texto} no corresponde a un palindromo`;
    }
}

console.log(palindromo("Yo hago yoga hoy"));